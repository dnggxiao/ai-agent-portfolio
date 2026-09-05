# Four-Platform Financial Reporting & Reconciliation System

**Role:** Project Lead / Workflow Designer  
**Status:** Used in a real enterprise finance workflow  
**Platforms:** WB (Wildberries) · Amazon · Mercado Libre · Walmart  
**Core stack:** Python · openpyxl · Excel automation · rule-based reconciliation · AI-assisted development

## Executive Summary

I designed a standardized financial reporting workflow for four e-commerce marketplaces with different source data and settlement structures. The key work was not simply automating spreadsheet formulas: it was creating a stable contract between platform data, finance-team adjustments, deterministic processing rules and a consistent final reporting format.

The workflow addresses a monthly process that previously involved roughly **15 finance workdays**. This figure describes the former workload; it is not presented as an independently audited net time saving.

## Business Problem

WB, Amazon, Mercado Libre and Walmart expose different report structures, fee fields and settlement logic. A manual process requires finance staff to repeatedly interpret platform exports, maintain mappings, add internal adjustments, attribute costs and reconcile results.

That creates three recurring risks:

- the same business rule is implemented differently from one platform or month to another;
- missing costs, unmatched SKUs or unknown fees can be hidden inside a plausible-looking workbook;
- final reports depend too heavily on individual spreadsheet habits and repeated manual operations.

## System I Designed

I standardized the workflow into four layers:

```text
WB / Amazon / Mercado Libre / Walmart
                 ↓
        Platform source files
                 ↓
 Shared manual input / adjustment standard
                 ↓
 Validation → mapping → calculation → allocation
                 ↓
        Reconciliation & exception gate
                 ↓
       Standardized financial output
```

### 1. Platform adapters
Each platform keeps its own source-file reality. The workflow interprets platform-specific fields without forcing finance staff to manually redesign every export.

### 2. Shared manual-input contract
Human-supplied costs, mappings and adjustments follow one defined input standard. This separates necessary financial judgment from repetitive spreadsheet manipulation.

### 3. Deterministic processing
The workflow performs the applicable order/SKU recognition, sales and refund handling, net-quantity calculation, product-cost attribution, freight and fulfillment-fee handling, shared-cost allocation and period/SKU aggregation.

### 4. Standard output contract
Regardless of source platform, the delivery follows a consistent reporting standard so downstream review does not have to relearn four unrelated workbook structures.

## Reliability Design

A core principle is **never invent missing financial data**.

The workflow uses a **DRAFT → FINAL** quality gate:

1. Validate required source and manual-input files.
2. Parse platform-specific settlement data.
3. Apply mappings and deterministic finance rules.
4. Surface missing costs, unmatched SKUs, unknown fees and other exceptions explicitly.
5. Keep the result in `DRAFT` while material exceptions remain.
6. Reconcile calculated results against the applicable platform settlement/remittance totals.
7. Produce the standardized `FINAL` output only after validation passes.

The goal is not to remove financial judgment. It is to remove repetitive financial operations while making judgment points and exceptions visible.

## My Contribution

I own the parts that determine whether the system is useful and trustworthy:

- understanding the original finance workflow;
- translating business rules into explicit processing logic;
- defining platform inputs and the shared manual-adjustment standard;
- defining the standardized reporting output;
- designing exception behavior and acceptance criteria;
- validating generated workbooks against business expectations;
- testing edge cases and reconciliation differences;
- iterating the workflow after finance-team feedback.

Codex assists with implementation, refactoring and debugging. I use it as a development tool rather than treating model output as the acceptance standard.

## Outcome

The system turns four platform-specific monthly reporting paths into a repeatable workflow with standardized human input and standardized output. Once the required source files and manual adjustments are prepared, the established workflow can perform the repetitive calculation and reporting steps rapidly and consistently.

The former end-to-end manual workflow represented roughly **15 workdays per month**. Actual net savings can vary by month, source-data quality and exception volume, so the portfolio does not claim an audited percentage improvement.

## Public Portfolio Boundary

Production settlement reports, internal cost files, customer/company information, credentials and proprietary finance rules are intentionally excluded. This repository documents the architecture, decisions and sanitized workflow rather than publishing production data or private implementation details.
