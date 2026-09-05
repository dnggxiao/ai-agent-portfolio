# Skill Library

[中文](README.md) · [English](README.en.md)

Five task-specific workflows. Enterprise implementations remain private; the writing workflow has public source. This is not a production installation package or an authorship claim over third-party tools.

## FINANCE / 01 — Four-Platform Reporting & Reconciliation

> One manual-input standard. A consistent deliverable.

**Private implementation · Public case study**

### Runtime

Local Codex workspace and project dependencies

### Inputs

Source exports from WB, Amazon, Mercado Libre or Walmart, plus manual inputs/adjustments following the shared standard. Exact fields, dependencies and paths belong to the private project.

### Execution

Check sources and required inputs → platform interpretation and SKU mapping → rule-based calculation/allocation → reconciliation and exception checks → standardized output.

### Outputs

Reports following a common output standard, with exceptions and validation state. Financial values are not freely invented by a language model.

### Reliability boundary

Do not guess missing costs, unknown fees or unmatched SKUs. People still prepare inputs and review exceptions; release conditions follow the private implementation.

### Demonstration

The public portfolio demonstration lets a reviewer resolve synthetic missing-cost and settlement exceptions. It illustrates the design, not private algorithms or production templates.

[Related case](../case-studies/finance.en.md)

## RESEARCH / 02 — B2B Company & Contact Research

> Not more guessed emails. A stronger evidence trail.

**Private Skill · Public methodology**

### Runtime

An authorized environment with public-web research

### Inputs

Product, industry and target market; a single company; or an existing company list.

### Execution

Prospecting / deep dive / enrichment → official-source priority → role and contact verification → deduplication and structured output.

### Outputs

Sheets including Companies, Contacts, Business Units, Official Accounts and Sources.

### Reliability boundary

Trace contact details to source text; mark unverified findings as missing. Exclude private family information and leaked data. No automatic outreach.

### Demonstration

Research one company, explain the evidence for purchasing-related roles and retain sources for public business contacts.

[Related case](../case-studies/research.en.md)

## OPERATIONS / 03 — New / Returning Inquiry Classification

> Review the history. Then make the decision.

**Private Skill · Public case study**

### Runtime

Authorized store session, Node.js and browser environment

### Inputs

An authorized store session, a date range and any saved progress.

### Execution

Traverse inquiries → inspect the actual start of conversation history → classify by rules → deduplicate → checkpoint each record → export and review.

### Outputs

Customer classifications, human-review cases and resumable progress; manual corrections retain a change record.

### Reliability boundary

Read-only: no sending, assignment, labeling, deletion or profile edits. Pause for human CAPTCHA handling; do not force ambiguous decisions.

### Demonstration

Process a typical batch of about 200 inquiries, interrupt and resume from saved progress. The documented default is two concurrent inquiries.

[Related case](../case-studies/operations.en.md)

## OPERATIONS / 04 — Customer Registration & Sales Attribution

> Orders, customers and ownership on the same basis.

**Private Skill · Public case study**

### Runtime

Authorized store session and workbook dependencies

### Inputs

A paid-order date range and established customer-classification and salesperson-attribution rules.

### Execution

Collect orders and payments → look up customers in batches → inspect order history → classify and attribute → generate and validate the workbook.

### Outputs

An Excel performance workbook including order IDs, salesperson, order amount, paid amount and payment time.

### Reliability boundary

Check order counts, transaction amounts, headers, formulas and salesperson ordering; compare against manually prepared workbooks.

### Demonstration

For a typical batch of about 200 orders, surface differences against the manual ledger rather than presenting only totals.

[Related case](../case-studies/operations.en.md)

## CREATIVE / 05 — Writing Serial Fiction

> One Skill. Three deliberately separate modes.

**Open-source Skill · Inspect the source**

### Runtime

Full workspace or standalone Skill with explicit inputs

### Inputs

Planning: fixed facts, character goals and ending. Prose: minimal packet plus execution card. Diagnosis: chapter text and necessary context.

### Execution

chapter-planning creates executable scenes; prose-writing follows confirmed inputs; readonly-diagnosis assesses reader experience without editing files.

### Outputs

A chapter plan and execution card, a prose draft, or a read-only diagnosis—only the output of the selected mode per invocation.

### Reliability boundary

Preserve established facts and author decisions. The standalone Skill does not automatically read history. Full-workflow checks and conditional correction are not part of these three modes.

### Demonstration

Inspect the original sample story, planning materials, scene card, draft and report in the public repository. Follow its installation and migration documentation.

```text
$writing-serial-fiction mode=chapter-planning
$writing-serial-fiction mode=prose-writing
$writing-serial-fiction mode=readonly-diagnosis
```

[Related case](../case-studies/fiction.en.md)

Private workflows require their local dependencies, authorized sessions and input contracts; they are not guaranteed to run unchanged everywhere. The packaging application and robot are not additional Skills.

[Back to portfolio](../README.en.md)
