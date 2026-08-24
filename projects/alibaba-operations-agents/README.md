# Alibaba.com Operations Agents

**Role:** Independent Developer  
**Status:** Used directly by foreign-trade / operations teams  
**Core stack:** Node.js · playwright-core · Google Chrome · Chrome DevTools Protocol (CDP) · Excel automation

## Overview

This project family contains two enterprise automation Skills for Alibaba.com operations:

1. **New-Customer Identification Skill**
2. **Customer Registration & Sales Performance Skill**

Both workflows translate repetitive manual browser operations and business rules into repeatable, reviewable processes.

## 1. New-Customer Identification Skill

The workflow accepts a store and date range, navigates inquiries and determines whether each inquiry belongs to a new or returning customer.

### Engineering Features

- Launches an independent automated Chrome instance so daily browser use is not disrupted.
- Uses **Node.js + `playwright-core` + local Google Chrome + CDP remote debugging**.
- Traverses inquiries in the requested time window and opens the associated conversations.
- Scrolls the conversation history to the true top before classification.
- Applies deterministic business rules for new/returning-customer classification.
- Deduplicates adjacent inquiries from the same customer ID.
- Routes ambiguous cases to **human review** instead of forcing a decision.
- Runs two inquiries concurrently by default, with a small controlled concurrency limit.
- Saves progress after each inquiry so interrupted batches can resume.
- Pauses the batch for human handling when CAPTCHA appears; the workflow does not attempt to bypass verification.
- Supports manual correction while preserving a modification record and regenerating the output.
- Keeps a strict **read-only boundary**: no message sending, assignment, labeling, deletion or customer-profile modification.

Typical batch size is approximately **200 inquiries**.

## 2. Customer Registration & Sales Performance Skill

This workflow automates paid-order collection, customer lookup, historical-order checking, new/returning classification and salesperson attribution.

### Engineering Features

- Reads paid orders within a selected date range.
- Records order ID, salesperson, order amount, paid amount and paid time.
- Queries customer names in batches.
- Uses historical orders to determine customer status.
- Applies deterministic attribution rules for salesperson ownership.
- Generates the required Excel workbook.
- Automatically validates order count, transaction amount, headers, formulas and salesperson ordering.
- Compares generated results with manually prepared workbooks to surface discrepancies.

Typical batch size is approximately **200 orders**.

## Business Result

Together, the two Skills save the operations team approximately **2 workdays per month** and are directly used in day-to-day business workflows.

## AI Collaboration

Codex assisted with implementation, debugging and workflow iteration. I was responsible for business-rule definition, browser-flow design, state handling, exception behavior, acceptance criteria and user-feedback-driven iteration.

## Public Portfolio Note

This public repository does not include platform credentials, cookies, real inquiry messages, customer IDs, internal order data or account-specific selectors. The production Skills remain private.
