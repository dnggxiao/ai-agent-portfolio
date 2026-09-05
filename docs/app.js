/* Progressive enhancement: the HTML fallback remains useful when scripts fail. */
(() => {
  'use strict';
  const data = window.PORTFOLIO, demo = window.FinanceDemo, mount = document.getElementById('app');
  if (!data || !demo || !mount) return;
  const qlang = new URLSearchParams(location.search).get('lang');
  const lang = ['en','zh'].includes(qlang) ? qlang : (document.documentElement.lang === 'en' ? 'en' : 'zh');
  const en = lang === 'en', other = en ? 'index.html' : 'index.en.html';
  const t = (zh, english) => en ? english : zh;
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const repo = data.profile.repository;
  const external = (url, label, cls='text-link') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const head = (num, label, title, desc='') => `<div class="section-head"><div><p class="eyebrow">${num} / ${esc(label)}</p><h2>${title}</h2></div>${desc ? `<p class="section-desc">${esc(desc)}</p>` : ''}</div>`;
  const chips = values => `<div class="chips">${values.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
  const flow = values => `<ol class="mini-flow" aria-label="${t('流程概览','Workflow overview')}">${values.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
  const finance = data.projects[0], f = finance[lang];
  const labels = t(['业务问题','实现方式','关键取舍','我的贡献','结果与口径'],['Problem','Implementation','Engineering decision','My contribution','Outcome & scope']);
  function caseDetails(p) {
    const v=p[lang];
    return `<details><summary>${t('展开实现与验收细节','Implementation & acceptance details')}</summary><div class="detail">
      ${['problem','solution','decision','ownership','result'].map((k,i)=>`<h4>${labels[i]}</h4><p>${esc(v[k])}</p>`).join('')}
      ${external(p.url,t('项目记录','Project record'))}</div></details>`;
  }
  const cards = data.projects.slice(1).map(p => {
    const v=p[lang];
    return `<article class="project-card" id="work-${p.id}" data-category="${p.category}" aria-labelledby="title-${p.id}">
      <div class="card-top"><span class="mono">PROJECT ${p.number}</span><span class="status">${esc(v.status)}</span></div>
      <p class="type">${esc(v.type)} · ${esc(v.role)}</p><h3 id="title-${p.id}">${esc(v.title)}</h3>
      <p class="project-name">${esc(v.name)}</p><p class="summary">${esc(v.summary)}</p>
      ${flow(v.flow)}${chips(p.tags)}<p class="evidence-label">${esc(v.evidence)}</p>${caseDetails(p)}
    </article>`;
  }).join('');
  const slabels=t(['运行条件','输入','执行流程','输出','可靠性与边界','展示与验证'],['Runtime','Inputs','Execution','Outputs','Reliability boundary','Demonstration']);
  const skills = data.skills.map(s=>{
    const v=s[lang];
    return `<article class="skill-card" id="skill-${s.id}" aria-labelledby="skill-title-${s.id}">
      <p class="mono">${esc(s.code)}</p><h3 id="skill-title-${s.id}">${esc(v.name)}</h3><p class="summary">${esc(v.subtitle)}</p>
      <p class="evidence-label">${esc(v.access)}</p><details><summary>${t('查看输入、输出与使用边界','Inputs, outputs & operating boundaries')}</summary>
      <div class="detail">${['runtime','input','process','output','guard','example'].map((k,i)=>`<h4>${slabels[i]}</h4><p>${esc(v[k])}</p>`).join('')}
      ${s.id==='writing'?'<p><code>$writing-serial-fiction</code></p>':''}
      <a class="text-link" data-project-link="${s.project}" href="#work-${s.project}">${t('关联项目','Related project')} ↗</a>
      ${s.id==='finance'?`<a class="text-link" href="#demo">${t('打开合成演示','Try the synthetic example')} ↗</a>`:''}
      </div></details></article>`;
  }).join('');
  const methods=t(
    [['梳理业务','了解人工怎样完成工作，区分固定规则、必要判断与重复操作。'],['定义标准','明确来源文件、人工输入、输出结构和验收条件。'],['实现与校验','用开发工具落实规则，对照人工结果，检查差异和异常。'],['交付与迭代','按实际场景考虑复核、恢复、维护和使用反馈。']],
    [['Understand the work','Separate repeatable operations from rules and decisions that genuinely need a person.'],['Define the contract','Specify source files, manual inputs, output structure and acceptance criteria.'],['Build and validate','Implement the rules, compare with manual results and investigate exceptions.'],['Deliver and iterate','Consider review, recovery, maintenance and feedback in the actual setting.']]
  );
  document.documentElement.lang=en?'en':'zh-CN';
  document.title=t('dnggxiao · 业务自动化与工作流系统','dnggxiao · Business Automation & Workflow Systems');
  const description=t('业务自动化求职作品集：四平台统一财务报表、电商运营、企业工具与五项可复用 Skill。','Business automation portfolio: four-marketplace financial reporting, operations workflows, internal tools and five reusable Skills.');
  document.querySelector('meta[name="description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);
  mount.innerHTML=`
  <a class="skip" href="#main">${t('跳到主要内容','Skip to main content')}</a>
  <header class="site-header"><div class="shell nav">
    <a class="brand" href="#main" aria-label="dnggxiao"><b aria-hidden="true">d.</b><span>DNGGXIAO<small>${t('业务自动化 / 工作流系统','BUSINESS AUTOMATION')}</small></span></a>
    <nav aria-label="${t('主导航','Main navigation')}">${[['work',t('作品','Work')],['demo',t('演示','Demo')],['skills','Skills'],['about',t('关于','About')]].map(([id,v])=>`<a href="#${id}">${v}</a>`).join('')}</nav>
    <a class="language" href="${other}" lang="${en?'zh-CN':'en'}" aria-label="${t('Switch to English','切换至中文')}">${en?'中文':'EN'} <span aria-hidden="true">↗</span></a>
  </div></header>
  <main id="main" class="shell" tabindex="-1">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow">${t('业务理解 × 软件交付','BUSINESS UNDERSTANDING × SOFTWARE DELIVERY')}</p>
        <h1 id="hero-title">${t('把复杂业务，<br>做成<em>可靠系统。</em>','Complex operations.<br><em>Reliable systems.</em>')}</h1>
        <p class="lead">${t('围绕财务、电商运营与企业内部工具，我把数据、规则和重复操作整理成可执行、可核查的工作流。工具用于加速实现，业务标准决定交付。','I turn data, business rules and repetitive operations into practical workflows for finance, e-commerce and internal tools. Development tools accelerate implementation; business requirements define what ships.')}</p>
        <div class="actions"><a class="button primary" href="#work-finance">${t('查看核心案例','Explore the flagship case')} <span aria-hidden="true">↘</span></a><a class="button" href="#demo">${t('试用报表演示','Try the reporting demo')}</a></div>
        <p class="role-line">${t('求职方向：业务自动化 · AI 应用开发 · 企业内部工具','Role interests: Business automation · Applied AI · Internal tools')}</p>
      </div>
      <aside class="report-map" aria-label="${t('四平台财务系统架构概览','Financial reporting architecture overview')}">
        <div class="map-top"><span class="mono">REPORTING / 01</span><span>${t('本地工作流','LOCAL WORKFLOW')}</span></div>
        <div class="map-body"><p class="map-caption">${t('保留平台差异，统一交付接口。','Different sources. A shared delivery contract.')}</p>
          <div class="markets"><span><b>WB</b>Wildberries</span><span><b>AMZ</b>Amazon</span><span><b>ML</b>Mercado Libre</span><span><b>WM</b>Walmart</span></div>
          <div class="input-pair"><div><small>INPUT A</small><strong>${t('平台原始文件','Platform source files')}</strong></div><span aria-hidden="true">+</span><div><small>INPUT B</small><strong>${t('统一人工补充','Shared manual inputs')}</strong></div></div>
          <div class="connector" aria-hidden="true">↓</div><div class="engine"><span class="mono">${t('规则处理','RULE-BASED PROCESSING')}</span><strong>${t('映射 · 核算 · 对账','Map · Calculate · Reconcile')}</strong></div>
          <div class="connector" aria-hidden="true">↓</div><div class="report-output"><div><small>STANDARD OUTPUT</small><strong>${t('统一财务报表','Consistent financial reports')}</strong></div><span aria-hidden="true">↗</span></div>
          <p class="caption">${t('架构概览，不是生产系统运行截图。','Architecture overview, not a production screenshot.')}</p>
        </div>
      </aside>
    </section>
    <div class="proof-strip" aria-label="${t('项目概览','Project overview')}">
      <div><strong>4</strong><span>${t('覆盖的电商平台','Marketplaces covered')}</span></div>
      <div><strong>1 + 1</strong><span>${t('统一人工输入与输出标准','Shared input & output standards')}</span></div>
      <div><strong>~15 <small>${t('工作日','workdays')}</small></strong><span>${t('原月度财务工作量 · 项目估计','Former monthly finance workload · estimate')}</span></div>
      <div><strong>5</strong><span>${t('具备明确边界的可复用 Skills','Documented reusable Skills')}</span></div>
    </div>
    <section class="section" id="work">
      ${head('01',t('精选作品','SELECTED WORK'),t('从实际问题，<br>到可交付的系统。','From operational problems<br>to working systems.'),t('实际使用、已交付与进行中的项目分别标注。点击案例，可查看业务规则、个人贡献与验收思路。','Active use, delivery and work in progress are distinct states. Open each case for business rules, personal contribution and acceptance decisions.'))}
      <article class="featured project-card" id="work-finance" aria-labelledby="title-finance">
        <div class="featured-top"><div><p class="eyebrow">FEATURED / 01</p><h3 id="title-finance">${esc(f.name)}</h3><p class="summary">${esc(f.summary)}</p></div><span class="status">${esc(f.status)}</span></div>
        ${flow(f.flow)}
        <div class="feature-columns"><div><h4>${t('标准化的关键','The standardization decision')}</h4><p>${t('不同来源可以保留不同处理方式；人工补充遵循共同格式，最终输出遵循共同口径。自动化建立在这些约定之上。','Different sources may keep different processing paths. Human adjustments follow a shared format, and reports follow a shared output contract. Automation is built on those agreements.')}</p></div>
        <div><h4>${t('我的职责','My ownership')}</h4><p>${esc(f.ownership)}</p></div></div>
        <p class="evidence-label">${esc(f.evidence)} · ${t('约 15 工作日为原工作量估计，不是实测净节省','~15 workdays describes former workload, not measured net savings')}</p>
        ${caseDetails(finance)}
      </article>
      <div class="filter-row"><div class="filters" aria-label="${t('筛选其他项目','Filter other projects')}">
        ${Object.entries(t({all:'其他全部',automation:'业务自动化',systems:'软件与硬件',research:'研究',creative:'开源工作流'},{all:'Other work',automation:'Automation',systems:'Software & hardware',research:'Research',creative:'Open workflow'})).map(([k,v])=>`<button type="button" data-filter="${k}" aria-pressed="${k==='all'}">${v}</button>`).join('')}
        </div><span class="count" id="project-count" aria-live="polite"></span></div>
      <div class="project-grid" id="project-grid">${cards}</div>
    </section>
    <section class="section" id="demo">
      ${head('02',t('可操作的设计示例','INTERACTIVE DESIGN EXAMPLE'),t('异常没解决，<br>就不应该是 FINAL。','Unresolved exceptions?<br>Then it is not FINAL.'),t('切换两个检查项，观察报表、利润和发布状态如何变化。演示在浏览器本地运行，不接收或上传财务文件。','Toggle two checks and observe the report, profit and release state. The example runs locally in your browser and does not accept or upload finance files.'))}
      <div class="demo-notice"><b>${t('合成数据 · 概念演示','SYNTHETIC DATA · CONCEPT DEMO')}</b><p>${t('所有金额、SKU、字段和规则都为这段演示专门构造；不是真实账本、私有系统源码或生产模板，也不证明生产系统已经通过测试。所有金额采用同一种虚构记账单位。','Amounts, SKUs, fields and rules are constructed for this example. They are not real ledgers, private source code or production templates, and do not verify the production system. All amounts use a single fictional accounting unit.')}</p></div>
      <div class="demo-panel">
        <div class="demo-controls"><fieldset><legend>${t('处理模拟异常','Resolve synthetic exceptions')}</legend><label><input id="resolve-cost" type="checkbox">${t('补齐 Walmart 的模拟成本','Supply the missing Walmart cost')}</label><label><input id="resolve-difference" type="checkbox">${t('修正 Walmart 的模拟对账差异','Resolve the Walmart settlement difference')}</label></fieldset>
          <div class="demo-state" role="status" aria-live="polite"><strong id="demo-state">DRAFT</strong><span id="demo-message"></span></div></div>
        <div class="table-scroll" tabindex="0" role="region" aria-label="${t('合成报表示例，可横向滚动','Synthetic report, horizontally scrollable')}"><table>
          <caption>${t('统一输出示例 · 金额仅为虚构记账单位','Consistent output example · fictional accounting units only')}</caption>
          <thead><tr>${t(['平台','结算净额','产品成本','人工调整','利润示意','对账差异'],['Platform','Net settlement','Product cost','Adjustment','Illustrative profit','Settlement delta']).map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody id="demo-rows"></tbody>
        </table></div>
        <div class="demo-footer"><p>${t('示例公式：结算净额 = 销售 − 退款 − 平台费用；利润 = 净额 − 产品成本 + 人工调整。未提供成本时保留空值，不填 0。','Illustrative rules: net settlement = sales − refunds − fees; profit = net − product cost + adjustment. Missing cost stays null, never zero.')}</p>
          <div class="actions"><button class="button" id="download-demo" type="button">${t('导出演示 JSON','Export demo JSON')}</button><button class="text-button" id="reset-demo" type="button">${t('重置','Reset')}</button></div></div>
        <details class="sample-details"><summary>${t('查看演示输入数据','Inspect synthetic input data')}</summary><pre id="demo-input" tabindex="0"></pre></details>
      </div>
      <p class="caption">${external(repo+'/blob/main/docs/demo.js',t('查看这个独立演示的源码','Inspect this standalone demonstration'))}</p>
    </section>
    <section class="section" id="skills">
      ${head('03','SKILL LIBRARY',t('把经验，做成可复用流程。','Experience, made repeatable.'),t('五项具体任务能力，每项都有运行条件、输入输出和异常边界。企业实现保持私有；创作工作流可查看公开源码。','Five task-specific workflows with runtime requirements, inputs, outputs and boundaries. Enterprise implementations stay private; the writing workflow has public source.'))}
      <div class="skill-toolbar"><label class="search-box">${t('搜索','Search')}<input type="search" id="skill-search" placeholder="${t('如：财务、询盘、writing','e.g. finance, inquiry, writing')}" autocomplete="off"></label><span class="count" id="skill-count" aria-live="polite"></span></div>
      <p id="skill-empty" class="empty" hidden>${t('没有匹配的 Skill，请清空搜索或更换关键词。','No matching Skills. Clear the search or try another keyword.')}</p><div class="skill-grid">${skills}</div>
      <p class="caption">${t('这里的 Skill 是任务工作流，不是技能熟练度评分，也不是对第三方工具的原创声明。','Skills here are task workflows, not proficiency ratings or claims of authorship over third-party tools.')}</p>
    </section>
    <section class="section" id="approach">
      ${head('04',t('交付方法','DELIVERY APPROACH'),t('先定义什么是对的，<br>再让它重复发生。','Define a correct result.<br>Then make it repeatable.'))}
      <div class="method-grid">${methods.map(([title,desc],i)=>`<article><span class="mono">0${i+1}</span><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>
    </section>
    <section class="section about" id="about">
      <div><p class="eyebrow">05 / ${t('关于我','ABOUT')}</p><h2>${t('理解业务，<br>也关心最后一公里。','Understand the business.<br>Own the last mile.')}</h2><p class="lead">${t('我擅长把散落在 Excel、网页操作和人工经验里的工作梳理清楚，再利用开发工具做成能被实际使用的流程。','I connect the operational detail in spreadsheets, browser work and manual know-how with practical software delivery.')}</p><p>${t('Codex 是我的辅助开发工具。需求拆解、业务规则、异常处理与验收标准由我负责，结果需要回到真实业务中检查。','Codex is an assisted-development tool in my workflow. I own requirements, business rules, exception decisions and acceptance; results are checked against the actual work.')}</p>
        ${external(data.profile.github,t('GitHub 主页','GitHub profile'),'button')}</div>
      <div class="technical"><h3>${t('项目中实际使用','Used in projects')}</h3>
        <dl><dt>${t('数据与应用','Data & applications')}</dt><dd>Python · openpyxl · Django · SQLite</dd><dt>${t('浏览器自动化','Browser automation')}</dt><dd>Node.js · Playwright · Chrome CDP</dd><dt>${t('开发与交付','Development & delivery')}</dt><dd>Git / GitHub · Codex · PyInstaller</dd><dt>${t('嵌入式基础','Embedded foundations')}</dt><dd>STM32 · ESP32 · PWM<br><small>${t('课程与学术项目范围','Coursework and academic project scope')}</small></dd></dl>
      </div>
    </section>
    <section class="section services" id="services">
      ${head('06',t('补充经历','ADDITIONAL EXPERIENCE'),t('面向实际用户的技术支持。','Technical support for real users.'))}
      <div class="service-grid"><article><h3>${t('Google 账号配置与使用协助','Google account setup assistance')}</h3><p>${t('协助个人完成正常注册流程、基础安全与恢复信息设置，提供日常使用和维护指导。账号由用户本人持有并完成必要验证。','Assist individuals through normal registration, basic security and recovery setup, and everyday maintenance. Users retain account ownership and complete required verification themselves.')}</p></article>
      <article><h3>${t('商用网络环境支持','Business network environment support')}</h3><p>${t('协助跨境业务用户配置专用商用网络节点与连接环境，处理连接故障和日常使用问题。侧重需求沟通、配置交付和故障排查。','Assist cross-border business users with dedicated commercial network nodes, connection configuration and everyday troubleshooting, with a focus on requirements, setup and practical support.')}</p></article></div>
      <p class="caption">${t('独立技术协助，不代表 Google 官方授权、认证或背书；不承诺绕过验证或规避平台规则。','Independent assistance, with no Google authorization, certification or endorsement implied. No promises to bypass verification or platform rules.')}</p>
    </section>
    <section class="contact"><div><p class="eyebrow">${t('下一步，谈一个真实问题。','LET’S TALK ABOUT A REAL WORKFLOW.')}</p><h2>${t('业务自动化 · AI 应用 · 内部工具','Business automation · Applied AI · Internal tools')}</h2><p>${t('项目说明、开源工作流和实现边界，都在这里。','Project accounts, an open workflow and clear implementation boundaries.')}</p></div>
      <div class="contact-actions">${external(data.profile.github,t('前往 GitHub','View GitHub'),'button primary')}<button type="button" class="text-button" id="print-brief">${t('打印作品摘要','Print portfolio summary')}</button></div></section>
  </main>
  <footer class="shell footer"><span>© 2026 dnggxiao</span><p>${t('只展示公开材料与脱敏方法；不发布企业数据、凭据或私有生产规则。','Public material and sanitized methodology only; no enterprise data, credentials or private production rules.')}</p>
    ${external(repo+'/blob/main/EVIDENCE.md',t('证据与口径','Evidence & scope'))}</footer>`;

  function filterProjects(category) {
    let count=0;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
    document.querySelectorAll('#project-grid .project-card').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)count++;});
    document.getElementById('project-count').textContent=`${count} / ${data.projects.length-1}`;
  }
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterProjects(b.dataset.filter)));
  filterProjects('all');
  const search=document.getElementById('skill-search');
  function filterSkills() {
    const query=search.value.trim().toLocaleLowerCase();let count=0;
    data.skills.forEach(s=>{const show=JSON.stringify(s).toLocaleLowerCase().includes(query);document.getElementById('skill-'+s.id).hidden=!show;if(show)count++;});
    document.getElementById('skill-count').textContent=`${count} / ${data.skills.length} Skills`;
    document.getElementById('skill-empty').hidden=count!==0;
  }
  search.addEventListener('input',filterSkills);filterSkills();
  let latest, inputs;
  const format=v=>v===null?t('缺失','Missing'):(v/100).toLocaleString(en?'en-US':'zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});
  function renderDemo() {
    inputs=demo.sample({costResolved:document.getElementById('resolve-cost').checked,differenceResolved:document.getElementById('resolve-difference').checked});
    latest=demo.run(inputs);
    const state=document.getElementById('demo-state');state.textContent=latest.status;state.classList.toggle('good',latest.status==='FINAL');
    document.getElementById('demo-message').textContent=latest.issueCount?t(`${latest.issueCount} 项模拟异常待解决`,`${latest.issueCount} synthetic checks unresolved`):t('演示检查通过；不代表生产系统验证','Demo checks pass; not production verification');
    document.getElementById('demo-rows').innerHTML=latest.rows.map(r=>`<tr><th scope="row">${esc(r.platform)}</th>${['net','cost','adjustment','profit','difference'].map(k=>`<td${r[k]===null?' class="missing"':''}>${esc(format(r[k]))}</td>`).join('')}</tr>`).join('');
    document.getElementById('demo-input').textContent=JSON.stringify(inputs,null,2);
  }
  ['resolve-cost','resolve-difference'].forEach(id=>document.getElementById(id).addEventListener('change',renderDemo));
  document.getElementById('reset-demo').addEventListener('click',()=>{document.getElementById('resolve-cost').checked=false;document.getElementById('resolve-difference').checked=false;renderDemo();});
  document.getElementById('download-demo').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({purpose:'synthetic-portfolio-demonstration',input:inputs,output:latest},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob), a=document.createElement('a');a.href=url;a.download=`synthetic-report-${latest.status.toLowerCase()}.json`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  renderDemo();
  function revealHash() {
    let id;
    try { id=decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target=document.getElementById(id);
    if(target?.classList.contains('project-card')) {filterProjects('all');target.querySelector('details').open=true;}
    if(target?.classList.contains('skill-card')) {search.value='';filterSkills();target.querySelector('details').open=true;}
    document.querySelector('.language').href=other+location.hash;
    if(target) requestAnimationFrame(()=>target.scrollIntoView());
  }
  document.querySelectorAll('[data-project-link]').forEach(a=>a.addEventListener('click',()=>{
    filterProjects('all');
    document.getElementById('work-'+a.dataset.projectLink)?.querySelector('details')?.setAttribute('open','');
  }));
  window.addEventListener('hashchange',revealHash);
  if(location.hash) {try{revealHash();}catch(e){console.warn('Ignored invalid fragment');}}
  document.getElementById('print-brief').addEventListener('click',()=>window.print());
})();
