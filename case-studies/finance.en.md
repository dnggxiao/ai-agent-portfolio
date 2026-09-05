# Four-Platform Financial Reporting System

[中文](finance.md) · [English](finance.en.md)

**Used in enterprise workflows · Project lead**

Bring WB, Amazon, Mercado Libre and Walmart source files into a local reporting workflow with a shared manual-adjustment standard and a consistent output contract.

```text
Marketplace files -> Shared adjustments -> Calculate & reconcile -> Standard report
```

## Problem

Different source structures and settlement fields required repeated file preparation, cost inputs, mapping and discrepancy checks. The full monthly process previously occupied roughly 15 workdays.

## Implementation

Retain platform-specific source files and processing paths. Use a shared manual input for costs and adjustments, then map, apply the relevant allocation and calculation rules, reconcile and produce consistent reports. The established workflow runs in a local Codex workspace once required files are prepared.

## Engineering decision

Standardize the input and output before automating the middle. Missing costs, unmatched SKUs and settlement differences stay visible. The documented reconciliation workflow uses a DRAFT → FINAL gate rather than disguising unresolved exceptions as final results.

## My contribution

Owned workflow analysis, four-platform input interfaces, shared manual-input standard, report structure, business rules, exception boundaries, acceptance and iteration. Codex assisted implementation, refactoring and debugging.

## Outcome & scope

Organized four reporting paths into an automated workflow under a common standard. Roughly 15 workdays is the project-reported former monthly workload; no month-by-month timing study is provided, so it is not a precise net-saving claim.

## Public evidence and scope

Documented case · Private implementation

Facts above follow the author’s project records. The private production system was not run during this portfolio update; the browser demonstration is not enterprise validation.

[Original project record / source repository](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/sku-profit-reconciliation/README.md)

[Back to portfolio](../README.en.md) · [Evidence and scope](../EVIDENCE.md)
