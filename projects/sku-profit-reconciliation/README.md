# E-Commerce SKU Profit & Reconciliation Agent

**Role:** Project Lead  
**Status:** Used in real enterprise workflow  
**Core stack:** Python · openpyxl · Excel automation · rule-based reconciliation · AI-assisted development

## Problem

The original monthly finance workflow required manual checking across platform settlement reports, SKU mappings and internal cost tables. The complete process took approximately **15 workdays per month** and was vulnerable to omissions, inconsistent mappings and formula mistakes.

## What I Built

I led the design of an AI-assisted workflow that automates:

- order / SKU recognition;
- sales, refunds and net-quantity calculation;
- product cost attribution;
- first-mile freight deduction and refund reversal;
- fulfillment-fee attribution;
- allocation of advertising, storage and other shared costs;
- aggregation by SKU, product and settlement period;
- reconciliation against platform remittance totals.

The workflow covers Amazon US settlement processing and also includes Walmart capabilities such as PaymentSummary reconciliation and WFS fee attribution.

## Reliability Design

A core design principle is **“do not guess financial data.”**

The workflow uses a **DRAFT → FINAL** quality gate:

1. Parse settlement and cost inputs.
2. Match orders and SKUs.
3. Calculate cost and fee attribution.
4. Surface missing costs, unknown fees and unmatched SKUs explicitly.
5. Keep output in `DRAFT` if unresolved anomalies remain.
6. Reconcile against actual settlement totals.
7. Produce `FINAL` only after validation passes.

This makes missing information visible instead of silently producing a plausible-looking but unreliable result.

## AI Collaboration

Codex assisted with Python/openpyxl implementation, refactoring and debugging. My responsibilities included:

- translating finance rules into deterministic logic;
- defining input/output structure and acceptance criteria;
- testing real edge cases and settlement differences;
- deciding exception behavior;
- validating generated Excel outputs;
- iterating rules after business review.

## Result

The automated workflow can replace a process that previously required approximately **15 finance workdays per month**, while improving consistency and traceability.

## Public Portfolio Note

The production workflow processes internal settlement reports and cost data. Those files and company-specific financial rules are not published. This page documents the engineering approach and sanitized workflow only.
