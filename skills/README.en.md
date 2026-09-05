# Skill Library

[中文](README.md) · [English](README.en.md)

Five documented, reusable task workflows. Enterprise implementations remain private; the writing Skill has public source. These are workflow descriptions, not installable production packages.

The offline packaging-code application and desktop robot are separate engineering projects, not additional Skills.

## FINANCE / 01 — SKU Profit & Reconciliation

> From a calculated workbook to a defensible result.

**Private implementation · Public case study**

### Inputs

Settlement files, SKU mappings, cost tables and required manual-adjustment inputs.

### Execution

Recognize orders/SKUs → attribute sales, refunds, costs and fees → allocate shared costs → aggregate → reconcile and check exceptions.

### Outputs

SKU-, product- and period-level results, with explicit exception and validation states.

### Reliability & boundaries

Do not guess costs or silently fill gaps. Unresolved mappings, fees or reconciliation errors keep the output in DRAFT.

### Demonstration

Use sanitized files for one period. Confirm that unknown SKUs surface and unresolved checks prevent FINAL.

[Project source](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/sku-profit-reconciliation/README.md)

## RESEARCH / 02 — B2B Company & Contact Research

> Not more guessed emails. A stronger evidence trail.

**Private Skill · Public methodology**

### Inputs

Product, industry and target market; a single company; or an existing company list.

### Execution

Prospecting / deep dive / enrichment → official-source priority → role and contact verification → deduplication and structured output.

### Outputs

Sheets including Companies, Contacts, Business Units, Official Accounts and Sources.

### Reliability & boundaries

Trace contact details to source text; mark unverified findings as missing. Exclude private family information and leaked data. No automatic outreach.

### Demonstration

Research one company, explain the evidence for purchasing-related roles and retain sources for public business contacts.

[Project source](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/b2b-contact-research-agent/README.md)

## OPERATIONS / 03 — New / Returning Inquiry Classification

> Review the history. Then make the decision.

**Private Skill · Public case study**

### Inputs

An authorized store session, a date range and any saved progress.

### Execution

Traverse inquiries → inspect the actual start of conversation history → classify by rules → deduplicate → checkpoint each record → export and review.

### Outputs

Customer classifications, human-review cases and resumable progress; manual corrections retain a change record.

### Reliability & boundaries

Read-only: no sending, assignment, labeling, deletion or profile edits. Pause for human CAPTCHA handling; do not force ambiguous decisions.

### Demonstration

Process a typical batch of about 200 inquiries, interrupt and resume from saved progress. The documented default is two concurrent inquiries.

[Project source](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md)

## OPERATIONS / 04 — Customer Registration & Sales Attribution

> Orders, customers and ownership on the same basis.

**Private Skill · Public case study**

### Inputs

A paid-order date range and established customer-classification and salesperson-attribution rules.

### Execution

Collect orders and payments → look up customers in batches → inspect order history → classify and attribute → generate and validate the workbook.

### Outputs

An Excel performance workbook including order IDs, salesperson, order amount, paid amount and payment time.

### Reliability & boundaries

Check order counts, transaction amounts, headers, formulas and salesperson ordering; compare against manually prepared workbooks.

### Demonstration

For a typical batch of about 200 orders, surface differences against the manual ledger rather than presenting only totals.

[Project source](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md)

## CREATIVE / 05 — Writing Serial Fiction

> One Skill. Three deliberately separate modes.

**Open-source Skill · Inspect the source**

### Inputs

Planning: fixed facts, character goals and ending. Prose: minimal packet plus execution card. Diagnosis: chapter text and necessary context.

### Execution

chapter-planning creates executable scenes; prose-writing follows confirmed inputs; readonly-diagnosis assesses reader experience without editing files.

### Outputs

A chapter plan and execution card, a prose draft, or a read-only diagnosis—only the output of the selected mode per invocation.

### Reliability & boundaries

Preserve established facts and author decisions. The standalone Skill does not automatically read history. Full-workflow checks and conditional correction are not part of these three modes.

### Demonstration

Inspect the original sample story, planning materials, scene card, draft and report in the public repository. Follow its installation and migration documentation.

[Project source](https://github.com/dnggxiao/serial-fiction-workflow)

---

Published descriptions do not imply that private workflows run unchanged in every ChatGPT or Codex environment. Browser access, local dependencies, credentials and input contracts remain implementation-specific.

[Back to the portfolio](../README.en.md)
