/* Vanilla JS; all data stays in the browser. No analytics, API keys or network requests. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const mount = document.getElementById('app');
  if (!data || !mount) return;
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  const lang = requested === 'en' || requested === 'zh' ? requested : (document.documentElement.lang === 'en' ? 'en' : 'zh');
  const en = lang === 'en';
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const copy = {
    zh: {
      title:'dnggxiao · AI 应用与工作流工程作品集',
      description:'把复杂业务做成可靠系统。探索 dnggxiao 的财务自动化、外贸研究、运营 Skills、离线软件与开源创作工作流。',
      nav:['精选项目','Skills','工程方法','关于我'], hero:'把复杂业务，<br>做成<em>可靠系统。</em>',
      intro:'我从真实业务问题出发，用 AI 辅助开发，把财务、外贸、运营与创作中的重复工作，变成可执行、可校验、可交付的流程。',
      work:'查看精选项目', source:'访问 GitHub', role:'AI 应用 / Agent 工作流 / 企业自动化',
      footnote:'业务规则驱动 · 人工复核兜底 · 可追溯的结果',
      demoTitle:'可信结果，不跳过检查。', demoLabel:'校验关卡 / 交互示意', stages:['输入','校验','交付'],
      stateDraft:'有未解决的检查项，保持草稿。',stateFinal:'示意检查通过，可以进入最终态。',
      cost:'成本已补齐', balance:'对账差异已处理', demoNote:'合成状态演示，不是生产截图，也不会处理真实财务数据。',
      metricLabels:['原月度财务流程工作量','询盘 / 订单的典型批次规模','完成研究的合格目标企业','两项运营工具合计月节省估计'],
      metricNote:'指标为既有项目记录与经验估计，非第三方审计；不同指标不代表同一统计口径。',
      projectsTitle:'从问题出发，以交付收尾。', projectsDesc:'六个案例，展示从规则设计到异常处理的具体工作。企业项目公开设计，开源项目链接真实仓库。',
      categories:{all:'全部项目',automation:'业务自动化',research:'外贸研究',creative:'创作工作流',systems:'软件与硬件'},
      caseDetails:'展开案例',caseLabels:['业务问题','实现路径','关键工程取舍','我的工作','结果与口径'],original:'查看原始项目记录',
      skillsTitle:'把经验，封装成可重复执行的能力。',skillsDesc:'五个有资料支持的 Skill。每一项都有清晰的输入、处理方式、输出和不能越过的边界。',
      skillIntro:'这里的 <strong>Skill</strong> 是面向具体任务的可复用工作流，不是工具名称清单。企业实现保持私有；Writing Serial Fiction 提供公开源码。离线应用与机器人不混算为 Skill。',
      search:'搜索', placeholder:'名称、场景或关键词，如 对账 / writing',skillCount:'项 Skills',noSkills:'没有匹配的 Skill。请清空搜索或更换关键词。',
      skillDetails:'输入、输出与使用方式',skillLabels:['需要什么输入','如何执行','交付什么结果','可靠性与边界','展示与验证方式'],related:'查看关联项目',
      methodTitle:'不只让它跑通，更让它值得交付。',methodDesc:'AI 协助实现；业务定义、验收规则和失败处理仍然需要明确的工程判断。',
      steps:[['理解现场','先弄清业务真正需要的结果、数据来源和原来的人工判断。'],['把规则写清','定义输入输出、验收条件，以及缺失、冲突和模糊情况如何处理。'],['实现并验证','通过 AI 辅助开发落地，结合边界测试、人工对照和差异检查。'],['交付与迭代','把可恢复、可复核、可维护纳入交付，再根据使用反馈调整。']],
      principles:['规则优先','不编造缺失数据','异常显式化','人工确认门','中断后恢复','来源可回查'],
      aboutTitle:'AI 帮我实现。<br><em>业务判断决定交付。</em>',
      about1:'我关注 AI 应用与工作流工程：先理解现场，再把流程、规则和异常转成可重复执行的软件。使用 Codex 加速实现，同时对需求、验收与结果负责。',
      about2:'我的项目横跨财务、外贸运营、企业数据管理和创作。共同点不是同一种技术栈，而是把复杂任务拆开，让每一步有输入、有规则、有可检查的输出。',
      about3:'技术使用范围按实际项目呈现；嵌入式部分是课程与项目基础，不夸写为高级开发资历。',
      contactTitle:'让下一段流程，真正运转起来。', contactText:'围绕 AI 应用、Agent 工作流与企业自动化交流。', contactButton:'在 GitHub 了解更多',
      footer:'公开展示脱敏设计与方法，不公开客户名单、订单、凭据或内部财务数据。企业成果按项目记录呈现；创作工作流无第三方平台官方背书。',
      privacy:'隐私边界',language:'English',allVisible:'当前显示',projectsCount:'个项目',skip:'跳到主要内容'
    },
    en: {
      title:'dnggxiao · AI Applications & Workflow Engineering',
      description:'From complex business workflows to reliable systems. Explore finance automation, business research, operations Skills, offline software and open-source creative workflows.',
      nav:['Selected work','Skills','Approach','About'],hero:'Complex work.<br><em>Reliable systems.</em>',
      intro:'I start with real operational problems and use AI-assisted development to turn repetitive finance, trade, operations and creative tasks into executable, verifiable workflows.',
      work:'Explore the work',source:'Visit GitHub',role:'AI applications / Agent workflows / Business automation',
      footnote:'Rules first · Human review · Traceable results',
      demoTitle:'Trust is a process.<br>Not a default.',demoLabel:'QUALITY GATE / INTERACTIVE STUDY',stages:['INPUT','VALIDATE','DELIVER'],
      stateDraft:'Unresolved checks keep this in draft.',stateFinal:'Illustrative checks passed. Ready for final.',
      cost:'Resolve missing cost',balance:'Resolve settlement difference',demoNote:'Synthetic state demo. Not a production screenshot or a real financial processor.',
      metricLabels:['Former monthly finance workload','Typical inquiry / order batch size','Qualified target companies researched','Estimated monthly days saved by both operations tools'],
      metricNote:'Metrics are project-reported estimates, not independently audited. Each describes a different scope.',
      projectsTitle:'Start with the problem.<br>Finish with a working system.',projectsDesc:'Six case studies, from business rules to failure handling. Private implementations are documented; open-source work links to its actual repository.',
      categories:{all:'All work',automation:'Automation',research:'Research',creative:'Creative',systems:'Software & hardware'},
      caseDetails:'Inside the case study',caseLabels:['The problem','The implementation','The engineering decision','My contribution','Outcome & scope'],original:'Read the original project record',
      skillsTitle:'Experience, made repeatable.',skillsDesc:'Five documented Skills, each with explicit inputs, execution, outputs and boundaries.',
      skillIntro:'A <strong>Skill</strong> here is a reusable task workflow—not a list of tools. Enterprise implementations remain private; Writing Serial Fiction has public source. The offline application and robot are not counted as Skills.',
      search:'Search',placeholder:'Name, use case or keyword, e.g. finance / writing',skillCount:'Skills',noSkills:'No matching Skills. Clear the search or try another keyword.',
      skillDetails:'Inputs, outputs & how it works',skillLabels:['Required inputs','Execution','Deliverables','Reliability & boundaries','How to inspect or demonstrate'],related:'View the related project',
      methodTitle:'Make it work.<br>Then make it worth delivering.',methodDesc:'AI accelerates implementation. Business definitions, acceptance criteria and failure behavior still require engineering judgment.',
      steps:[['Understand the work','Clarify the actual outcome, source data and decisions made in the original manual process.'],['Specify the rules','Define inputs, outputs, acceptance and how to handle missing, conflicting or ambiguous information.'],['Build and verify','Use AI-assisted development with edge-case tests, manual comparisons and discrepancy checks.'],['Deliver and iterate','Include recovery, review and maintainability in delivery; refine the workflow from actual feedback.']],
      principles:['Rule-based decisions','No invented inputs','Visible exceptions','Human approval','Resumable workflows','Traceable sources'],
      aboutTitle:'AI helps me build.<br><em>Business rules<br>decide what ships.</em>',
      about1:'I focus on AI applications and workflow engineering: understand the work, then turn its steps, rules and exceptions into repeatable software. I use Codex to accelerate implementation while owning requirements, acceptance and results.',
      about2:'My projects span finance, trade operations, enterprise data management and creative work. The common thread is not one technology stack: it is decomposing complex tasks into explicit inputs, rules and checkable outputs.',
      about3:'Technology claims reflect actual project use. Embedded work represents coursework and project foundations, not advanced-development credentials.',
      contactTitle:'Make the next workflow work.',contactText:'Connect around AI applications, agent workflows and business automation.',contactButton:'Explore my GitHub',
      footer:'Public material describes sanitized designs and methods, not customer lists, orders, credentials or internal finance data. Outcomes are project-reported. The writing workflow has no official third-party platform endorsement.',
      privacy:'Privacy boundaries',language:'中文',allVisible:'Showing',projectsCount:'projects',skip:'Skip to main content'
    }
  };
  const t=copy[lang];
  document.documentElement.lang=en?'en':'zh-CN';
  document.title=t.title;
  document.querySelector('meta[name="description"]').setAttribute('content',t.description);
  const alt=(en?'index.html':'index.en.html')+window.location.hash;
  const source='https://github.com/dnggxiao/ai-agent-portfolio';
  const link=(url,label,cls='textlink')=>`<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const paragraph=(label,text)=>`<h4>${esc(label)}</h4><p>${esc(text)}</p>`;
  const projects=data.projects.map(p=>{
    const v=p[lang];
    return `<article class="project" id="work-${p.id}" data-category="${p.category}" aria-labelledby="title-${p.id}">
      <div class="project-top"><span class="number">PROJECT / ${p.number}</span><span class="status">${esc(v.status)}</span></div>
      <p class="type">${esc(v.type)}</p><h3 id="title-${p.id}">${esc(v.title)}</h3>
      <p class="project-name">${esc(v.name)}</p><p class="summary">${esc(v.summary)}</p>
      <div class="tags">${p.tags.map(tag=>`<span class="chip">${esc(tag)}</span>`).join('')}</div>
      <details><summary>${esc(t.caseDetails)}</summary><div class="detail"><p class="role">${esc(v.role)}</p>
      ${['problem','solution','decision','ownership','result'].map((key,i)=>paragraph(t.caseLabels[i],v[key])).join('')}
      <p class="source">${link(p.url,t.original)}</p></div></details></article>`;
  }).join('');
  const skills=data.skills.map(s=>{
    const v=s[lang];
    return `<article class="skill" id="skill-${s.id}" aria-labelledby="skill-title-${s.id}" data-skill-id="${s.id}">
      <p class="eyebrow">${esc(s.code)}</p><h3 id="skill-title-${s.id}">${esc(v.name)}</h3>
      <p class="sub">${esc(v.subtitle)}</p><p class="access">${esc(v.access)}</p>
      <details><summary>${esc(t.skillDetails)}</summary><div class="detail">
      ${['input','process','output','guard','example'].map((key,i)=>paragraph(t.skillLabels[i],v[key])).join('')}
      <p class="source"><a href="#work-${s.project}" data-project-link="${s.project}">${esc(t.related)} <span aria-hidden="true">↗</span></a></p>
      </div></details></article>`;
  }).join('');
  mount.innerHTML=`
    <a class="skip" href="#main">${esc(t.skip)}</a>
    <header><div class="wrap nav">
      <a class="brand" href="#main" aria-label="dnggxiao"><span class="mark" aria-hidden="true">d.</span>DNGGXIAO<span class="muted mono">/</span></a>
      <nav class="navlinks" aria-label="${en?'Main navigation':'主导航'}">${['projects','skills','approach','about'].map((id,i)=>`<a href="#${id}">${esc(t.nav[i])}</a>`).join('')}</nav>
      <a class="language" href="${esc(alt)}" lang="${en?'zh-CN':'en'}" aria-label="${en?'切换至中文版':'Switch to English'}">${esc(t.language)} <span aria-hidden="true">↗</span></a>
    </div></header>
    <main id="main" class="wrap">
      <section class="hero" aria-labelledby="hero-title">
        <div><p class="eyebrow">AI ENGINEERING · WORKFLOW DESIGN</p><h1 id="hero-title">${t.hero}</h1><p class="intro">${esc(t.intro)}</p>
          <div class="actions"><a class="button primary" href="#projects">${esc(t.work)} <span aria-hidden="true">↘</span></a>${link('https://github.com/dnggxiao',t.source,'button')}</div>
          <p class="hero-note"><b>${esc(t.role)}</b><br>${esc(t.footnote)}</p>
        </div>
        <aside class="console" aria-label="${en?'Interactive quality-gate demonstration':'交互式校验关卡示意'}">
          <div class="console-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span>WORKFLOW / 001</span></div>
          <div class="console-body"><p class="console-label">${esc(t.demoLabel)}</p><h2>${t.demoTitle}</h2>
          <div class="flow" aria-hidden="true">${t.stages.map((s,i)=>(i?'<span>→</span>':'')+`<b>${esc(s)}</b>`).join('')}</div>
          <div class="checkline"><code>sku_cost.check</code><span class="flag" id="cost-flag">MISSING INPUT</span></div>
          <div class="checkline"><code>settlement.check</code><span class="flag" id="balance-flag">REVIEW NEEDED</span></div>
          <div class="state-row" aria-live="polite" aria-atomic="true"><strong class="state-name" id="demo-state">DRAFT</strong><span class="state-caption" id="state-caption">${esc(t.stateDraft)}</span></div>
          <div class="demo-controls"><label><input id="resolve-cost" type="checkbox">${esc(t.cost)}</label><label><input id="resolve-balance" type="checkbox">${esc(t.balance)}</label></div>
          <p class="demo-note">${esc(t.demoNote)}</p></div>
        </aside>
      </section>
      <div class="metrics">${['15','200','60','2'].map((n,i)=>`<div class="metric"><strong>${n}<small>${i===0||i===3?'d':''}</small></strong><p>${esc(t.metricLabels[i])}</p></div>`).join('')}</div>
      <p class="metrics-note">${esc(t.metricNote)}</p>
      <section class="section" id="projects" aria-labelledby="projects-title">
        <div class="section-head"><div><p class="eyebrow">01 / SELECTED WORK</p><h2 id="projects-title">${t.projectsTitle}</h2></div><p class="section-desc">${esc(t.projectsDesc)}</p></div>
        <div class="filters" role="group" aria-label="${en?'Filter projects':'筛选项目'}">${Object.entries(t.categories).map(([key,label])=>`<button class="filter" type="button" data-filter="${key}" aria-pressed="${key==='all'}">${esc(label)}</button>`).join('')}</div>
        <p class="count" id="project-count" aria-live="polite">${esc(t.allVisible)} 6 ${esc(t.projectsCount)}</p>
        <div class="project-grid">${projects}</div>
      </section>
      <section class="section" id="skills" aria-labelledby="skills-title">
        <div class="section-head"><div><p class="eyebrow">02 / SKILL LIBRARY</p><h2 id="skills-title">${t.skillsTitle}</h2></div><p class="section-desc">${esc(t.skillsDesc)}</p></div>
        <div class="skill-intro">${t.skillIntro}</div>
        <div class="search-row"><div class="search-box"><label for="skill-search">${esc(t.search)}</label><input type="search" id="skill-search" placeholder="${esc(t.placeholder)}" autocomplete="off" spellcheck="false"></div><span class="count" id="skill-count" aria-live="polite">5 / 5 ${esc(t.skillCount)}</span></div>
        <div class="skill-grid">${skills}</div><p class="empty" id="skill-empty" hidden>${esc(t.noSkills)}</p>
      </section>
      <section class="section" id="approach" aria-labelledby="approach-title">
        <div class="section-head"><div><p class="eyebrow">03 / HOW I BUILD</p><h2 id="approach-title">${t.methodTitle}</h2></div><p class="section-desc">${esc(t.methodDesc)}</p></div>
        <div class="method">${t.steps.map(([h,p],i)=>`<article class="step"><b>0${i+1}</b><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join('')}</div>
        <div class="principles">${t.principles.map(p=>`<span>${esc(p)}</span>`).join('')}</div>
      </section>
      <section class="about" id="about" aria-labelledby="about-title"><div><p class="eyebrow">04 / BEHIND THE WORK</p><h2 id="about-title">${t.aboutTitle}</h2></div><div><p>${esc(t.about1)}</p><p>${esc(t.about2)}</p><p>${esc(t.about3)}</p><div class="stack">${['Python','Node.js','Playwright / CDP','openpyxl','Django / SQLite','Codex','Git / GitHub','STM32 / ESP32'].map(s=>`<span>${esc(s)}</span>`).join('')}</div></div></section>
      <section class="contact" aria-labelledby="contact-title"><div><p class="eyebrow">LET'S BUILD SOMETHING USEFUL</p><h2 id="contact-title">${t.contactTitle}</h2><p>${esc(t.contactText)}</p></div>${link('https://github.com/dnggxiao',t.contactButton,'button')}</section>
      <footer class="footer"><p>${esc(t.footer)}<br>${link(source+'/blob/main/SECURITY_AND_PRIVACY.md',t.privacy)}</p><p class="mono">DNGGXIAO / 2026<br>HTML · CSS · JAVASCRIPT<br>NO TRACKERS. NO EXTERNAL DEPENDENCIES.</p></footer>
    </main>`;
  const cost=document.getElementById('resolve-cost'),balance=document.getElementById('resolve-balance');
  const updateDemo=()=>{
    [[cost,'cost-flag','MISSING INPUT'],[balance,'balance-flag','REVIEW NEEDED']].forEach(([input,id,missing])=>{
      const flag=document.getElementById(id);flag.textContent=input.checked?'PASS':missing;flag.classList.toggle('good',input.checked);
    });
    const complete=cost.checked&&balance.checked,state=document.getElementById('demo-state');
    state.textContent=complete?'FINAL':'DRAFT';state.classList.toggle('good',complete);
    document.getElementById('state-caption').textContent=complete?t.stateFinal:t.stateDraft;
  };
  cost.addEventListener('change',updateDemo);balance.addEventListener('change',updateDemo);
  function filterProjects(category){
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
    let count=0;document.querySelectorAll('.project').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)count++;});
    document.getElementById('project-count').textContent=`${t.allVisible} ${count} ${t.projectsCount}`;
  }
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterProjects(b.dataset.filter)));
  document.getElementById('skill-search').addEventListener('input',event=>{
    const q=event.target.value.trim().toLocaleLowerCase();let count=0;
    data.skills.forEach(skill=>{
      const show=JSON.stringify(skill).toLocaleLowerCase().includes(q);
      document.getElementById('skill-'+skill.id).hidden=!show;if(show)count++;
    });
    document.getElementById('skill-count').textContent=`${count} / ${data.skills.length} ${t.skillCount}`;
    document.getElementById('skill-empty').hidden=count!==0;
  });
  document.querySelectorAll('[data-project-link]').forEach(a=>a.addEventListener('click',()=>{
    filterProjects('all');
    document.querySelector('#work-'+a.dataset.projectLink+' details').open=true;
  }));
  function revealHash(){
    const hash=window.location.hash.slice(1);
    const target=document.getElementById(hash);
    if(target&&(target.classList.contains('project')||target.classList.contains('skill'))){
      if(target.classList.contains('project'))filterProjects('all');
      if(target.classList.contains('skill')){
        const search=document.getElementById('skill-search');search.value='';search.dispatchEvent(new Event('input'));
      }
      target.querySelector('details').open=true;
      requestAnimationFrame(()=>target.scrollIntoView());
    }
    document.querySelector('.language').setAttribute('href',(en?'index.html':'index.en.html')+window.location.hash);
  }
  window.addEventListener('hashchange',revealHash);revealHash();
  let printState=[];
  window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('details')].map(d=>[d,d.open]);printState.forEach(([d])=>{d.open=true;});});
  window.addEventListener('afterprint',()=>{printState.forEach(([d,open])=>{d.open=open;});});
})();
