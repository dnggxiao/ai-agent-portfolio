"""Offline structure and content checks. These do not verify private projects."""
import json
import re
import subprocess
import unittest
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
raw = (ROOT/'docs/content.js').read_text(encoding='utf-8')
DATA = json.loads(raw[raw.index('{'):raw.rindex('}')+1])

class Tags(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.tags=[]; self.feed(text)
    def handle_starttag(self, name, attrs):
        self.tags.append((name, dict(attrs)))

class PortfolioTests(unittest.TestCase):
    def test_unique_project_and_skill_ids(self):
        for key, count in [('projects',6),('skills',5)]:
            self.assertEqual(len(DATA[key]),count)
            self.assertEqual(len({v['id'] for v in DATA[key]}),count)
    def test_language_parity_and_nonempty_fields(self):
        for section in ['projects','skills']:
            for record in DATA[section]:
                self.assertEqual(record['zh'].keys(),record['en'].keys())
                for lang in ['zh','en']:
                    self.assertTrue(all(record[lang].values()))
    def test_finance_coverage(self):
        f=DATA['projects'][0]
        self.assertEqual(f['id'],'finance')
        for word in ['WB','Amazon','Mercado Libre','Walmart']:
            self.assertIn(word,f['en']['summary'])
        self.assertIn('not a precise net-saving claim',f['en']['result'])
    def test_skill_project_references(self):
        projects={v['id'] for v in DATA['projects']}
        for s in DATA['skills']:
            self.assertIn(s['project'],projects)
            for lang in ['zh','en']:self.assertIn('runtime',s[lang])
    def test_case_studies_and_skill_documents(self):
        for lang,suffix in [('zh',''),('en','.en')]:
            readme=(ROOT/f'README{suffix}.md').read_text(encoding='utf-8')
            skilldoc=(ROOT/f'skills/README{suffix}.md').read_text(encoding='utf-8')
            for p in DATA['projects']:
                self.assertIn(p[lang]['name'],readme)
                case=(ROOT/f"case-studies/{p['id']}{suffix}.md").read_text(encoding='utf-8')
                self.assertIn(p[lang]['ownership'],case)
            for s in DATA['skills']:self.assertIn(s[lang]['input'],skilldoc)
    def test_html_local_assets_and_order(self):
        for name in ['index.html','index.en.html']:
            text=(ROOT/'docs'/name).read_text(encoding='utf-8')
            tags=Tags(text).tags
            scripts=[a['src'] for tag,a in tags if tag=='script']
            self.assertEqual(scripts,['content.js','demo.js','app.js'])
            for tag,a in tags:
                asset=a.get('src') if tag=='script' else a.get('href') if tag=='link' else None
                if asset:self.assertTrue((ROOT/'docs'/asset).is_file(),asset)
            self.assertIn('Content-Security-Policy',text)
            self.assertIn('<noscript>',text)
    def test_no_remote_runtime_assets_or_tracking(self):
        for name in ['index.html','index.en.html']:
            for tag,attrs in Tags((ROOT/'docs'/name).read_text(encoding='utf-8')).tags:
                if tag in ['script','img']:
                    self.assertNotRegex(attrs.get('src',''),r'^https?:')
        js=(ROOT/'docs/app.js').read_text(encoding='utf-8')
        self.assertNotIn('fetch(',js)
        self.assertNotIn('localStorage',js)
        self.assertNotIn('XMLHttpRequest',js)
    def test_explicit_demo_scope(self):
        self.assertIn('NOT the private finance engine',(ROOT/'docs/demo.js').read_text())
        self.assertIn('not production verification',(ROOT/'docs/app.js').read_text(encoding='utf-8'))
    def test_generated_documents_are_current(self):
        p=subprocess.run(['python',str(ROOT/'tools/build_docs.py'),'--check'],capture_output=True,text=True)
        self.assertEqual(p.returncode,0,p.stdout+p.stderr)
    def test_javascript_syntax(self):
        for file in (ROOT/'docs').glob('*.js'):
            p=subprocess.run(['node','--check',str(file)],capture_output=True,text=True)
            self.assertEqual(p.returncode,0,p.stderr)

if __name__=='__main__':unittest.main()
