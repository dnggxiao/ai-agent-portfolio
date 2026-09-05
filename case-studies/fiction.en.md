# Serial Fiction Workflow

[中文](fiction.md) · [English](fiction.en.md)

**Public source and example · Workflow design & maintenance**

Separate planning, approval, prose, independent checks and state updates while preserving authorial control.

```text
Established facts -> Approved scene card -> Draft / review -> Continuity update
```

## Problem

Long conversational writing can forget facts, override character decisions, leak planning language into prose or let one revision corrupt persistent story state.

## Implementation

File-based facts and continuity state; prose receives only a minimal packet and scene execution card. The standalone Skill has chapter-planning, prose-writing and readonly-diagnosis modes. The full workflow adds separate checks and conditional correction.

## Engineering decision

One mode per invocation. Approve before writing; update canonical prose and continuity only after checks pass. The standalone Skill does not automatically read earlier chapters and is not a one-click book generator.

## My contribution

Translate creative constraints into input contracts, execution modes, approval gates, checks, migration notes and reusable templates.

## Outcome & scope

The public repository contains an original example, tests and documentation. Refer to the repository for release status; no commercial-success or platform-endorsement claim.

## Public evidence and scope

Public source · Original example

Facts above follow the author’s project records. The private production system was not run during this portfolio update; the browser demonstration is not enterprise validation.

[Original project record / source repository](https://github.com/dnggxiao/serial-fiction-workflow)

[Back to portfolio](../README.en.md) · [Evidence and scope](../EVIDENCE.md)
