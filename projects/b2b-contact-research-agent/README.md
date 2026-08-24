# B2B Contact Research Agent

**Role:** Independent Developer  
**Status:** Used by the foreign-trade team  
**Core focus:** multi-source research · source verification · structured output · anti-hallucination rules

## Problem

Targeted B2B prospecting requires more than finding a company name. Sales teams need to understand the company, business units, plants, relevant product lines, purchasing-related roles and publicly available business contacts before outreach.

Manual research is slow, inconsistent and easy to contaminate with unverified third-party information.

## What I Built

I independently designed a reusable research Skill with three modes:

1. **Prospecting** - discover target companies by product, industry and market.
2. **Company deep dive** - research group structure, business units, plants, product lines, procurement-related roles and public contacts.
3. **Lead enrichment** - verify, deduplicate and enrich an existing company list.

The output is structured into Excel sheets such as:

- Companies
- Contacts
- Business Units
- Official Accounts
- Sources

## Verification Rules

The system is deliberately conservative:

- Emails, phone numbers, WhatsApp IDs and social accounts must appear **verbatim in a checked source**.
- A role target can be inferred when supported by company structure, but an email address is never fabricated.
- If a result cannot be verified, the workflow returns **`Not found in checked sources`**.
- Third-party contact information is marked as third-party and not independently verified.
- Company marketing claims such as “global leader” are not treated as independent market-rank evidence.
- Private family information, leaked data and login credentials are excluded.
- The system does not automatically send outreach messages or add contacts.

## Research Priority

The workflow prioritizes:

1. Official company websites and supplier/procurement pages
2. Official product, plant and certification documents
3. Official careers pages and organization-role information
4. Official social accounts
5. Industry associations, trade shows and directories
6. Other public third-party business sources

## Result

I used the workflow to research **60 target companies**, all of which met the defined customer criteria. The resulting company/role/contact research was directly used by the foreign-trade team for targeted business development.

## Public Portfolio Note

Real company research results can contain public business contact information collected for internal sales use. Those contact lists are not republished in this portfolio. Only the workflow design, verification principles and sanitized examples are documented here.
