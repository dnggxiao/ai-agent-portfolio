# dnggxiao · Business Automation & Workflow Systems

> **I turn real operational problems into systems that work.**  
> Business Automation · Workflow Systems · AI-Assisted Development

**[中文](README.md) · [English](README.en.md) · [Skill library](skills/README.en.md) · [Bilingual portfolio](docs/) · [Deployment](DEPLOYMENT.md)**

This is my recruiting portfolio. I focus less on how many AI tools I can name and more on whether I can understand a real workflow, turn it into explicit inputs, rules, exceptions and acceptance criteria, and deliver a repeatable system with checkable outputs.

Codex and ChatGPT accelerate implementation. **I remain responsible for business rules, system boundaries, acceptance and outcomes.**

## 30-second profile

| Capability | Evidence in this portfolio |
| --- | --- |
| Business process design | Turn manual work into input contracts, rules, exceptions, review and delivery |
| Finance automation | Unified reporting workflow for WB, Amazon, Mercado Libre and Walmart |
| Operations automation | Alibaba.com inquiry classification, customer registration and sales attribution |
| Data & local software | Excel automation, Django/SQLite applications, import/export and recovery |
| AI-assisted development | Codex/ChatGPT for implementation, refactoring, debugging and reusable workflows |

**The capability I want this portfolio to demonstrate: give me a real operational problem and I can structure it, build it, verify the result and iterate.**

---

# Featured Case Study

## 01. Four-Platform Financial Reporting & Reconciliation System

**Used in a real enterprise workflow · Project Lead / Workflow Designer**  
**WB (Wildberries) · Amazon · Mercado Libre · Walmart**

Four marketplaces expose different source files, fee fields and settlement logic. I reorganized the monthly finance process around a common operating model:

```text
Four marketplace data sources
            ↓
   Platform-specific parsing
            ↓
Shared manual input / adjustment standard
            ↓
Validation → mapping → calculation → allocation
            ↓
 Reconciliation & exception gate
            ↓
 Standardized financial reporting output
```

### Why this project matters

The difficult part was not “asking AI to calculate spreadsheets.” It was standardizing the business first.

- each marketplace can retain its real source-data structure;
- human-supplied costs, mappings and adjustments follow one explicit input standard;
- calculations, attribution and reconciliation follow defined rules;
- missing costs, unknown fees and unmatched SKUs remain visible instead of being silently hidden;
- downstream review receives a consistent reporting standard rather than four unrelated workbook conventions.

A **DRAFT → FINAL** quality gate prevents unresolved exceptions from looking like completed finance work.

The former end-to-end process involved roughly **15 finance workdays per month**. This describes the original workload addressed by the system, not an independently audited net saving or an invented productivity percentage.

### What I own

**My responsibility:** workflow discovery, business-rule decomposition, platform input design, the shared manual-input standard, standardized output, exception policy, acceptance criteria, edge-case testing, workbook validation and feedback-driven iteration.

**AI / Codex assists with:** implementation, refactoring, debugging and development speed. Generated code is not the acceptance standard; business outcomes are.

**[Read the full case study →](projects/sku-profit-reconciliation/README.md)**

---

## Other selected work

### 02. B2B Company & Contact Research
**Used by a trade team · Independent developer**  
Turn fragmented public information into verifiable companies, business units, purchasing roles and business contacts. Contact details require traceable sources; missing information remains missing rather than becoming an invented email.

**Scope:** 60 companies meeting defined prospect criteria researched; research coverage is not represented as converted sales.  
[Read the case](projects/b2b-contact-research-agent/README.md)

### 03. Alibaba.com Operations Suite
**Used by an operations team · Independent developer**  
Two workflows for inquiry/customer classification and customer registration with sales attribution. Includes long-batch checkpointing, history review, deduplication, human review for ambiguity and workbook validation.

**Scope:** typical batches of about 200 inquiries or 200 orders; both tools together save approximately two operations workdays per month based on project estimates.  
[Read the case](projects/alibaba-operations-agents/README.md)

### 04. Four-Level Packaging Code System
**Delivered to an enterprise · Independent developer**  
A local Windows application for Pallet → Carton → B4 → Label relationships, with bidirectional lookup, batch imports, exports, import history, rollback and backup. Recovery and non-technical-user delivery were treated as product requirements, not afterthoughts.

[Read the case](projects/four-level-code-system/README.md)

