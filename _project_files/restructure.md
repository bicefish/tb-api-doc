# Restructuring Tasks for Technikboerse Interface Documentation

This document breaks down the instructions into smaller, manageable tasks organized by file and requirement topic.

## General Requirements
- [ ] Apply changes to both German (`de/`) and English (`en/`) versions of each file.
- [ ] Maintain "Vitreous" design aesthetics (glassmorphism, subtle animations, premium feel).
- [ ] Ensure bilingual consistency.
- [ ] Do **not** mention missing source documents or internal processes.
- [ ] Do **not** address the `mobil` vs `mobile` discrepancy.

---

## 1. Landing Page (`index.html`)
- [x] **Import Perspective:** Update the root landing page to clearly distinguish between "Import into technikboerse" and "Export from technikboerse". Make clear that there are four types of imports/exports: XML Import, XML Export, REST Import, REST Export.
- [x] **Symmetry:** Ensure the wording for import/export is symmetrical and easy to scan.

## 2. Quickstart & Onboarding (`de/schnittstellen_quickstart.html`, `en/schnittstellen_quickstart.html`)
- [x] **Step-based Onboarding:**
    - [x] Add "Typical onboarding process" section.
    - [x] Define common steps (initial contact, goal clarification, tech contact, XML vs REST choice, test/go-live process).
    - [x] Detail REST-specific steps (sandbox/sandbox equivalent access, test dealer/account identifiers, API key/token, base URLs, access confirmation, test phase).
    - [x] Detail XML-specific steps (schema/examples, transport agreement, credentials for upload OR retrieval URL for fetch, file naming/cadence/processing rhythm, test phase).
    - [x] Add production activation steps (successful validation, schedule/rhythm alignment, go-live confirmation, initial monitoring support).
- [x] **Preparation & Setup Requirements:**
    - [x] Add common information list (business purpose, tech contact, interface type, data direction, freshness expectations).
    - [x] Add XML-specific prep list (transport method, source/destination, credentials, schedule, full vs update, deletion handling, test files, image delivery).
    - [x] Add REST-specific prep list (env access, auth/token, permissions/scopes, operations/use cases, test accounts, test/production rollout).
    - [x] Add Export-specific prep list (dataset/scope, dealers/accounts, schedule, delivery target, notification/logging recipient).
    - [x] Add Import-specific prep list (dealers/accounts transmitted, identifiers used, full vs update, content: contacts, images, forwarding, etc.).
- [x] **Support & Contact Path:**
    - [x] Add clearly visible technical support section.
    - [x] Include "Please provide" list for initial requests (company name, integration type, use case, tech contact, target environment, data direction).
    - [x] Standardize on `produktmanagement@technikboerse.com`.

## 3. Root & Exchange Overview (`de/schnittstellen_root_exchange.html`, `en/schnittstellen_root_exchange.html`)
- [x] **Import Perspective:**
    - [x] State explicitly the two major directions: Import and Export.
    - [x] Explain that semantics must be read from the perspective of the receiving/sending system.
- [x] **Import Artifacts:**
    - [x] Reference "Import XML schema", "Example file for full import", and "Example file for update import".
    - [x] Use neutral wording for missing files: "available as accompanying schema/example artifacts".

## 4. XML Transport & Operations (`de/schnittstellen_transport_betrieb.html`, `en/schnittstellen_transport_operating.html`)
- [x] **Full vs. Update Transfers:**
    - [x] Document full transfer (full inventory, deletions by absence).
    - [x] Document update transfer (changes only, lookback window).
- [x] **Operational Rules:**
    - [x] Define "Lookback / Backlog window" concept (overlap past changes for safety/recovery, small overlap for daily processing).
    - [x] Add "Resynchronization" rule (periodic full transfers required to fix drift).
    - [x] Add processing order and file handling rules (chronological, timestamp naming, archived/removed after processing).
    - [x] Add processing cadence (agreed schedule, daily or more frequent).
    - [x] Detail explicit deletion handling in update mode (deletion lists) vs absence in full mode.

## 5. Media & Image Handling (`de/schnittstellen_preise_medien_zusatzobjekte.html`, `en/schnittstellen_preise_medien_zusatzobjekte.html`)
- [x] **URL Rules:**
    - [x] Document opaque URL rule (do not manipulate or rewrite).
- [x] **Caching & Updates:**
    - [x] Add rule for distinguishable filenames on image replacement.
- [x] **Scopes & Variants:**
    - [x] Distinguish between ad images and contact images.
    - [x] Clarify standard (HTTP URL) vs optional (file-based) transport.

## 6. Contacts / Ansprechpartner (`de/schnittstellen_contact.html`, `en/schnittstellen_contact.html`)
- [x] **Entity Roles:**
    - [x] Explain separation of contact entities and their roles (languages, responsibilities).
- [x] **Technical Rules:**
    - [x] Document stable/unique identifiers.
    - [x] Explain reference consistency (no dangling references).
- [x] **Logic & Fallbacks:**
    - [x] Detail inheritance: explicit ad-level assignment takes precedence over dealer defaults.
    - [x] Explain responsibilities classification.
    - [x] Add standardized language code requirement.

## 7. Ads & Mapping (`de/schnittstellen_ad.html`, `en/schnittstellen_ad.html`)
- [x] **Forward Interfaces:**
    - [x] Add section for downstream publication control.
    - [x] Explain optional nature, configuration dependency, and default behavior (omitted = no change).
    - [x] Document implementation points: subject to product/config, targets from documented source of truth.
    - [x] Provide short XML snippet for forwarding block.
- [x] **Generic Mapping & Fallbacks:**
    - [x] Document category assignment rules and fallbacks.
    - [x] Document manufacturer normalization and fallback rules.
    - [x] Document flexible model processing.
    - [x] Define attribute handling (unknown attributes ignored).
    - [x] Clarify partner responsibility for mapping alignment.
- [x] **Standard vs Special:**
    - [x] Distinguish between standard model adherence and custom mapping agreements.

## 8. REST API Overview (`de/schnittstellen_rest_api.html`, `en/schnittstellen_rest_api.html`)
- [x] **Contextualize:** Ensure the relation to the Import/Export directions is clear.
- [x] **Onboarding & Support:** Cross-link or include REST-specific onboarding/support info.

