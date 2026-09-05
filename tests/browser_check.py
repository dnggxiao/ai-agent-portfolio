"""Headless local-browser QA. Tests only the public site and synthetic demo.
Set CHROMIUM_EXECUTABLE to use a system Chromium. Otherwise Playwright uses its
installed browser. Outputs machine-readable results and optional screenshots.
"""
from __future__ import annotations
import functools
import json
import os
import re
from urllib.parse import urlparse
from types import SimpleNamespace
import shutil
import tempfile
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'verification'
OUT.mkdir(exist_ok=True)
PREVIEWS=ROOT/'previews'
PREVIEWS.mkdir(exist_ok=True)
class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT/'docs')))
thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
url=f'http://127.0.0.1:{server.server_port}'
OFFLINE=os.environ.get('PORTFOLIO_OFFLINE_QA')=='1'
report={'scope':'portfolio website and synthetic demo only','transport':('in-memory assets; HTTP and CSP not tested' if OFFLINE else 'local HTTP server'),'cases':[],'checks':[]}

def load(page, target, javascript=True):
    if not OFFLINE:return page.goto(target,wait_until='networkidle')
    parsed=urlparse(target)
    filename=parsed.path.rsplit('/',1)[-1] or 'index.html'
    page.goto('about:blank'+(('?'+parsed.query) if parsed.query else '')+(('#'+parsed.fragment) if parsed.fragment else ''))
    markup=(ROOT/'docs'/filename).read_text(encoding='utf-8')
    # The test fixture is assembled in memory because this sandbox blocks local
    # HTTP navigation. Production assets and CSP are NOT changed. This mode
    # validates rendering/logic only, not browser HTTP loading or CSP behavior.
    markup=re.sub(r'<meta http-equiv="Content-Security-Policy"[^>]*>', '', markup)
    markup=re.sub(r'<script[^>]*src="[^"]+"[^>]*></script>', '', markup)
    markup=re.sub(r'<link[^>]*rel="(?:stylesheet|icon)"[^>]*>', '', markup)
    markup=markup.replace('</head>','<style>'+(ROOT/'docs/styles.css').read_text(encoding='utf-8')+'</style></head>')
    page.set_content(markup)
    if javascript:
        for name in ['content.js','demo.js','app.js']:
            page.add_script_tag(content=(ROOT/'docs'/name).read_text(encoding='utf-8'))
    return SimpleNamespace(status=200)


def check(name, condition):
    if not condition:raise AssertionError(name)
    report['checks'].append(name)
    print('PASS '+name,flush=True)