### 05. Serial Fiction Workflow
**Open source · Workflow design & maintenance**  
Separate planning, author approval, prose, independent diagnosis and state updates so AI can participate in execution without silently taking control of story decisions.

[Open the repository](https://github.com/dnggxiao/serial-fiction-workflow)

### 06. Desktop Intelligent Robot
**Ongoing academic project · Lead of a two-person team**  
Integrate control, motion, sensing and voice modules while diagnosing issues through PWM/control logic and ESP32 configuration. Embedded experience is presented within its actual coursework/project scope.

[Read the case](projects/desktop-intelligent-robot/README.md)

---

## Skills · Experience made repeatable

| Skill | Problem addressed | Reliability design |
| --- | --- | --- |
| Finance Reporting & Reconciliation | Marketplace data, costs, fees, profit and standardized reports | Input validation, visible exceptions, DRAFT → FINAL |
| B2B Company & Contact Research | Prospecting, deep dives and enrichment | Source verification; no invented contacts |
| Inquiry Classification | Full-history review, rules and deduplication | Read-only operation, resume, human review |
| Customer Registration & Sales Attribution | Paid orders, ownership and Excel delivery | Count, amount, formula and sorting checks |
| Writing Serial Fiction | Chapter planning, prose and read-only diagnosis | Mode isolation, author approval and state control |

**[Read every Skill's inputs, outputs, execution and boundaries →](skills/README.en.md)**

A Skill here is not a prompt collection. It is a reusable workflow for a specific task with an explicit contract and failure behavior. Enterprise implementations remain private; the portfolio exposes sanitized designs and public examples.

## How I work

**Understand the operation → Standardize inputs → Specify business rules → Define exceptions → AI-assisted implementation → Edge-case tests → Manual comparison / reconciliation → Standard delivery → Feedback & iteration**

Principles I repeatedly apply:

- **Never guess required data.** Missing costs, unknown fields and unverified contacts remain visible.
- **Design for exceptions.** Automate the normal path; route ambiguity through explicit rules or human review.
- **Make results inspectable.** Reports, sources, formulas, amounts and states should be traceable.
- **Make work recoverable.** Long batches and mistaken imports should not require restarting everything.
- **Standardize interfaces.** Durable automation starts with stable input and output contracts.
- **Treat AI as a development tool.** Model output is never proof that a business result is correct.

## Technical practice

| Area | Actual project use |
| --- | --- |
| Data & automation | Python · openpyxl · Excel workflows · reconciliation |
| Web / local software | Django · SQLite · PyInstaller |
| Browser automation | Node.js · playwright-core · Chrome CDP |
| AI-assisted engineering | Codex · ChatGPT · AGENTS.md · reusable Skills |
| Engineering delivery | Git · GitHub · testing · documentation · I/O contracts · acceptance |
| Embedded foundations | STM32 · ESP32 · Keil5 · PWM · servos · sensors |

## Independent technical support

Alongside software and automation projects, I have provided individual users with practical support for cross-border digital tools, including:

- guidance for personal Google Account setup, baseline security configuration, recovery information and routine account maintenance;
- dedicated commercial network-node configuration, connection-environment setup and basic troubleshooting for cross-border business use cases;
- customized operating instructions and follow-up support based on the user's environment.

This section demonstrates **user communication, environment configuration, troubleshooting and technical support**. It is not counted as a software project and does not imply official Google authorization, partnership or endorsement.

## Roles I am interested in

**Business Automation · AI Application Engineering · Workflow / Agent Systems · Internal Tools · Cross-border E-commerce Technology & Operations Efficiency**

I do not define myself only by one programming language. I am most useful when I can own a complete problem: understand the work, define the rules, use modern development tools to implement it, and remain accountable for the result.

## Bilingual portfolio site

`docs/index.html` is the Chinese entry and `docs/index.en.html` is the English entry. The website is designed for fast recruiter scanning; the README and project directories provide deeper evidence.

## Public boundary

This is a recruiting portfolio, not a backup of enterprise production code or business data. It excludes customer lists, real orders, credentials, cookies, internal settlement files, proprietary company rules and other sensitive material. Metrics retain their stated scope and are not presented as audited results when they are estimates.

**GitHub:** [dnggxiao](https://github.com/dnggxiao)

---

*Portfolio updated September 2026 · Built around real problems, explicit rules and checkable outcomes.*
