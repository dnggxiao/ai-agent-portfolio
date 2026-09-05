# 面试讲解提纲 / Interview walkthrough

这是一份准备材料，不虚构工作年限、认证、客户规模或生产指标。
This is preparation material, not a claim of employment tenure, certifications, customer scale or production benchmarks.

## 30 秒开场 / 30-second introduction

我的方向是业务自动化和企业内部工具。我从财务、电商运营等实际流程入手，先明确输入输出、业务规则和异常处理，再使用开发工具实现。最近的核心项目覆盖 WB、Amazon、美客多和 Walmart，统一了人工补充文件与最终财务输出，让重复报表工作按固定流程执行。

I focus on business automation and internal tools. I start with operational workflows, define input/output contracts, business rules and exception handling, and then implement the process with development tools. My flagship reporting project covers WB, Amazon, Mercado Libre and Walmart, with shared manual inputs and consistent financial outputs.

## 3 分钟核心案例 / Three-minute case

**问题 / Problem** — 四个平台来源不同，人工需要反复整理、补充成本并核对差异。Different marketplace sources required repeated preparation, cost input and discrepancy checking.

**关键选择 / Decision** — 不是强行把原始导出改成一个样子，而是保留平台处理差异，统一人工接口和交付格式。Preserve platform-specific processing while standardizing the human-input and reporting contracts.

**我的贡献 / Ownership** — 讲清自己负责的规则拆解、输入输出结构、异常策略、验收与迭代；Codex 用于辅助实现。Explain your actual ownership of rules, data contracts, exceptions, acceptance and iteration; Codex assists implementation.

**演示 / Demonstration** — 打开网页报表演示，展示缺成本时不填零，解决两项异常后才进入 FINAL。必须说明这是合成示例，不是公司生产账本。Show that missing cost stays null and FINAL requires both checks. State that this is synthetic, not a company ledger.

**结果 / Outcome** — 原工作量约 15 工作日/月是经验估计。没有计时记录时，不说“节省了精确 15 天”或“提升多少倍”。The former ~15-day monthly workload is an estimate; do not present it as a measured exact saving or multiplier.

## 常见追问 / Likely questions

### 代码是 AI 写的，你做了什么？ / What did you do versus AI?

用一个真实业务决定回答：为什么统一这个字段、异常为何必须停留在草稿、验收用什么对照。不要只回答“我会写提示词”，也不要声称每行代码都手写。
Use a concrete business decision: a field contract, draft-state rule or acceptance comparison. Do not reduce your contribution to prompting or claim every line was handwritten.

### 为什么不能直接用 Excel？ / Why not just Excel?

不是否定 Excel，而是将反复执行、跨平台易变的处理统一到可重复流程里，让输出仍能服务于财务复核。
The point is not to reject Excel. It is to standardize repeated cross-platform processing while preserving useful financial review outputs.

### 缺资料或运行中断怎么办？ / Missing data or interrupted execution?

只讲该项目已经实现并能解释的机制。财务强调缺项显式化和复核；运营项目的逐条进度保存与恢复按项目记录说明，不把一个项目的能力套到所有项目。
Describe only implemented mechanisms you can explain. Finance emphasizes visible exceptions and review; operations checkpoint/resume follows its own project record. Do not generalize one project's feature to all projects.

### 能看实际系统吗？ / Can we see the real system?

公开展示可先使用这个合成演示和开源小说工作流。任何企业源文件或内部系统展示，需要先确认披露许可并脱敏；不能把作品集演示说成真实系统录像。
Use the synthetic example and public writing workflow first. Obtain permission and sanitize any enterprise demonstration. Never represent a portfolio mockup as a recording of the actual system.

## 作品选择 / Which case to lead with

业务自动化与数据处理岗位主讲财务；浏览器自动化岗位主讲 Alibaba；内部工具岗位补充包装码应用；AI 工作流岗位补充小说工作流的状态隔离与确认门。机器人作为基础实践，不抢主案例。
Lead with reporting for automation/data roles, Alibaba for browser automation, packaging codes for internal tools, and the fiction workflow's state boundaries for AI workflow roles. Keep the robot as foundational practice rather than the main case.

[返回作品集 / Back](README.md)
