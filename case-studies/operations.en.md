# Alibaba.com Operations Suite

[中文](operations.md) · [English](operations.en.md)

**Used by the operations team · Independent developer**

Two distinct Skills for inquiry classification, customer registration and sales-performance attribution.

```text
Authorized session -> Full-history review -> Rules / review -> Ledger & checkpoint
```

## Problem

Operators repeatedly review inquiries and historical orders, classify customers, determine salesperson ownership and enter results into Excel. Long batches also need interruption and browser-state handling.

## Implementation

Node.js, playwright-core and Chrome CDP drive a separate browser. The inquiry workflow checkpoints each record, checks full conversation history and deduplicates. The order workflow collects paid orders, checks history and generates performance workbooks.

## Engineering decision

Inquiry processing is read-only: no messages or customer-profile edits. CAPTCHA pauses for human action rather than bypassing verification. Ambiguous cases are reviewed and corrections recorded. Validate order counts, amounts, headers, formulas and sorting.

## My contribution

Owned business classification, browser flows, state recovery, exception policy, acceptance criteria and team-feedback iteration.

## Outcome & scope

Typical batches contain about 200 inquiries or 200 orders. The two tools together save approximately 2 operations workdays per month, based on project estimates.

## Public evidence and scope

Documented case · Private implementation

Facts above follow the author’s project records. The private production system was not run during this portfolio update; the browser demonstration is not enterprise validation.

[Original project record / source repository](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/alibaba-operations-agents/README.md)

[Back to portfolio](../README.en.md) · [Evidence and scope](../EVIDENCE.md)
