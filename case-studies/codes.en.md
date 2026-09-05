# Four-Level Packaging Code System

[中文](codes.md) · [English](codes.en.md)

**Delivered to the enterprise · Independent developer**

A local Windows application combining lookup, imports, exports, rollback and backup for non-technical users.

```text
Pallet -> Carton -> B4 -> Label
```

## Problem

The business needed upstream and downstream lookup from any level in Pallet → Carton → B4 → Label, without a separately installed database service.

## Implementation

Django and SQLite power bidirectional lookup, scanner/manual input, CSV/TXT imports, continuous TXT batches, progress feedback, categorized exports, import history, last-import rollback and one-click backup. Packaged as a portable Windows folder with PyInstaller.

## Engineering decision

Persistent data, recovery from mistaken imports and practical startup for non-technical users are part of delivery—not extras after a lookup screen.

## My contribution

Owned requirements, relationship modeling, implementation, tests, import/export boundaries, rollback, backup and packaging.

## Outcome & scope

Delivered to the enterprise. Downstream production-adoption data has not been formally reported; no large-scale production-use claim is made.

## Public evidence and scope

Delivery account · Private implementation

Facts above follow the author’s project records. The private production system was not run during this portfolio update; the browser demonstration is not enterprise validation.

[Original project record / source repository](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/four-level-code-system/README.md)

[Back to portfolio](../README.en.md) · [Evidence and scope](../EVIDENCE.md)
