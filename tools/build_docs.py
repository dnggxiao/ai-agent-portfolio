"""Build public Markdown and no-script HTML from the bilingual content source.
Run with --check in CI to detect stale generated documents. No third-party packages.
"""
from __future__ import annotations
import argparse
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = (ROOT / 'docs/content.js').read_text(encoding='utf-8')
DATA = json.loads(TEXT[TEXT.index('{'):TEXT.rindex('}') + 1])
REPO = DATA['profile']['repository']
LABELS = {
    'zh': ['业务问题', '实现方式', '关键取舍', '我的贡献', '结果与口径'],
    'en': ['Problem', 'Implementation', 'Engineering decision', 'My contribution', 'Outcome & scope'],
}
SKILL_LABELS = {
    'zh': ['运行条件', '输入', '执行流程', '输出', '可靠性与边界', '展示与验证'],
    'en': ['Runtime', 'Inputs', 'Execution', 'Outputs', 'Reliability boundary', 'Demonstration'],
}

def outputs() -> dict[str, str]:
    result = {}
    for lang in ('zh', 'en'):
        en = lang == 'en'
        tr = lambda zh, eng: eng if en else zh
        suffix = '.en' if en else ''
        rootname = f'README{suffix}.md'
        title = tr('业务自动化与工作流系统', 'Business Automation & Workflow Systems')
        intro = tr('围绕财务、电商运营与企业内部工具，我把数据、业务规则和重复操作整理成可执行、可核查的工作流。工具用于加速实现，业务标准决定交付。', 'I turn data, business rules and repetitive operations into practical workflows for finance, e-commerce and internal tools. Development tools accelerate implementation; business requirements define what ships.')
        nav = '[中文](README.md) · [English](README.en.md)'
        nav += f" · [{tr('Skill 介绍','Skill library')}](skills/README{suffix}.md) · [{tr('证据与口径','Evidence & scope')}](EVIDENCE.md)"
        lines = [f'# dnggxiao · {title}', '', f'> **{tr('把复杂业务，做成可靠系统。','Complex operations. Reliable systems.')}**', '', nav, '', intro, '',
            f"**{tr('求职方向','Role interests')}:** {tr('业务自动化 · AI 应用开发 · 企业内部工具','Business automation · Applied AI · Internal tools')}", '',
            f"## {tr('先看核心案例','Start with the flagship case')}", '',
            f"### {DATA['projects'][0][lang]['name']}", '',
            '**WB / Wildberries · Amazon · Mercado Libre · Walmart**', '',
            DATA['projects'][0][lang]['summary'], '',
            '```text',
            tr('平台原始文件 + 统一人工补充 / 调整','Platform source files + shared manual inputs / adjustments'),
            '                         |',
            tr('                 映射 - 核算 - 对账','                Map - Calculate - Reconcile'),
            '                         |',
            tr('                    标准财务报表','                Standard financial report'), '```', '',
            f"**{tr('我负责','My ownership')}:** {DATA['projects'][0][lang]['ownership']}", '',
            f"**{tr('结果口径','Outcome scope')}:** {DATA['projects'][0][lang]['result']}", '',
            f"[{tr('阅读完整案例','Read the full case')}](case-studies/finance{suffix}.md)", '',
            f"## {tr('其他精选作品','Other selected work')}", '']
        for p in DATA['projects'][1:]:
            v = p[lang]
            lines += [f"### {p['number']}. {v['name']}", '', f"**{v['status']} · {v['role']}**", '', v['summary'], '',
                f"**{tr('关键取舍','Engineering decision')}:** {v['decision']}", '',
                f"[{tr('案例与个人贡献','Case and personal contribution')}](case-studies/{p['id']}{suffix}.md)", '']
        lines += [f"## {tr('五项可复用 Skills','Five reusable Skills')}", '',
            tr('| Skill | 用途 | 公开范围 |','| Skill | Purpose | Availability |'), '| --- | --- | --- |']
        for s in DATA['skills']:
            v = s[lang]
            lines.append(f"| {v['name']} | {v['subtitle']} | {v['access']} |")
        lines += ['', f"[{tr('查看每项的运行条件、输入输出和边界','Read runtime requirements, inputs, outputs and boundaries')}](skills/README{suffix}.md)", '',
            f"## {tr('工作方式与技术实践','Approach and project-used tools')}", '',
            tr('梳理业务 → 定义输入输出 → 实现与校验 → 交付与迭代。Codex 辅助实现，我负责规则、异常判断和验收。', 'Understand the work → define the input/output contract → implement and validate → deliver and iterate. Codex assists implementation; I own rules, exception decisions and acceptance.'), '',
            '**Python · openpyxl · Django · SQLite · Node.js · Playwright · Chrome CDP · Git / GitHub · PyInstaller**', '',
            tr('STM32、ESP32 和 PWM 体现课程与学术项目中的基础实践，不作为高级嵌入式资历。', 'STM32, ESP32 and PWM reflect coursework and academic project foundations, not advanced embedded credentials.'), '',
            f"## {tr('独立技术支持经历','Independent technical support')}", '',
            tr('协助个人完成 Google 账号的正常注册、基础安全和恢复信息设置，提供日常使用指导；协助跨境业务用户配置专用商用网络节点和排查连接环境问题。属于独立技术协助，不代表 Google 官方授权或认证。', 'Assist individuals with normal Google account registration, basic security and recovery setup, and day-to-day use. Support dedicated commercial network-node configuration and connection troubleshooting for cross-border business users. Independent assistance; no official Google authorization or certification is implied.'), '',
            f"## {tr('查看与运行','View and run')}", '',
            tr('网站源码在 `docs/`；中文入口 `index.html`，英文入口 `index.en.html`。独立演示全部使用合成数据，不是生产系统验证。', 'Website source is in `docs/`, with `index.html` in Chinese and `index.en.html` in English. The standalone demonstration uses synthetic data and is not production-system verification.'), '',
            '```bash', 'python -m http.server 8000 --directory docs', '```', '',
            tr('打开 `http://localhost:8000`。发布与更新步骤见 [DEPLOYMENT.md](DEPLOYMENT.md)。文件准备完毕不等于 Pages 已启用。', 'Open `http://localhost:8000`. See [DEPLOYMENT.md](DEPLOYMENT.md) for publishing. Prepared source files do not mean Pages hosting is enabled.'), '',
            f"[{tr('面试讲解提纲','Interview walkthrough')}](INTERVIEW_GUIDE.md) · [{tr('验收记录','Verification record')}](verification/REPORT.md) · [GitHub](https://github.com/dnggxiao)", '',
            tr('公开内容不包含客户名单、真实结算、成本数据、凭据或企业专有规则。项目状态和效益以项目说明为依据，不把自述当作独立审计。', 'Public material excludes customer lists, real settlements, cost data, credentials and proprietary business rules. Project status and outcomes are project-reported, not independently audited.'), '']
        result[rootname] = '\n'.join(lines)
        skill_lines = ['# ' + tr('Skill 能力库','Skill Library'), '', '[中文](README.md) · [English](README.en.md)', '',
            tr('五项具体任务工作流。企业实现保持私有，写作工作流提供公开源码；这不是企业安装包，也不是第三方工具原创声明。', 'Five task-specific workflows. Enterprise implementations remain private; the writing workflow has public source. This is not a production installation package or an authorship claim over third-party tools.'), '']
        for s in DATA['skills']:
            v=s[lang]
            skill_lines += [f"## {s['code']} — {v['name']}", '', '> ' + v['subtitle'], '', '**' + v['access'] + '**', '']
            for key,label in zip(['runtime','input','process','output','guard','example'], SKILL_LABELS[lang]):
                skill_lines += ['### ' + label, '', v[key], '']
            if s['id'] == 'writing':
                skill_lines += ['```text', '$writing-serial-fiction mode=chapter-planning', '$writing-serial-fiction mode=prose-writing', '$writing-serial-fiction mode=readonly-diagnosis', '```', '']
            skill_lines += [f"[{tr('对应案例','Related case')}](../case-studies/{s['project']}{suffix}.md)", '']
        skill_lines += [tr('私有流程需要满足本地依赖、授权会话和输入标准，不保证在不同环境中原样运行。四级包装码应用和机器人不额外计作 Skill。', 'Private workflows require their local dependencies, authorized sessions and input contracts; they are not guaranteed to run unchanged everywhere. The packaging application and robot are not additional Skills.'), '', f'[{tr("返回作品集","Back to portfolio")}](../{rootname})', '']
        result[f'skills/README{suffix}.md'] = '\n'.join(skill_lines)
        for p in DATA['projects']:
            v=p[lang]
            content=[f"# {v['name']}", '', f"[中文]({p['id']}.md) · [English]({p['id']}.en.md)", '', f"**{v['status']} · {v['role']}**", '', v['summary'], '',
                '```text', ' -> '.join(v['flow']), '```', '']
            for key,label in zip(['problem','solution','decision','ownership','result'], LABELS[lang]):
                content += ['## ' + label, '', v[key], '']
            content += ['## ' + tr('公开证据与边界','Public evidence and scope'), '', v['evidence'], '',
                tr('以上项目事实来自作者提供的项目记录。没有在这次作品集改版中运行私有生产系统；浏览器演示不能作为企业实测证明。', 'Facts above follow the author’s project records. The private production system was not run during this portfolio update; the browser demonstration is not enterprise validation.'), '',
                f"[{tr('原项目记录 / 源仓库','Original project record / source repository')}]({p['url']})", '',
                f"[{tr('返回作品集','Back to portfolio')}](../{rootname}) · [{tr('口径说明','Evidence and scope')}](../EVIDENCE.md)", '']
            result[f"case-studies/{p['id']}{suffix}.md"]='\n'.join(content)
        ht = html.escape
        fallback = ''.join(f"<article><h2>{ht(p[lang]['name'])}</h2><p>{ht(p[lang]['status'])} · {ht(p[lang]['role'])}</p><p>{ht(p[lang]['summary'])}</p><p><a href=\"{REPO}/blob/main/case-studies/{p['id']}{suffix}.md\">{tr('完整案例','Full case study')}</a></p></article>" for p in DATA['projects'])
        fallback += '<h2>Skills</h2><ul>'+''.join('<li>'+ht(s[lang]['name'])+' — '+ht(s[lang]['subtitle'])+'</li>' for s in DATA['skills'])+'</ul>'
        ogtitle = f'dnggxiao · {title}'
        description = tr('业务自动化求职作品集：四平台统一财务报表、电商运营、企业工具与五项可复用 Skill。', 'Business automation portfolio: four-marketplace financial reporting, operations workflows, internal tools and five reusable Skills.')
        result[f'docs/index{suffix}.html']=f'''<!doctype html>
<html lang="{'en' if en else 'zh-CN'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="{ht(description)}">
<meta property="og:title" content="{ht(ogtitle)}">
<meta property="og:description" content="{ht(description)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#111816">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="color-scheme" content="dark light">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; base-uri 'none'; form-action 'none'; object-src 'none'">
<title>{ht(ogtitle)}</title>
<link rel="alternate" hreflang="zh-CN" href="index.html">
<link rel="alternate" hreflang="en" href="index.en.html">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="stylesheet" href="styles.css">
<script defer src="content.js"></script>
<script defer src="demo.js"></script>
<script defer src="app.js"></script>
</head>
<body><div id="app"><main class="shell fallback"><p><a href="{'index.html' if en else 'index.en.html'}">{'中文' if en else 'English'}</a></p><h1>{ht(ogtitle)}</h1><p>{ht(intro)}</p>{fallback}<p><a href="{REPO}/blob/main/{rootname}">{tr('完整作品集','Full portfolio')}</a> · <a href="{REPO}/blob/main/EVIDENCE.md">{tr('证据与口径','Evidence & scope')}</a></p><noscript><p>{tr('当前为无脚本阅读版。交互演示需要 JavaScript，以上项目介绍仍可阅读。','This is the no-script reading view. Interactive demonstrations need JavaScript; the project summaries above remain available.')}</p></noscript></main></div></body>
</html>
'''
    result['docs/favicon.svg'] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#ceeaa9"/><text x="12" y="48" font-family="sans-serif" font-size="48" font-weight="700" fill="#111816">d.</text></svg>\n'
    return result

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    stale=[]
    for name, content in outputs().items():
        path=ROOT/name
        if args.check:
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                stale.append(name)
        else:
            path.parent.mkdir(parents=True,exist_ok=True)
            path.write_text(content,encoding='utf-8')
    if stale:
        print('Stale generated files: ' + ', '.join(stale))
        return 1
    print(('Checked' if args.check else 'Generated') + f' {len(outputs())} synchronized documents')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
