/* Recruiting-first bilingual portfolio. Dependency-free and privacy-safe. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const mount = document.getElementById('app');
  if (!data || !mount) return;

  const en = document.documentElement.lang === 'en';
  const lang = en ? 'en' : 'zh';
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const gh = 'https://github.com/dnggxiao';
  const repo = 'https://github.com/dnggxiao/ai-agent-portfolio';

  const C = en ? {
    title:'dnggxiao · Business Automation & Workflow Systems',
    desc:'Recruiting portfolio focused on business automation, workflow systems, finance operations and AI-assisted development.',
    nav:['Work','Skills','Approach','Services','About'],
    eyebrow:'BUSINESS AUTOMATION · WORKFLOW SYSTEMS',
    hero:'I turn repetitive business operations into <em>reliable systems.</em>',
    intro:'I work from real operational problems: clarify the rules, standardize inputs and outputs, surface exceptions, then use modern development tools to make the process repeatable and checkable.',
    target:'Open to roles in Business Automation · AI Application Engineering · Workflow / Agent Systems · Internal Tools',
    primary:'View flagship case', secondary:'GitHub profile',
    proof:['4 marketplaces','~15 workdays','Standardized I/O','Human-reviewed'],
    proofSub:['WB · Amazon · Mercado Libre · Walmart','former monthly finance workload','shared input → consistent report','exceptions stay visible'],
    featured:'FEATURED CASE STUDY', featuredTitle:'Four-Platform Financial Reporting System',
    featuredLead:'Four marketplaces. Different source data. One controlled reporting workflow.',
    featuredText:'The system standardizes platform exports, one shared manual-adjustment input, deterministic finance rules, reconciliation and a consistent final report. The goal is not to remove financial judgment—it is to remove repetitive financial operations.',
    flow:['Platform source files','Shared manual input','Validation & mapping','Financial calculation','Reconciliation','Standard report'],
    myRole:'My role', myRoleText:'I own requirements, finance-rule translation, input/output contracts, exception behavior, acceptance criteria, workbook validation and iteration. Codex assists implementation, refactoring and debugging.',
    result:'Scope & outcome', resultText:'The former end-to-end workflow involved roughly 15 finance workdays per month. This is the original workload, not an independently audited net time-saving claim.',
    caseLink:'Read detailed case study',
    workEyebrow:'SELECTED WORK', workTitle:'Evidence of how I solve problems.', workDesc:'Projects are ordered by hiring relevance rather than by technology. Private business implementations are described without exposing production data.',
    filters:{all:'All',automation:'Automation',research:'Research',systems:'Systems',creative:'Creative'},
    details:'Open case study', labels:['Problem','Implementation','Engineering decision','My contribution','Outcome & scope'], original:'Project record',
    skillsEyebrow:'REUSABLE WORKFLOWS', skillsTitle:'Skills with inputs, rules and deliverables.', skillsDesc:'Not a tool-name list. Each Skill represents a repeatable task workflow with explicit boundaries.',
    skillDetails:'Inputs, outputs & boundaries', skillLabels:['Required input','Execution','Deliverable','Reliability boundary','How it can be demonstrated'],
    approachEyebrow:'HOW I WORK', approachTitle:'Business rules first. Tools second.',
    steps:[['01','Understand the real work','Clarify what people do today, what judgment is actually required and what a correct result means.'],['02','Standardize the contract','Define source files, manual inputs, output schema, exceptions and acceptance criteria.'],['03','Build and verify','Use AI-assisted development, tests, manual comparison and discrepancy checks to implement the workflow.'],['04','Deliver for repeated use','Include recovery, review, maintainability and clear failure states—not just one successful demo.']],
    servicesEyebrow:'INDEPENDENT TECHNICAL SUPPORT', servicesTitle:'Experience working directly with users.', servicesDesc:'A secondary part of the portfolio: practical setup and troubleshooting experience, separate from the software projects above.',
    services:[['Google account setup support','Assist individuals with account setup, basic security/recovery configuration and normal-use maintenance guidance. Independent support; no Google affiliation or endorsement is implied.'],['Business network environment support','Assist cross-border users or businesses with dedicated commercial network-node setup, connection configuration, environment troubleshooting and day-to-day usage support.']],
    aboutEyebrow:'ABOUT', aboutTitle:'I use AI to build faster. I use business judgment to decide what ships.',
    aboutText:'My strength is connecting operational detail with implementation. I am comfortable starting from messy spreadsheets, repetitive browser work or an internal process, then turning that work into explicit rules and a usable system. I do not present AI-generated code as proof by itself; the proof is whether the workflow is understandable, testable and useful to the people doing the work.',
    stack:'Project-used stack', stackItems:['Python','openpyxl','Django','SQLite','Node.js','Playwright','Chrome CDP','Git / GitHub','Codex','ChatGPT'],
    contact:'Looking for someone who can turn a real workflow into a working system?', contactSub:'This portfolio is designed for recruiting conversations around automation, AI applications, workflow systems and internal tools.', contactBtn:'Explore GitHub',
    privacy:'Public material is sanitized. No customer lists, credentials, internal settlement files, cookies or proprietary production rules are published.',
    lang:'中文'
  } : {
    title:'dnggxiao · 业务自动化与工作流系统作品集',
    desc:'面向求职的业务自动化、工作流系统、财务运营与 AI 辅助开发作品集。',
    nav:['项目','Skills','方法','服务经历','关于我'],
    eyebrow:'BUSINESS AUTOMATION · WORKFLOW SYSTEMS',
    hero:'把重复、复杂、依赖人工经验的业务流程，变成<em>可靠系统。</em>',
    intro:'我从真实业务问题出发：先把规则、输入输出和异常边界弄清楚，再利用现代开发工具把流程做成可重复执行、可检查、可交付的系统。',
    target:'求职方向：业务自动化 · AI 应用工程 · Workflow / Agent Systems · 企业内部工具',
    primary:'查看王牌案例', secondary:'GitHub 主页',
    proof:['4 个平台','约 15 个工作日','统一输入输出','人工复核兜底'],
    proofSub:['WB · Amazon · 美客多 · Walmart','原月度财务流程工作量','统一人工输入 → 标准报表','异常不会被静默掩盖'],
    featured:'FEATURED CASE STUDY', featuredTitle:'四平台统一财务报表系统',
    featuredLead:'四个平台，不同原始数据，一套受控的财务报表流程。',
    featuredText:'系统把平台导出、统一人工补充/调整文件、确定性的财务规则、对账和最终标准报表串成一个完整流程。目标不是取消财务判断，而是把重复财务实务从人工操作中剥离出来。',
    flow:['平台原始文件','统一人工输入','校验与映射','财务计算','对账检查','标准报表'],
    myRole:'我负责什么', myRoleText:'我负责需求理解、财务规则拆解、输入输出标准、异常策略、验收条件、生成表格核查和持续迭代；Codex 主要用于辅助代码实现、重构与调试。',
    result:'结果与口径', resultText:'原完整月度流程涉及约 15 个财务工作日。这里把它作为原人工工作量展示，不把它包装成经过独立审计的净节省时间。',
    caseLink:'查看完整案例说明',
    workEyebrow:'SELECTED WORK', workTitle:'用项目证明我怎么解决问题。', workDesc:'项目按求职价值排序，而不是按技术名词排序。企业项目只展示脱敏后的设计、判断和结果，不公开生产数据。',
    filters:{all:'全部',automation:'自动化',research:'研究',systems:'系统',creative:'创作'},
    details:'展开案例', labels:['业务问题','实现路径','关键工程取舍','我的工作','结果与口径'], original:'查看项目记录',
    skillsEyebrow:'REUSABLE WORKFLOWS', skillsTitle:'每个 Skill 都有输入、规则和交付。', skillsDesc:'这里不是罗列工具名称，而是展示可以重复执行、边界明确的任务工作流。',
    skillDetails:'输入、输出与边界', skillLabels:['需要什么输入','如何执行','交付什么','可靠性边界','如何展示或验证'],
    approachEyebrow:'HOW I WORK', approachTitle:'先把业务规则弄清楚，再谈工具。',
    steps:[['01','理解真实工作','先弄清现在的人怎么做、哪里需要判断，以及什么结果才算正确。'],['02','把接口标准化','定义来源文件、人工输入、输出结构、异常处理和验收条件。'],['03','实现并验证','用 AI 辅助开发配合测试、人工对照和差异检查，把规则真正落地。'],['04','让它可以重复交付','把恢复、复核、维护和失败状态放进系统，而不是只做一个能跑一次的 Demo。']],
    servicesEyebrow:'INDEPENDENT TECHNICAL SUPPORT', servicesTitle:'直接面对用户的技术支持经历。', servicesDesc:'这是作品集的次级经历，用来证明实际配置、沟通和故障排查能力，与上面的软件项目分开呈现。',
    services:[['Google 账号配置与使用支持','协助个人完成账号注册流程、基础安全与恢复信息设置，以及正常使用中的维护建议。属于独立技术协助，不暗示 Google 官方授权或合作关系。'],['商用网络环境支持','为跨境业务个人或企业协助配置专用商用网络节点、连接环境、日常使用和故障排查。']],
    aboutEyebrow:'ABOUT', aboutTitle:'AI 帮我加快实现，业务判断决定什么可以交付。',
    aboutText:'我的优势是把业务细节和实际实现连接起来。面对凌乱的 Excel、重复的网页操作或企业内部流程，我会先把工作拆成明确规则，再做成能使用的系统。我不会把“AI 写出了代码”本身当作成果；真正的成果是这个流程是否清楚、可检查、可复用，并且能被实际工作的人采用。',
    stack:'项目中实际使用', stackItems:['Python','openpyxl','Django','SQLite','Node.js','Playwright','Chrome CDP','Git / GitHub','Codex','ChatGPT'],
    contact:'如果一个真实业务流程交给我，我希望把它做成真正能工作的系统。', contactSub:'面向业务自动化、AI 应用、工作流系统和企业内部工具相关岗位。', contactBtn:'查看 GitHub',
    privacy:'公开内容均经过脱敏，不发布客户名单、账号凭据、内部结算文件、Cookie 或企业专有生产规则。',
    lang:'English'
  };

  document.title = C.title;
  const md = document.querySelector('meta[name="description"]'); if (md) md.content = C.desc;

  // Promote the newest finance system without changing the archived source-data file.
  const finance = data.projects.find(p => p.id === 'finance');
  if (finance) {
    finance.tags = ['WB','Amazon','Mercado Libre','Walmart','Python','openpyxl','Reconciliation'];
    finance.zh = {...finance.zh,
      title:'四个平台，一套财务标准。', name:'四平台统一财务报表系统', type:'财务自动化 / 标准化报表',
      summary:'统一 WB、Amazon、美客多与 Walmart 的人工补充输入和最终输出标准，把平台差异收敛到一套可验证的月度财务流程。',
      problem:'四个平台的原始报表结构、费用字段和结算逻辑不同。人工处理不仅耗时，还容易让同一业务规则在不同月份或平台出现不同做法。真正的风险是缺失成本、未知费用或未匹配 SKU 被隐藏在“看起来正常”的表格里。',
      solution:'保留平台各自的源文件现实，在处理层统一人工补充/调整输入标准，再执行校验、映射、销售退款处理、成本费用归集、共享费用分摊、SKU/期间汇总和平台对账，最后输出统一结构的财务报表。',
      decision:'自动化之前先标准化。缺失成本、未知费用和未匹配项必须显式暴露；存在重要异常时保持 DRAFT，完成校验和对账后才进入 FINAL。',
      ownership:'负责原人工流程梳理、财务规则拆解、平台输入与统一人工输入标准、标准报表结构、异常策略、验收条件、表格核查和业务反馈迭代；Codex 辅助实现、重构与调试。',
      result:'原完整流程涉及约 15 个财务工作日/月。现在四条平台路径被收敛为可重复执行的标准化工作流；15 个工作日是原工作量，不是经审计的净节省时间。'};
    finance.en = {...finance.en,
      title:'Four marketplaces. One finance standard.', name:'Four-Platform Financial Reporting System', type:'Finance automation / standardized reporting',
      summary:'Standardize manual adjustments and final reporting across WB, Amazon, Mercado Libre and Walmart while preserving platform-specific source realities.',
      problem:'The four marketplaces expose different source reports, fee fields and settlement logic. Manual processing is time-consuming and can implement the same business rule differently across platforms or months. The bigger risk is a missing cost, unknown fee or unmatched SKU disappearing inside a plausible-looking workbook.',
      solution:'Keep each platform adapter close to its source data, standardize the shared human-adjustment input, then validate, map, process sales/refunds, attribute costs and fees, allocate shared costs, aggregate by SKU/period and reconcile against platform settlement before producing a consistent report.',
      decision:'Standardize before automating. Missing costs, unknown fees and unmatched items stay visible. Material exceptions keep the output in DRAFT; FINAL requires validation and reconciliation.',
      ownership:'Owned manual-workflow analysis, finance-rule translation, platform inputs, shared adjustment standard, report schema, exception behavior, acceptance criteria, workbook review and feedback iteration. Codex assisted implementation, refactoring and debugging.',
      result:'The former end-to-end workflow involved roughly 15 finance workdays per month. Four platform paths are now organized as one repeatable reporting workflow. The 15-day figure is former workload, not audited net time saved.'};
  }

  const details = (v, p) => `<details><summary>${esc(C.details)}</summary><div class="detail">${['problem','solution','decision','ownership','result'].map((k,i)=>`<h4>${esc(C.labels[i])}</h4><p>${esc(v[k])}</p>`).join('')}<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(C.original)} ↗</a></div></details>`;
  const projectCards = data.projects.map(p => { const v=p[lang]; return `<article class="project-card" data-category="${esc(p.category)}"><div class="project-meta"><span>PROJECT ${esc(p.number)}</span><span>${esc(v.status)}</span></div><p class="project-type">${esc(v.type)}</p><h3>${esc(v.title)}</h3><p class="project-name">${esc(v.name)}</p><p>${esc(v.summary)}</p><div class="chips">${p.tags.map(x=>`<span>${esc(x)}</span>`).join('')}</div>${details(v,p)}</article>`; }).join('');
  const skillCards = data.skills.map(s => { const v=s[lang]; return `<article class="skill-card" data-search="${esc(JSON.stringify(s).toLowerCase())}"><div class="skill-code">${esc(s.code)}</div><h3>${esc(v.name)}</h3><p>${esc(v.subtitle)}</p><small>${esc(v.access)}</small><details><summary>${esc(C.skillDetails)}</summary><div class="detail">${['input','process','output','guard','example'].map((k,i)=>`<h4>${esc(C.skillLabels[i])}</h4><p>${esc(v[k])}</p>`).join('')}</div></details></article>`; }).join('');
  const alt = en ? 'index.html' : 'index.en.html';

  mount.innerHTML = `
  <a class="skip" href="#work">Skip</a>
  <header><div class="shell nav"><a class="brand" href="#top"><b>d.</b><span>DNGGXIAO</span></a><nav>${C.nav.map((n,i)=>`<a href="#${['work','skills','approach','services','about'][i]}">${esc(n)}</a>`).join('')}</nav><a class="lang" href="${alt}">${esc(C.lang)}</a></div></header>
  <main id="top">
    <section class="shell hero"><div class="hero-copy"><p class="kicker">${esc(C.eyebrow)}</p><h1>${C.hero}</h1><p class="lead">${esc(C.intro)}</p><p class="target">${esc(C.target)}</p><div class="hero-actions"><a class="btn primary" href="#flagship">${esc(C.primary)}</a><a class="btn" href="${gh}" target="_blank" rel="noopener noreferrer">${esc(C.secondary)} ↗</a></div></div>
    <div class="proof-grid">${C.proof.map((x,i)=>`<div><strong>${esc(x)}</strong><span>${esc(C.proofSub[i])}</span></div>`).join('')}</div></section>

    <section id="flagship" class="shell flagship"><div class="flag-head"><p class="kicker">${esc(C.featured)}</p><h2>${esc(C.featuredTitle)}</h2><p class="flag-lead">${esc(C.featuredLead)}</p></div><p class="flag-text">${esc(C.featuredText)}</p>
      <div class="pipeline">${C.flow.map((x,i)=>`<div class="pipe"><span>${String(i+1).padStart(2,'0')}</span><b>${esc(x)}</b></div>`).join('')}</div>
      <div class="flag-cols"><div><h3>${esc(C.myRole)}</h3><p>${esc(C.myRoleText)}</p></div><div><h3>${esc(C.result)}</h3><p>${esc(C.resultText)}</p></div></div>
      <a class="text-link" href="${repo}/blob/main/projects/sku-profit-reconciliation/README.md" target="_blank" rel="noopener noreferrer">${esc(C.caseLink)} ↗</a>
    </section>

    <section id="work" class="shell section"><div class="section-head"><div><p class="kicker">${esc(C.workEyebrow)}</p><h2>${esc(C.workTitle)}</h2></div><p>${esc(C.workDesc)}</p></div><div class="filters">${Object.entries(C.filters).map(([k,v])=>`<button data-filter="${k}" aria-pressed="${k==='all'}">${esc(v)}</button>`).join('')}</div><div class="project-grid">${projectCards}</div></section>

    <section id="skills" class="shell section"><div class="section-head"><div><p class="kicker">${esc(C.skillsEyebrow)}</p><h2>${esc(C.skillsTitle)}</h2></div><p>${esc(C.skillsDesc)}</p></div><div class="skill-toolbar"><input id="skill-search" type="search" placeholder="${en?'Search skills':'搜索 Skill'}" aria-label="${en?'Search skills':'搜索 Skill'}"><span id="skill-count">${data.skills.length} Skills</span></div><div class="skill-grid">${skillCards}</div></section>

    <section id="approach" class="shell section"><div class="section-head"><div><p class="kicker">${esc(C.approachEyebrow)}</p><h2>${esc(C.approachTitle)}</h2></div></div><div class="steps">${C.steps.map(s=>`<article><span>${s[0]}</span><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></article>`).join('')}</div></section>

    <section id="services" class="shell section services"><div class="section-head"><div><p class="kicker">${esc(C.servicesEyebrow)}</p><h2>${esc(C.servicesTitle)}</h2></div><p>${esc(C.servicesDesc)}</p></div><div class="service-grid">${C.services.map(s=>`<article><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></article>`).join('')}</div></section>

    <section id="about" class="shell section about"><div><p class="kicker">${esc(C.aboutEyebrow)}</p><h2>${esc(C.aboutTitle)}</h2></div><div><p>${esc(C.aboutText)}</p><h3>${esc(C.stack)}</h3><div class="chips large">${C.stackItems.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div></section>

    <section class="shell contact"><div><h2>${esc(C.contact)}</h2><p>${esc(C.contactSub)}</p></div><a class="btn dark" href="${gh}" target="_blank" rel="noopener noreferrer">${esc(C.contactBtn)} ↗</a></section>
  </main>
  <footer class="shell footer"><span>© 2026 dnggxiao</span><p>${esc(C.privacy)}</p></footer>`;

  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b===btn)));
    document.querySelectorAll('.project-card').forEach(card => card.hidden = btn.dataset.filter !== 'all' && card.dataset.category !== btn.dataset.filter);
  }));
  const search = document.getElementById('skill-search');
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase(); let n=0;
    document.querySelectorAll('.skill-card').forEach(card => { const show=!q || card.dataset.search.includes(q); card.hidden=!show; if(show)n++; });
    document.getElementById('skill-count').textContent = `${n} / ${data.skills.length} Skills`;
  });
})();
