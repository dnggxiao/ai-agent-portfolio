# Four-Level Code Relationship System

**Role:** Independent Developer  
**Status:** Delivered to the enterprise  
**Core stack:** Django · SQLite · CSV/TXT processing · PyInstaller · Windows

## Problem

The business needed a local tool to query hierarchical packaging-code relationships across four levels:

**Pallet → Carton → B4 → Label**

Users needed to scan or manually enter any code level and quickly retrieve related upstream or downstream records without relying on an external database service.

## What I Built

I independently developed an offline Windows application with:

- lookup from any of the four code levels;
- forward and reverse relationship queries;
- barcode-scanner and manual-input support;
- CSV import;
- standard TXT import;
- continuous TXT batch import;
- import progress feedback;
- categorized exports;
- import-history records;
- rollback of the most recent import;
- one-click local database backup.

## Architecture

- **Application framework:** Django
- **Database:** SQLite
- **Database file:** stored locally with the application data
- **Packaging:** PyInstaller
- **Deployment model:** portable Windows folder, no separate database installation required

## Engineering Ownership

I owned the workflow from requirement interpretation through data-model design, implementation, test cases, import/export behavior, rollback/backup logic and final packaging.

The system was delivered to the enterprise. Downstream production-adoption data has not yet been formally reported, so this portfolio does not claim active production usage.

## Why It Matters

This project demonstrates that my work is not limited to prompt design or browser automation. It includes local application development, relational data modeling, persistent storage, import/export workflows, backup/rollback behavior and software packaging for non-technical users.

## Public Portfolio Note

Real packaging-code data and company files are not included. Public documentation uses only the abstract four-level relationship model.
