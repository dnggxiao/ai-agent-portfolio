# dnggxiao · Business Automation & Workflow Systems

> **Complex operations. Reliable systems.**

[中文](README.md) · [English](README.en.md) · [Skill library](skills/README.en.md) · [Evidence & scope](EVIDENCE.md)

I turn data, business rules and repetitive operations into practical workflows for finance, e-commerce and internal tools. Development tools accelerate implementation; business requirements define what ships.

**Role interests:** Business automation · Applied AI · Internal tools

## Start with the flagship case

### Four-Platform Financial Reporting System

**WB / Wildberries · Amazon · Mercado Libre · Walmart**

Bring WB, Amazon, Mercado Libre and Walmart source files into a local reporting workflow with a shared manual-adjustment standard and a consistent output contract.

```text
Platform source files + shared manual inputs / adjustments
                         |
                Map - Calculate - Reconcile
                         |
                Standard financial report
```

**My ownership:** Owned workflow analysis, four-platform input interfaces, shared manual-input standard, report structure, business rules, exception boundaries, acceptance and iteration. Codex assisted implementation, refactoring and debugging.

**Outcome scope:** Organized four reporting paths into an automated workflow under a common standard. Roughly 15 workdays is the project-reported former monthly workload; no month-by-month timing study is provided, so it is not a precise net-saving claim.

[Read the full case](case-studies/finance.en.md)

## Other selected work

### 02. Alibaba.com Operations Suite

**Used by the operations team · Independent developer**

Two distinct Skills for inquiry classification, customer registration and sales-performance attribution.

**Engineering decision:** Inquiry processing is read-only: no messages or customer-profile edits. CAPTCHA pauses for human action rather than bypassing verification. Ambiguous cases are reviewed and corrections recorded. Validate order counts, amounts, headers, formulas and sorting.

[Case and personal contribution](case-studies/operations.en.md)

### 03. Four-Level Packaging Code System

**Delivered to the enterprise · Independent developer**

A local Windows application combining lookup, imports, exports, rollback and backup for non-technical users.

**Engineering decision:** Persistent data, recovery from mistaken imports and practical startup for non-technical users are part of delivery—not extras after a lookup screen.

[Case and personal contribution](case-studies/codes.en.md)

### 04. B2B Company & Contact Research

**Used by the trade team · Independent developer**

Convert fragmented public information into verifiable companies, business units, purchasing roles and business contacts.

**Engineering decision:** Contact details must appear verbatim in a checked source. Inferring a relevant role never licenses inventing an email. Explicitly mark missing findings and third-party sources. Do not automatically send outreach.

[Case and personal contribution](case-studies/research.en.md)

### 05. Serial Fiction Workflow

**Public source and example · Workflow design & maintenance**

Separate planning, approval, prose, independent checks and state updates while preserving authorial control.

**Engineering decision:** One mode per invocation. Approve before writing; update canonical prose and continuity only after checks pass. The standalone Skill does not automatically read earlier chapters and is not a one-click book generator.

[Case and personal contribution](case-studies/fiction.en.md)

### 06. Desktop Intelligent Robot

**Ongoing academic project · Lead of a two-person team**

Integrate control, motion, sensing and voice interaction in a desktop device, with module-level fault isolation.

**Engineering decision:** Investigate servo jitter through PWM parameters and control logic, and recognition instability through ESP32 configuration. Preserve the diagnosis path, not merely the final fix.

[Case and personal contribution](case-studies/robot.en.md)

## Five reusable Skills

| Skill | Purpose | Availability |
| --- | --- | --- |
| Four-Platform Reporting & Reconciliation | One manual-input standard. A consistent deliverable. | Private implementation · Public case study |
| B2B Company & Contact Research | Not more guessed emails. A stronger evidence trail. | Private Skill · Public methodology |
| New / Returning Inquiry Classification | Review the history. Then make the decision. | Private Skill · Public case study |
| Customer Registration & Sales Attribution | Orders, customers and ownership on the same basis. | Private Skill · Public case study |
| Writing Serial Fiction | One Skill. Three deliberately separate modes. | Open-source Skill · Inspect the source |

[Read runtime requirements, inputs, outputs and boundaries](skills/README.en.md)

## Approach and project-used tools

Understand the work → define the input/output contract → implement and validate → deliver and iterate. Codex assists implementation; I own rules, exception decisions and acceptance.

**Python · openpyxl · Django · SQLite · Node.js · Playwright · Chrome CDP · Git / GitHub · PyInstaller**

STM32, ESP32 and PWM reflect coursework and academic project foundations, not advanced embedded credentials.

## Independent technical support

Assist individuals with normal Google account registration, basic security and recovery setup, and day-to-day use. Support dedicated commercial network-node configuration and connection troubleshooting for cross-border business users. Independent assistance; no official Google authorization or certification is implied.

## View and run

Website source is in `docs/`, with `index.html` in Chinese and `index.en.html` in English. The standalone demonstration uses synthetic data and is not production-system verification.

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. See [DEPLOYMENT.md](DEPLOYMENT.md) for publishing. Prepared source files do not mean Pages hosting is enabled.

[Interview walkthrough](INTERVIEW_GUIDE.md) · [Verification record](verification/REPORT.md) · [GitHub](https://github.com/dnggxiao)

Public material excludes customer lists, real settlements, cost data, credentials and proprietary business rules. Project status and outcomes are project-reported, not independently audited.
