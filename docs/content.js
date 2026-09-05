/* Single source for bilingual project and Skill facts. See EVIDENCE.md. */
window.PORTFOLIO = {
  "projects": [
    {
      "id": "finance",
      "number": "01",
      "category": "automation",
      "tags": [
        "Python",
        "openpyxl",
        "Standardized I/O",
        "Reconciliation"
      ],
      "zh": {
        "title": "四个平台，一套报表标准。",
        "name": "四平台统一财务报表系统",
        "type": "财务自动化",
        "status": "企业业务中使用",
        "role": "项目负责人",
        "summary": "连接 WB、Amazon、美客多与 Walmart 的平台文件，统一人工补充／调整输入和最终报表输出，在本地工作区完成可复核的月度核算。",
        "problem": "四个平台的数据结构和结算字段不同，财务人员需要反复整理来源文件、补充成本、核对映射并检查差异。原完整月度流程约占 15 个工作日。",
        "solution": "保留各平台的来源文件，通过对应处理流程归一；以统一人工输入补充成本与调整，再进行映射、适用的费用归集、核算和对账，按共同标准输出结果。准备好必要文件后，由本地 Codex 工作区执行既定流程。",
        "decision": "先统一输入与输出，再自动化中间步骤。缺失成本、未匹配 SKU 和对账差异必须显式出现，未解决的重要异常不能被包装成最终结果。原核算流程采用 DRAFT → FINAL 校验门。",
        "ownership": "负责原流程拆解、四平台输入接口、统一人工补充标准、最终报表结构、业务规则、异常边界、验收和迭代；Codex 辅助实现、重构与调试。",
        "result": "将四个平台的重复报表工作组织为统一标准下的自动化流程。约 15 个工作日是原月度工作量的项目估计；未提供逐月耗时对照，因此不作为精确净节省值。",
        "flow": [
          "四平台来源文件",
          "统一人工补充",
          "核算与对账",
          "标准报表"
        ],
        "evidence": "项目说明 · 私有实现"
      },
      "en": {
        "title": "Four marketplaces. One reporting standard.",
        "name": "Four-Platform Financial Reporting System",
        "type": "Finance automation",
        "status": "Used in enterprise workflows",
        "role": "Project lead",
        "summary": "Bring WB, Amazon, Mercado Libre and Walmart source files into a local reporting workflow with a shared manual-adjustment standard and a consistent output contract.",
        "problem": "Different source structures and settlement fields required repeated file preparation, cost inputs, mapping and discrepancy checks. The full monthly process previously occupied roughly 15 workdays.",
        "solution": "Retain platform-specific source files and processing paths. Use a shared manual input for costs and adjustments, then map, apply the relevant allocation and calculation rules, reconcile and produce consistent reports. The established workflow runs in a local Codex workspace once required files are prepared.",
        "decision": "Standardize the input and output before automating the middle. Missing costs, unmatched SKUs and settlement differences stay visible. The documented reconciliation workflow uses a DRAFT → FINAL gate rather than disguising unresolved exceptions as final results.",
        "ownership": "Owned workflow analysis, four-platform input interfaces, shared manual-input standard, report structure, business rules, exception boundaries, acceptance and iteration. Codex assisted implementation, refactoring and debugging.",
        "result": "Organized four reporting paths into an automated workflow under a common standard. Roughly 15 workdays is the project-reported former monthly workload; no month-by-month timing study is provided, so it is not a precise net-saving claim.",
        "flow": [
          "Marketplace files",
          "Shared adjustments",
          "Calculate & reconcile",
          "Standard report"
        ],
        "evidence": "Documented case · Private implementation"
      },
      "url": "https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/sku-profit-reconciliation/README.md"
    },
    {
      "id": "operations",
      "number": "02",
      "category": "automation",
      "tags": [
        "Node.js",
        "Playwright",
        "Chrome CDP"
      ],
      "zh": {
        "title": "从询盘到业绩，少做重复登记。",
        "name": "Alibaba.com 运营自动化组合",
        "type": "浏览器自动化",
        "status": "运营团队实际使用",
        "role": "独立开发",
        "summary": "两项独立 Skill，分别处理询盘新客识别、客户登记与销售业绩归属。",
        "problem": "运营人员反复打开询盘和历史订单，识别新老客户、确认业务员归属，再手工登记到 Excel。长批次还需要处理页面状态与中断。",
        "solution": "通过 Node.js、playwright-core 和 Chrome CDP 连接独立浏览器。询盘流程逐条保存进度、查看完整历史并去重；订单流程采集已付款订单、回查历史并生成业绩表。",
        "decision": "询盘流程只读，不发消息、不修改客户信息；验证码交由人工处理，不绕过验证。模糊判定进入复核，修正留痕。订单表校验数量、金额、表头、公式和排序。",
        "ownership": "负责业务判定、浏览器流程、状态恢复、异常策略、验收标准和团队反馈迭代。",
        "result": "典型批次约 200 条询盘或 200 笔订单；两项工具合计约节省 2 个运营工作日/月，为项目经验估计。",
        "flow": [
          "授权页面",
          "回查完整历史",
          "规则判定／复核",
          "台账与进度"
        ],
        "evidence": "项目说明 · 私有实现"
      },
      "en": {
        "title": "From inquiries to accountable sales records.",
        "name": "Alibaba.com Operations Suite",
        "type": "Browser automation",
        "status": "Used by the operations team",
        "role": "Independent developer",
        "summary": "Two distinct Skills for inquiry classification, customer registration and sales-performance attribution.",
        "problem": "Operators repeatedly review inquiries and historical orders, classify customers, determine salesperson ownership and enter results into Excel. Long batches also need interruption and browser-state handling.",
        "solution": "Node.js, playwright-core and Chrome CDP drive a separate browser. The inquiry workflow checkpoints each record, checks full conversation history and deduplicates. The order workflow collects paid orders, checks history and generates performance workbooks.",
        "decision": "Inquiry processing is read-only: no messages or customer-profile edits. CAPTCHA pauses for human action rather than bypassing verification. Ambiguous cases are reviewed and corrections recorded. Validate order counts, amounts, headers, formulas and sorting.",
        "ownership": "Owned business classification, browser flows, state recovery, exception policy, acceptance criteria and team-feedback iteration.",
        "result": "Typical batches contain about 200 inquiries or 200 orders. The two tools together save approximately 2 operations workdays per month, based on project estimates.",
        "flow": [
          "Authorized session",
          "Full-history review",
          "Rules / review",
          "Ledger & checkpoint"
        ],
        "evidence": "Documented case · Private implementation"
      },
      "url": "https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md"
    },
    {
      "id": "codes",
      "number": "03",
      "category": "systems",
      "tags": [
        "Django",
        "SQLite",
        "PyInstaller"
      ],
      "zh": {
        "title": "扫一个码，查清四层关系。",
        "name": "四级包装码关系管理系统",
        "type": "离线应用",
        "status": "已交付企业",
        "role": "独立开发",
        "summary": "面向非技术用户的 Windows 本地应用：查询、导入、导出、回滚与备份集中在一个工作流。",
        "problem": "业务需要在 Pallet → Carton → B4 → Label 四级包装关系中，从任意层级追溯上下游，且不依赖独立数据库服务。",
        "solution": "使用 Django 与 SQLite 实现双向查询、扫码及手输、CSV/TXT 导入、连续 TXT 批量导入、进度反馈、分类导出、导入历史、最近一次导入回滚和一键备份。以 PyInstaller 打包为 Windows 便携目录。",
        "decision": "把数据持久化、误导入恢复和非技术用户的启动方式纳入交付，而不是只完成一个查询页面。",
        "ownership": "独立负责需求解释、关系建模、实现、测试、导入导出边界、回滚备份和最终打包。",
        "result": "已交付企业；尚无正式报告的后续生产采纳数据，因此不声称已大规模投入生产。",
        "flow": [
          "Pallet",
          "Carton",
          "B4",
          "Label"
        ],
        "evidence": "交付记录 · 私有实现"
      },
      "en": {
        "title": "One scan. Four levels of traceability.",
        "name": "Four-Level Packaging Code System",
        "type": "Offline application",
        "status": "Delivered to the enterprise",
        "role": "Independent developer",
        "summary": "A local Windows application combining lookup, imports, exports, rollback and backup for non-technical users.",
        "problem": "The business needed upstream and downstream lookup from any level in Pallet → Carton → B4 → Label, without a separately installed database service.",
        "solution": "Django and SQLite power bidirectional lookup, scanner/manual input, CSV/TXT imports, continuous TXT batches, progress feedback, categorized exports, import history, last-import rollback and one-click backup. Packaged as a portable Windows folder with PyInstaller.",
        "decision": "Persistent data, recovery from mistaken imports and practical startup for non-technical users are part of delivery—not extras after a lookup screen.",
        "ownership": "Owned requirements, relationship modeling, implementation, tests, import/export boundaries, rollback, backup and packaging.",
        "result": "Delivered to the enterprise. Downstream production-adoption data has not been formally reported; no large-scale production-use claim is made.",
        "flow": [
          "Pallet",
          "Carton",
          "B4",
          "Label"
        ],
        "evidence": "Delivery account · Private implementation"
      },
      "url": "https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/four-level-code-system/README.md"
    },
    {
      "id": "research",
      "number": "04",
      "category": "research",
      "tags": [
        "Source verification",
        "Structured research",
        "Excel"
      ],
      "zh": {
        "title": "交付可核查的目标企业名单。",
        "name": "B2B 企业与商务联系人研究",
        "type": "外贸研究",
        "status": "外贸团队实际使用",
        "role": "独立开发",
        "summary": "把零散公开资料转成可查证的企业、业务单元、采购角色与商务联系信息。",
        "problem": "获客研究不仅是搜索公司名称，还要识别产品适配、组织结构与采购相关角色。未经验证的第三方信息很容易污染销售线索。",
        "solution": "提供目标发现、单企业深挖、已有名单补全三种研究路径；按 Companies、Contacts、Business Units、Official Accounts、Sources 组织输出。",
        "decision": "联系方式必须逐字出现在核查过的来源中；推断角色不等于编造邮箱。找不到就返回明确缺失，第三方来源保留标识，不自动发送外联消息。",
        "ownership": "负责研究路径、来源优先级、验证规则、结构化输出和交付验收。",
        "result": "已完成 60 家符合既定客户条件的目标企业研究，结果用于外贸团队的定向业务拓展；不把研究数量当作成交数量。",
        "flow": [
          "目标条件",
          "公开来源核查",
          "角色与联系信息",
          "结构化交付"
        ],
        "evidence": "方法与交付记录"
      },
      "en": {
        "title": "Prospecting with a verifiable source trail.",
        "name": "B2B Company & Contact Research",
        "type": "Business research",
        "status": "Used by the trade team",
        "role": "Independent developer",
        "summary": "Convert fragmented public information into verifiable companies, business units, purchasing roles and business contacts.",
        "problem": "Prospecting requires more than company names: it needs product fit, organizational context and purchasing-related roles. Unverified third-party information can easily contaminate a lead list.",
        "solution": "Three research paths: prospecting, company deep dives and lead enrichment. Organize results into Companies, Contacts, Business Units, Official Accounts and Sources.",
        "decision": "Contact details must appear verbatim in a checked source. Inferring a relevant role never licenses inventing an email. Explicitly mark missing findings and third-party sources. Do not automatically send outreach.",
        "ownership": "Owned research paths, source priorities, verification rules, structured outputs and delivery acceptance.",
        "result": "Researched 60 companies meeting the defined customer criteria for targeted business development. Research coverage is not a claim of converted sales.",
        "flow": [
          "Target criteria",
          "Source verification",
          "Roles & contacts",
          "Structured delivery"
        ],
        "evidence": "Methodology & delivery account"
      },
      "url": "https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/b2b-contact-research-agent/README.md"
    },
    {
      "id": "fiction",
      "number": "05",
      "category": "creative",
      "tags": [
        "Codex workflow",
        "Human approval",
        "State isolation"
      ],
      "zh": {
        "title": "让长篇创作保留事实与决定。",
        "name": "长篇连载小说创作工作流",
        "type": "开源工作流",
        "status": "公开源码与示例",
        "role": "工作流设计与维护",
        "summary": "把创作拆成规划、确认、正文、独立检查与状态更新，保持作者对剧情和人物的控制。",
        "problem": "长对话创作容易遗忘事实、擅改人物决定、把规划语言写进正文，或让一次修改污染长期状态。",
        "solution": "文件化事实与连续状态；正文只接收最小资料包和场景执行卡；独立 Skill 提供 chapter-planning、prose-writing、readonly-diagnosis 三种模式。完整工作流另设轻检与条件修正阶段。",
        "decision": "一次调用只执行一种模式；先确认再写作，轻检通过后才更新正式正文与连续状态。独立 Skill 不会自动读取历史章节，也不是一键生成整本书。",
        "ownership": "将创作约束整理为输入契约、执行模式、确认门、检查规则、迁移说明与可复用模板。",
        "result": "公开仓库包含原创示例、测试与使用文档。以仓库当前发布内容为准，不承诺商业成绩或任何平台官方背书。",
        "flow": [
          "固定事实",
          "执行卡确认",
          "正文／独立检查",
          "更新连续状态"
        ],
        "evidence": "公开源码 · 原创示例"
      },
      "en": {
        "title": "A writing workflow that preserves decisions.",
        "name": "Serial Fiction Workflow",
        "type": "Open-source workflow",
        "status": "Public source and example",
        "role": "Workflow design & maintenance",
        "summary": "Separate planning, approval, prose, independent checks and state updates while preserving authorial control.",
        "problem": "Long conversational writing can forget facts, override character decisions, leak planning language into prose or let one revision corrupt persistent story state.",
        "solution": "File-based facts and continuity state; prose receives only a minimal packet and scene execution card. The standalone Skill has chapter-planning, prose-writing and readonly-diagnosis modes. The full workflow adds separate checks and conditional correction.",
        "decision": "One mode per invocation. Approve before writing; update canonical prose and continuity only after checks pass. The standalone Skill does not automatically read earlier chapters and is not a one-click book generator.",
        "ownership": "Translate creative constraints into input contracts, execution modes, approval gates, checks, migration notes and reusable templates.",
        "result": "The public repository contains an original example, tests and documentation. Refer to the repository for release status; no commercial-success or platform-endorsement claim.",
        "flow": [
          "Established facts",
          "Approved scene card",
          "Draft / review",
          "Continuity update"
        ],
        "evidence": "Public source · Original example"
      },
      "url": "https://github.com/dnggxiao/serial-fiction-workflow"
    },
    {
      "id": "robot",
      "number": "06",
      "category": "systems",
      "tags": [
        "STM32",
        "ESP32",
        "PWM / Sensors"
      ],
      "zh": {
        "title": "把控制、感知与交互接起来。",
        "name": "桌面智能机器人",
        "type": "软硬件集成",
        "status": "进行中的学术项目",
        "role": "两人团队负责人",
        "summary": "将控制、动作、感知与语音交互模块整合到桌面设备，并逐模块定位问题。",
        "problem": "多模块设备的问题可能来自控制参数、硬件连接或配置；需要在整机中定位，而不是盲目更换部件。",
        "solution": "参与 STM32 控制开发，集成 ESP32、舵机、语音识别、显示与传感器，协调结构装配及整机联调。",
        "decision": "对舵机抖动检查 PWM 参数与控制逻辑；对语音识别不稳定排查 ESP32 配置。保留问题定位路径，而不只描述最后修好了。",
        "ownership": "负责项目拆解、分工、模块集成与软硬件联合调试。",
        "result": "展示嵌入式基础与系统集成实践。项目仍在进行，不包装成量产产品或高级嵌入式开发资历。",
        "flow": [
          "控制",
          "动作",
          "传感",
          "语音交互"
        ],
        "evidence": "学术项目说明"
      },
      "en": {
        "title": "Integrating control, sensing and interaction.",
        "name": "Desktop Intelligent Robot",
        "type": "Hardware–software integration",
        "status": "Ongoing academic project",
        "role": "Lead of a two-person team",
        "summary": "Integrate control, motion, sensing and voice interaction in a desktop device, with module-level fault isolation.",
        "problem": "Multi-module failures can arise from control parameters, wiring or configuration. They need to be isolated in the integrated system rather than addressed by blindly replacing parts.",
        "solution": "Participate in STM32 control development; integrate ESP32, servos, voice recognition, display and sensors; coordinate mechanical assembly and system debugging.",
        "decision": "Investigate servo jitter through PWM parameters and control logic, and recognition instability through ESP32 configuration. Preserve the diagnosis path, not merely the final fix.",
        "ownership": "Owned project decomposition, task allocation, module integration and cross-layer troubleshooting.",
        "result": "Demonstrates embedded foundations and integration practice. The project remains ongoing; it is not presented as a mass-produced product or advanced embedded-development credential.",
        "flow": [
          "Control",
          "Motion",
          "Sensing",
          "Voice interaction"
        ],
        "evidence": "Academic project account"
      },
      "url": "https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/desktop-intelligent-robot/README.md"
    }
  ],
  "skills": [
    {
      "id": "finance",
      "category": "automation",
      "code": "FINANCE / 01",
      "project": "finance",
      "zh": {
        "name": "四平台财务报表与对账",
        "subtitle": "统一人工补充接口，也统一最终交付。",
        "access": "私有实现 · 公开案例",
        "input": "WB、Amazon、美客多或 Walmart 的平台源文件，以及符合统一标准的人工补充／调整文件。实际字段、依赖和目录按私有项目约定。",
        "process": "确认来源与必填输入 → 平台适配及 SKU 映射 → 按规则核算与归集 → 对账与异常检查 → 标准化输出。",
        "output": "按共同标准组织的财务报表，连同异常项和校验状态；不是让模型自由编写财务数字。",
        "guard": "缺失成本、未知费用、未匹配 SKU 不能猜测补齐。输入准备与异常复核仍由人负责；具体发布条件依私有实现。",
        "example": "作品集中的公开演示可操作“缺成本”和“对账差异”两种合成异常。它展示设计思想，不使用私有算法或真实报表模板。",
        "runtime": "本地 Codex 工作区与项目依赖"
      },
      "en": {
        "name": "Four-Platform Reporting & Reconciliation",
        "subtitle": "One manual-input standard. A consistent deliverable.",
        "access": "Private implementation · Public case study",
        "input": "Source exports from WB, Amazon, Mercado Libre or Walmart, plus manual inputs/adjustments following the shared standard. Exact fields, dependencies and paths belong to the private project.",
        "process": "Check sources and required inputs → platform interpretation and SKU mapping → rule-based calculation/allocation → reconciliation and exception checks → standardized output.",
        "output": "Reports following a common output standard, with exceptions and validation state. Financial values are not freely invented by a language model.",
        "guard": "Do not guess missing costs, unknown fees or unmatched SKUs. People still prepare inputs and review exceptions; release conditions follow the private implementation.",
        "example": "The public portfolio demonstration lets a reviewer resolve synthetic missing-cost and settlement exceptions. It illustrates the design, not private algorithms or production templates.",
        "runtime": "Local Codex workspace and project dependencies"
      }
    },
    {
      "id": "b2b",
      "category": "research",
      "code": "RESEARCH / 02",
      "project": "research",
      "zh": {
        "name": "B2B 企业与联系人研究",
        "subtitle": "不是多找几个邮箱，而是建立证据链。",
        "access": "私有 Skill · 公开方法",
        "input": "产品、行业与目标市场；或一家公司；或待补全的企业名单。",
        "process": "目标发现 / 企业深挖 / 名单补全 → 官方来源优先 → 角色与联系信息核查 → 去重和结构化。",
        "output": "Companies、Contacts、Business Units、Official Accounts 与 Sources 等工作表。",
        "guard": "联系方式必须能回指原文；无法查证时标记未找到。排除私人家庭信息和泄露资料，不自动外联。",
        "example": "给定一家公司，说明相关采购角色的依据，并为每项公开商务联系信息保留来源。",
        "runtime": "具备公开网页检索能力的授权环境"
      },
      "en": {
        "name": "B2B Company & Contact Research",
        "subtitle": "Not more guessed emails. A stronger evidence trail.",
        "access": "Private Skill · Public methodology",
        "input": "Product, industry and target market; a single company; or an existing company list.",
        "process": "Prospecting / deep dive / enrichment → official-source priority → role and contact verification → deduplication and structured output.",
        "output": "Sheets including Companies, Contacts, Business Units, Official Accounts and Sources.",
        "guard": "Trace contact details to source text; mark unverified findings as missing. Exclude private family information and leaked data. No automatic outreach.",
        "example": "Research one company, explain the evidence for purchasing-related roles and retain sources for public business contacts.",
        "runtime": "An authorized environment with public-web research"
      }
    },
    {
      "id": "inquiries",
      "category": "automation",
      "code": "OPERATIONS / 03",
      "project": "operations",
      "zh": {
        "name": "询盘新老客户识别",
        "subtitle": "看完整历史，再做可解释的判断。",
        "access": "私有 Skill · 公开案例",
        "input": "授权登录的店铺、目标时间区间与已有处理进度。",
        "process": "遍历询盘 → 查看会话真实顶部 → 按规则判定 → 客户去重 → 逐条保存进度 → 导出与复核。",
        "output": "新老客户识别结果、需人工判断的记录及可恢复的进度；人工修正保留修改记录。",
        "guard": "只读访问；不发消息、不分配、不打标签、不删除、不改客户资料。验证码暂停交给人，模糊情况不强判。",
        "example": "以约 200 条询盘为典型批次，中途停止后从记录的进度继续；两条并发是已有案例的默认设置。",
        "runtime": "已授权店铺会话、Node.js 与浏览器环境"
      },
      "en": {
        "name": "New / Returning Inquiry Classification",
        "subtitle": "Review the history. Then make the decision.",
        "access": "Private Skill · Public case study",
        "input": "An authorized store session, a date range and any saved progress.",
        "process": "Traverse inquiries → inspect the actual start of conversation history → classify by rules → deduplicate → checkpoint each record → export and review.",
        "output": "Customer classifications, human-review cases and resumable progress; manual corrections retain a change record.",
        "guard": "Read-only: no sending, assignment, labeling, deletion or profile edits. Pause for human CAPTCHA handling; do not force ambiguous decisions.",
        "example": "Process a typical batch of about 200 inquiries, interrupt and resume from saved progress. The documented default is two concurrent inquiries.",
        "runtime": "Authorized store session, Node.js and browser environment"
      }
    },
    {
      "id": "sales",
      "category": "automation",
      "code": "OPERATIONS / 04",
      "project": "operations",
      "zh": {
        "name": "客户登记与销售业绩归属",
        "subtitle": "把订单、客户和业务员放回同一口径。",
        "access": "私有 Skill · 公开案例",
        "input": "已付款订单的时间区间，以及已确定的新老客户和业务员归属规则。",
        "process": "采集订单与付款信息 → 批量查客户 → 回查历史订单 → 判定客户属性与归属 → 生成并校验工作簿。",
        "output": "包含订单号、业务员、金额、付款金额与时间等字段的 Excel 业绩表。",
        "guard": "核对订单数、交易金额、表头、公式和业务员排序；与人工工作簿进行差异检查。",
        "example": "对一个约 200 笔订单的典型批次，展示自动结果与人工台账之间的差异，而不是只给汇总数字。",
        "runtime": "已授权店铺会话及表格输出依赖"
      },
      "en": {
        "name": "Customer Registration & Sales Attribution",
        "subtitle": "Orders, customers and ownership on the same basis.",
        "access": "Private Skill · Public case study",
        "input": "A paid-order date range and established customer-classification and salesperson-attribution rules.",
        "process": "Collect orders and payments → look up customers in batches → inspect order history → classify and attribute → generate and validate the workbook.",
        "output": "An Excel performance workbook including order IDs, salesperson, order amount, paid amount and payment time.",
        "guard": "Check order counts, transaction amounts, headers, formulas and salesperson ordering; compare against manually prepared workbooks.",
        "example": "For a typical batch of about 200 orders, surface differences against the manual ledger rather than presenting only totals.",
        "runtime": "Authorized store session and workbook dependencies"
      }
    },
    {
      "id": "writing",
      "category": "creative",
      "code": "CREATIVE / 05",
      "project": "fiction",
      "zh": {
        "name": "Writing Serial Fiction",
        "subtitle": "一个 Skill，三种清晰分工的模式。",
        "access": "开源 Skill · 可查看源码",
        "input": "规划模式：固定事实、人物目标与结尾；正文模式：最小资料包＋执行卡；诊断模式：章节正文与必要背景。",
        "process": "chapter-planning：组织可执行场景；prose-writing：按确认的资料写正文；readonly-diagnosis：只读诊断体验，不改写文件。",
        "output": "章节规划与场景执行卡、正文草稿，或只读诊断报告；一次调用只产生当前模式的产物。",
        "guard": "保持既定事实与作者决定。独立 Skill 不会自动读取历史文件；完整工作流的轻检和条件修正不属于这三种模式。",
        "example": "从公开原创示例《雾港回声》查看资料、执行卡、草稿与检查报告；使用源码仓库中的安装和迁移说明。",
        "runtime": "完整工作区或独立 Skill；资料需明确提供"
      },
      "en": {
        "name": "Writing Serial Fiction",
        "subtitle": "One Skill. Three deliberately separate modes.",
        "access": "Open-source Skill · Inspect the source",
        "input": "Planning: fixed facts, character goals and ending. Prose: minimal packet plus execution card. Diagnosis: chapter text and necessary context.",
        "process": "chapter-planning creates executable scenes; prose-writing follows confirmed inputs; readonly-diagnosis assesses reader experience without editing files.",
        "output": "A chapter plan and execution card, a prose draft, or a read-only diagnosis—only the output of the selected mode per invocation.",
        "guard": "Preserve established facts and author decisions. The standalone Skill does not automatically read history. Full-workflow checks and conditional correction are not part of these three modes.",
        "example": "Inspect the original sample story, planning materials, scene card, draft and report in the public repository. Follow its installation and migration documentation.",
        "runtime": "Full workspace or standalone Skill with explicit inputs"
      }
    }
  ],
  "profile": {
    "name": "dnggxiao",
    "updated": "2026-09-05",
    "github": "https://github.com/dnggxiao",
    "repository": "https://github.com/dnggxiao/ai-agent-portfolio"
  }
};