try:
    with sync_playwright() as pw:
        path=os.environ.get('CHROMIUM_EXECUTABLE')
        browser=pw.chromium.launch(headless=True,executable_path=path,args=['--no-sandbox'])
        report['browser']=browser.version
        for lang,filename in [('zh','index.html'),('en','index.en.html')]:
            for width in [1440,1024,390,320]:
                context=browser.new_context(viewport={'width':width,'height':1000},reduced_motion='reduce')
                page=context.new_page();page.set_default_timeout(8000);errors=[];remote=[]
                page.on('pageerror',lambda e:errors.append(str(e)))
                page.on('console',lambda m:errors.append(m.text) if m.type=='error' else None)
                page.on('request',lambda r:remote.append(r.url) if not (r.url.startswith(url) or r.url.startswith('about:')) else None)
                response=load(page,f'{url}/{filename}')
                page.locator('#demo-rows tr').first.wait_for()
                name=f'{lang}-{width}'
                check(name+(' fixture loaded' if OFFLINE else ' status 200'),response.status==200)
                check(name+' six project cards',page.locator('.project-card').count()==6)
                check(name+' five Skill cards',page.locator('.skill-card').count()==5)
                check(name+' one h1',page.locator('h1').count()==1)
                check(name+' locale',page.locator('html').get_attribute('lang')==('en' if lang=='en' else 'zh-CN'))
                check(name+' no document overflow',page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'))
                check(name+' no runtime errors',not errors)
                check(name+' no remote page assets',not remote)
                broken=page.evaluate("""() => [...document.querySelectorAll('a[href^="#"]')].map(a=>a.hash.slice(1)).filter(id=>id && !document.getElementById(id))""")
                check(name+' all internal anchors resolve',not broken)
                check(name+' search has an accessible label',page.locator('#skill-search').evaluate('(el)=>el.labels.length>0'))
                check(name+' no template leaks','undefined' not in page.locator('body').inner_text())
                report['cases'].append({'language':lang,'width':width,'errors':errors,'remote_requests':remote,'result':'pass'})
                if width==1440:
                    page.screenshot(path=str(PREVIEWS/f'home-{lang}.png'))
                    page.locator('#demo').screenshot(path=str(PREVIEWS/f'demo-{lang}.png'))
                if width==390:page.screenshot(path=str(PREVIEWS/f'mobile-{lang}.png'))
                context.close()
            context=browser.new_context(viewport={'width':1440,'height':1000},reduced_motion='reduce',accept_downloads=True)
            page=context.new_page();page.set_default_timeout(8000);load(page,f'{url}/{filename}')
            for category,count in [('automation',1),('systems',2),('research',1),('creative',1),('all',5)]:
                page.locator(f'[data-filter="{category}"]').click()
                check(f'{lang} filter {category}',page.locator('#project-grid .project-card:visible').count()==count)
                check(f'{lang} finance remains visible {category}',page.locator('#work-finance').is_visible())
            search=page.locator('#skill-search');search.fill('writing')
            check(lang+' matching search',page.locator('.skill-card:visible').count()==1)
            search.fill('no-results-xyz')
            check(lang+' empty search state',page.locator('.skill-card:visible').count()==0 and page.locator('#skill-empty').is_visible())
            search.fill('')
            check(lang+' restored search',page.locator('.skill-card:visible').count()==5)
            check(lang+' initial demo DRAFT',page.locator('#demo-state').inner_text()=='DRAFT')
            for cost,diff,state in [(True,False,'DRAFT'),(False,True,'DRAFT'),(True,True,'FINAL')]:
                page.locator('#resolve-cost').set_checked(cost)
                page.locator('#resolve-difference').set_checked(diff)
                check(f'{lang} demo {cost}-{diff}',page.locator('#demo-state').inner_text()==state)
            with page.expect_download() as download_info:page.locator('#download-demo').click()
            dl=download_info.value
            payload=json.loads(Path(dl.path()).read_text())
            check(lang+' download clearly synthetic',payload['purpose']=='synthetic-portfolio-demonstration')
            check(lang+' downloaded final state',payload['output']['status']=='FINAL')
            check(lang+' downloaded arithmetic',payload['output']['rows'][3]['profit']==40000)
            page.locator('#reset-demo').click()
            check(lang+' reset returns draft',page.locator('#demo-state').inner_text()=='DRAFT')
            with page.expect_download() as download_info:page.locator('#download-demo').click()
            payload=json.loads(Path(download_info.value.path()).read_text())
            check(lang+' draft export preserves null',payload['output']['rows'][3]['profit'] is None)
            page.locator('[data-filter="creative"]').click()
            page.evaluate("location.hash='work-codes'")
            page.wait_for_function("document.querySelector('#work-codes details').open")
            check(lang+' deep link reveals filtered card',page.locator('#work-codes').is_visible())
            check(lang+' language link preserves section',page.locator('.language').get_attribute('href').endswith('#work-codes'))
            if OFFLINE:
                next_file=page.locator('.language').get_attribute('href')
                load(page,f'{url}/'+next_file)
            else:
                page.locator('.language').click()
            page.wait_for_function("document.querySelector('#work-codes details').open")
            check(lang+(' language-target render preserves open case' if OFFLINE else ' language switch preserves open case'),page.locator('html').get_attribute('lang')==('zh-CN' if lang=='en' else 'en'))
            load(page,f'{url}/{filename}')
            page.keyboard.press('Tab');page.keyboard.press('Enter')
            check(lang+' keyboard skip reaches main',page.evaluate("document.activeElement.id==='main'"))
            page.locator('[data-filter="research"]').click();page.locator('#skill-search').fill('writing')
            page.emulate_media(media='print')
            check(lang+' print restores all project cards',page.locator('.project-card:visible').count()==6)
            check(lang+' print restores all Skills',page.locator('.skill-card:visible').count()==5)
            check(lang+' print hides demo',not page.locator('#demo').is_visible())
            page.screenshot(path=str(PREVIEWS/f'print-style-{lang}.png'))
            context.close()
        for filename in ['index.html','index.en.html']:
            context=browser.new_context(java_script_enabled=False,viewport={'width':390,'height':844})
            page=context.new_page();page.set_default_timeout(8000);load(page,f'{url}/{filename}',javascript=False)
            check(filename+' no-JS fallback content',page.locator('.fallback article').count()==6)
            check(filename+' no-JS not blank',len(page.locator('body').inner_text())>800)
            context.close()
        context=browser.new_context();page=context.new_page()
        load(page,f'{url}/index.html?lang=en')
        check('query language selection',page.locator('html').get_attribute('lang')=='en')
        load(page,f'{url}/index.en.html?lang=invalid')
        check('invalid query falls back to document language',page.locator('html').get_attribute('lang')=='en')
        context.close();browser.close()
    report['result']='pass'
finally:
    server.shutdown();server.server_close()
    (OUT/'browser-results.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(f"PASS: {len(report['cases'])} viewport/language cases; {len(report['checks'])} assertions. Chromium {report['browser']}")
