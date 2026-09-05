# dnggxiao · AI 应用与工作流工程

> **把复杂业务，做成可靠系统。**  
> 从真实业务出发，用 AI 辅助开发，把重复工作变成可执行、可校验、可交付的流程。

**[中文](README.md) · [English](README.en.md) · [Skill 能力库](skills/README.md) · [网页源码](docs/) · [发布说明](DEPLOYMENT.md)**

我关注 **AI 应用、Agent 工作流与企业自动化**。我的工作不止是写提示词：从需求理解、业务规则、输入输出契约，到异常处理、测试验收和最终交付，都需要清晰的工程判断。Codex 协助实现；我对规则、边界和结果负责。

## 一分钟了解我的工作

| 场景 | 已有项目记录 | 指标口径 |
| --- | --- | --- |
| 财务核算 | 自动化承接原本约 **15 个工作日/月**的人工流程 | 原流程工作量，不等于经审计的净节省时间 |
| 运营自动化 | 典型批次约 **200 条询盘或 200 笔订单** | 批次规模，不是每日吞吐承诺 |
| B2B 研究 | 完成 **60 家**符合既定条件的目标企业研究 | 研究交付数，不是成交数 |
| 运营效率 | 两项运营工具合计约节省 **2 个工作日/月** | 项目经验估计，非第三方审计 |

指标来自下列项目记录，按各自业务范围理解，不进行跨项目累加或收益外推。

## 精选项目

### 01. 多平台 SKU 利润与对账系统

**企业业务中使用 · 项目负责人**  
把平台结算、SKU 映射、成本与费用归集，组织成可校验、可追溯的月度财务工作流。

**工程亮点:** 缺失成本、未知费用或 SKU 未匹配时显式列出异常；保留 DRAFT，完成对账与校验后才进入 FINAL。宁可明确缺项，也不补造财务数据。

[查看项目原始记录](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/sku-profit-reconciliation/README.md)

### 02. B2B 企业与商务联系人研究

**外贸团队实际使用 · 独立开发**  
把零散公开资料转成可查证的企业、业务单元、采购角色与商务联系信息。

**工程亮点:** 联系方式必须逐字出现在核查过的来源中；推断角色不等于编造邮箱。找不到就返回明确缺失，第三方来源保留标识，不自动发送外联消息。

[查看项目原始记录](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/b2b-contact-research-agent/README.md)

### 03. Alibaba.com 运营自动化组合

**运营团队实际使用 · 独立开发**  
两项独立 Skill，分别处理询盘新客识别、客户登记与销售业绩归属。

**工程亮点:** 询盘流程只读，不发消息、不修改客户信息；验证码交由人工处理，不绕过验证。模糊判定进入复核，修正留痕。订单表校验数量、金额、表头、公式和排序。

[查看项目原始记录](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md)

### 04. 四级包装码关系管理系统

**已交付企业 · 独立开发**  
面向非技术用户的 Windows 本地应用：查询、导入、导出、回滚与备份集中在一个工作流。

**工程亮点:** 把数据持久化、误导入恢复和非技术用户的启动方式纳入交付，而不是只完成一个查询页面。

[查看项目原始记录](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/four-level-code-system/README.md)

### 05. 长篇连载小说创作工作流

**公开源码与示例 · 工作流设计与维护**  
把创作拆成规划、确认、正文、独立检查与状态更新，保持作者对剧情和人物的控制。

**工程亮点:** 一次调用只执行一种模式；先确认再写作，轻检通过后才更新正式正文与连续状态。独立 Skill 不会自动读取历史章节，也不是一键生成整本书。

[查看项目原始记录](https://github.com/dnggxiao/serial-fiction-workflow)

### 06. 桌面智能机器人

**进行中的学术项目 · 两人团队负责人**  
将控制、动作、感知与语音交互模块整合到桌面设备，并逐模块定位问题。

**工程亮点:** 对舵机抖动检查 PWM 参数与控制逻辑；对语音识别不稳定排查 ESP32 配置。保留问题定位路径，而不只描述最后修好了。

[查看项目原始记录](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/desktop-intelligent-robot/README.md)

## 五项 Skill：有输入、有规则、有交付

| Skill | 用途 | 公开范围 |
| --- | --- | --- |
| SKU 利润核算与对账 | 成本费用归集、利润核算、异常检查与对账 | 私有实现，公开案例 |
| B2B 企业与联系人研究 | 目标发现、企业深挖、名单补全与来源核查 | 私有 Skill，公开方法 |
| 询盘新老客户识别 | 回看完整历史、规则判定、去重与断点恢复 | 私有 Skill，公开案例 |
| 客户登记与销售业绩归属 | 已付款订单整理、归属判定与 Excel 校验 | 私有 Skill，公开案例 |
| Writing Serial Fiction | 章节规划、正文写作、只读诊断三种模式 | 公开源码与原创示例 |

**[阅读每项 Skill 的输入、输出、执行流程、边界和展示方式 →](skills/README.md)**

只统计已有资料支持的具体 Skill；四级包装码软件和机器人不混算。Writing Serial Fiction 的正式调用名称和安装方法以其[源仓库](https://github.com/dnggxiao/serial-fiction-workflow)为准。已安装或参考的第三方工具不会被当作我的原创项目。

## 我如何构建

**理解业务 → 定义规则与验收 → AI 辅助实现 → 边界测试与差异检查 → 交付 → 使用反馈与迭代**

- 不猜测缺失数据：显式展示未知成本、未匹配 SKU 和未核实联系方式。
- 不让模糊结果直接交付：使用 DRAFT / FINAL、人工确认和只读诊断等边界。
- 不把“跑通一次”当成完成：关注状态保存、中断恢复、导入回滚、备份和验收。

## 技术实践

| 方向 | 在项目中的使用 |
| --- | --- |
| AI 协作 | ChatGPT、Codex、AGENTS.md、可复用 Skills |
| 数据与软件 | Python、openpyxl、Django、SQLite、PyInstaller |
| 浏览器自动化 | Node.js、playwright-core、Chrome、CDP |
| 版本与交付 | Git、GitHub、分支合并、测试与文档 |
| 嵌入式基础 | STM32、ESP32、Keil5、PWM、舵机与传感器；课程及项目范围 |

## 双语网页

`docs/index.html` 为中文入口，`docs/index.en.html` 为英文入口。两版都包含完整案例、Skill 详情、项目筛选、Skill 搜索和校验状态交互示意。网页不依赖外部字体、框架、分析脚本或 API 密钥。

本地预览：

```bash
python -m http.server 8000 --directory docs
```

浏览器打开 `http://localhost:8000`。发布到 GitHub Pages 的设置步骤见 [DEPLOYMENT.md](DEPLOYMENT.md)。**文件已准备好不等于托管服务已经启用**，以仓库 Pages 设置和实际构建状态为准。

## 公开边界与联系

本仓库是公开作品集，不是企业生产代码和数据的备份。不会发布客户名单、真实订单、账号凭据、Cookie、内部结算表或企业专有规则。互动演示使用合成状态，不能当作生产财务系统。详见 [SECURITY_AND_PRIVACY.md](SECURITY_AND_PRIVACY.md)。

**交流方向：** AI 应用工程 · Agent 工作流 · 企业自动化。  
**[GitHub 主页：dnggxiao](https://github.com/dnggxiao)**

---

页面与介绍更新于 2026 年 9 月。项目事实沿用公开记录；未将进行中、已交付和实际使用混为同一状态。
