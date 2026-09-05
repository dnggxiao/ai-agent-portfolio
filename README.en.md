# dnggxiao · AI Applications & Workflow Engineering

> **Complex work. Reliable systems.**  
> AI-assisted development that turns real operational tasks into executable, verifiable workflows.

**[中文](README.md) · [English](README.en.md) · [Skill library](skills/README.en.md) · [Website source](docs/) · [Deployment](DEPLOYMENT.md)**

I focus on **AI applications, agent workflows and business automation**. My work goes beyond prompts: requirements, business rules, input/output contracts, exception handling, acceptance and delivery. Codex helps with implementation; I remain responsible for the rules, boundaries and outcomes.

## At a glance

| Area | Project-reported result | Scope |
| --- | --- | --- |
| Finance | Automation of a workflow formerly requiring **~15 workdays/month** | Former workload, not audited net time saved |
| Operations | Typical batches of **~200 inquiries or ~200 orders** | Batch size, not a daily-throughput guarantee |
| B2B research | **60 qualified target companies** researched | Research delivery, not sales conversion |
| Operations efficiency | **~2 workdays/month** saved by two tools together | Project estimate, not an independent audit |

Metrics come from the project records below. They describe different scopes and should not be added together or extrapolated into revenue.

## Selected projects

### 01. SKU Profit & Reconciliation System

**Used in enterprise workflows · Project lead**  
Turn settlement reports, SKU mappings, costs and fee allocation into a monthly workflow that can be checked and traced.

**Engineering decision:** Missing costs, unknown fees and unmatched SKUs remain visible. Keep the output in DRAFT until reconciliation and validation pass. Never invent financial inputs to complete a report.

[Read the project record](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/sku-profit-reconciliation/README.md)

### 02. B2B Company & Contact Research

**Used by the trade team · Independent developer**  
Convert fragmented public information into verifiable companies, business units, purchasing roles and business contacts.

**Engineering decision:** Contact details must appear verbatim in a checked source. Inferring a relevant role never licenses inventing an email. Explicitly mark missing findings and third-party sources. Do not automatically send outreach.

[Read the project record](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/b2b-contact-research-agent/README.md)

### 03. Alibaba.com Operations Suite

**Used by the operations team · Independent developer**  
Two distinct Skills for inquiry classification, customer registration and sales-performance attribution.

**Engineering decision:** Inquiry processing is read-only: no messages or customer-profile edits. CAPTCHA pauses for human action rather than bypassing verification. Ambiguous cases are reviewed and corrections recorded. Validate order counts, amounts, headers, formulas and sorting.

[Read the project record](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md)

### 04. Four-Level Packaging Code System

**Delivered to the enterprise · Independent developer**  
A local Windows application combining lookup, imports, exports, rollback and backup for non-technical users.

**Engineering decision:** Persistent data, recovery from mistaken imports and practical startup for non-technical users are part of delivery—not extras after a lookup screen.

[Read the project record](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/four-level-code-system/README.md)

### 05. Serial Fiction Workflow

**Public source and example · Workflow design & maintenance**  
Separate planning, approval, prose, independent checks and state updates while preserving authorial control.

**Engineering decision:** One mode per invocation. Approve before writing; update canonical prose and continuity only after checks pass. The standalone Skill does not automatically read earlier chapters and is not a one-click book generator.

[Read the project record](https://github.com/dnggxiao/serial-fiction-workflow)

### 06. Desktop Intelligent Robot

**Ongoing academic project · Lead of a two-person team**  
Integrate control, motion, sensing and voice interaction in a desktop device, with module-level fault isolation.

**Engineering decision:** Investigate servo jitter through PWM parameters and control logic, and recognition instability through ESP32 configuration. Preserve the diagnosis path, not merely the final fix.

[Read the project record](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/desktop-intelligent-robot/README.md)

## Five Skills with explicit inputs and boundaries

| Skill | Purpose | Availability |
| --- | --- | --- |
| SKU Profit & Reconciliation | Cost/fee attribution, profit analysis, checks and reconciliation | Private implementation; public case |
| B2B Company & Contact Research | Prospecting, deep dives, enrichment and source verification | Private Skill; public methodology |
| Inquiry Classification | Full-history review, deterministic classification, deduplication and resume | Private Skill; public case |
| Customer Registration & Sales Attribution | Paid orders, ownership rules and Excel validation | Private Skill; public case |
| Writing Serial Fiction | Chapter planning, prose writing and read-only diagnosis | Public source and original example |

**[Read every Skill's inputs, outputs, execution, boundaries and demonstration approach →](skills/README.en.md)**

Only specifically documented Skills are counted. The packaging-code application and robot are separate projects. For Writing Serial Fiction's current invocation and installation, see the [source repository](https://github.com/dnggxiao/serial-fiction-workflow). Third-party tools I use or reference are not represented as original projects.

## How I build

**Understand the business → Define rules and acceptance → AI-assisted implementation → Edge cases and discrepancy checks → Delivery → Feedback and iteration**

- Do not invent missing inputs: surface unknown costs, unmatched SKUs and unverified contacts.
- Do not let ambiguity masquerade as completion: use DRAFT / FINAL states, approval gates and read-only diagnosis.
- Do not treat one successful run as delivery: consider checkpoints, recovery, rollback, backups and acceptance.

## Technical practice

| Area | Project use |
| --- | --- |
| AI collaboration | ChatGPT, Codex, AGENTS.md, reusable Skills |
| Data and software | Python, openpyxl, Django, SQLite, PyInstaller |
| Browser automation | Node.js, playwright-core, Chrome, CDP |
| Versioning and delivery | Git, GitHub, branches, testing and documentation |
| Embedded foundations | STM32, ESP32, Keil5, PWM, servos and sensors within coursework/project scope |

## Bilingual website

`docs/index.html` is the Chinese entry; `docs/index.en.html` is the English entry. Both provide full cases, Skill details, project filtering, Skill search and an illustrative validation-gate interaction. There are no external fonts, frameworks, analytics scripts or API keys.

Preview locally:

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages configuration. **Having the files does not mean hosting has been enabled**; check repository Pages settings and build status.

## Public scope and contact

This is a recruiting and engineering portfolio, not a backup of enterprise production code or data. It excludes customer lists, actual orders, credentials, cookies, internal settlement reports and proprietary rules. The interactive example uses synthetic states and is not a production finance system. See [SECURITY_AND_PRIVACY.md](SECURITY_AND_PRIVACY.md).

**Interests:** AI application engineering · Agent workflows · Enterprise automation.  
**[GitHub: dnggxiao](https://github.com/dnggxiao)**

---

Presentation updated September 2026. Project facts follow the public records; ongoing, delivered and actively used are distinct states.
