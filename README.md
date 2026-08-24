# AI Agent Engineering & Enterprise Automation Portfolio

> Building reliable AI-assisted applications that turn real business workflows into repeatable software systems.

[中文简介](#中文简介) · [Projects](#selected-projects) · [Engineering Approach](#engineering-approach) · [Tech Stack](#tech-stack)

## Highlights

- **5–6 enterprise AI Skills / automation tools** completed and currently used in real business workflows.
- Automated an e-commerce finance workflow that previously required about **15 workdays per month**.
- Built Alibaba.com operations tools that process about **200 inquiries / 200 orders per batch** and together save about **2 operations workdays per month**.
- Completed structured research on **60 qualified target companies**, with outputs used by the foreign-trade team for targeted outreach.
- Delivered a local Windows data-management application for hierarchical packaging-code lookup.
- Hands-on system integration experience with **STM32 / ESP32 / servos / sensors** and automated inspection equipment.

## Selected Projects

| Project | Role | Core Engineering Focus | Business / Delivery Result |
| --- | --- | --- | --- |
| [E-Commerce SKU Profit & Reconciliation Agent](projects/sku-profit-reconciliation/README.md) | Project Lead | Python, openpyxl, reconciliation, validation gates, exception surfacing | Replaced a workflow requiring ~15 finance workdays/month |
| [B2B Contact Research Agent](projects/b2b-contact-research-agent/README.md) | Independent Developer | Multi-source research, evidence verification, structured output, anti-hallucination rules | 60 qualified target companies researched for sales use |
| [Alibaba.com Operations Agents](projects/alibaba-operations-agents/README.md) | Independent Developer | Node.js, playwright-core, Chrome CDP, state persistence, HITL, resumability | ~200 records/batch; ~2 operations workdays/month saved together |
| [Four-Level Code Relationship System](projects/four-level-code-system/README.md) | Independent Developer | Django, SQLite, imports/exports, rollback, backup, Windows packaging | Delivered as a portable Windows application |
| [Desktop Intelligent Robot](projects/desktop-intelligent-robot/README.md) | Project Lead | STM32, ESP32, PWM, servos, sensors, module-level debugging | Hardware-software integration and troubleshooting practice |

## Engineering Approach

My typical workflow is:

**Requirement Analysis → SOP / Rule Decomposition → Prototype → AI-assisted Development → Testing → Exception Handling → Validation → User Feedback → Iteration & Delivery**

I use AI coding tools mainly to accelerate implementation, refactoring and debugging. I remain responsible for:

- defining business rules and acceptance criteria;
- deciding system boundaries and failure behavior;
- testing edge cases and validating outputs;
- designing human-in-the-loop review where automation should not guess;
- iterating based on actual user feedback.

## Reliability Patterns Used in Real Projects

- **State persistence & resume-after-interruption** for long-running browser workflows.
- **Human-in-the-loop review** for ambiguous or high-risk cases.
- **DRAFT → FINAL quality gates** when inputs are incomplete or reconciliation is unresolved.
- **Explicit exception surfacing** instead of silently guessing missing data.
- **Source-level verification** for public business contact research.
- **Read-only automation boundaries** for workflows that must not send messages or modify platform data.
- **Validation & diff checks** for generated Excel outputs.

## Tech Stack

**AI Coding & Workflow**  
ChatGPT · OpenAI Codex / Codex Desktop · AGENTS.md · reusable Skill workflows

**Software & Automation**  
Python · Node.js · playwright-core · Google Chrome · Chrome DevTools Protocol (CDP) · openpyxl · Django · SQLite · PyInstaller

**Version Control**  
Git · GitHub · branches · merges · conflict resolution

**Embedded / System Integration**  
C (coursework / embedded foundation) · STM32 · ESP32 · Keil5 · PWM · servos · sensors

## What This Repository Contains

This repository is a **recruiting portfolio**, not a dump of proprietary enterprise source code. Project pages focus on architecture, engineering decisions, failure handling, validation logic, sanitized examples and measurable outcomes.

No real customer contact lists, company credentials, cookies, private order data, internal settlement files or confidential business datasets are published here.

## 中文简介

这是一个面向校招与面试展示的 **AI Agent / AI 应用工程作品集**。我主要使用 Codex 等 AI Coding 工具，将企业中的人工业务流程拆解为可重复执行的软件工作流，并负责需求梳理、规则设计、测试校验、异常处理、用户反馈与最终交付。

目前已完成并投入企业实际使用的 AI Skill / 自动化工具约 **5–6 个**，覆盖外贸获客、电商运营、SKU 利润核算与企业数据管理等场景。

本仓库只展示**脱敏后的项目设计与工程方法**，不会公开企业真实客户数据、订单、账号凭据、Cookie 或内部业务文件。

---

**Target roles:** AI Application Engineer · AI Agent Engineer · AI Software Engineer · Automation Engineer
