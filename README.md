# technikboerse Interface Documentation

This repository contains the static bilingual technical documentation for **technikboerse** interfaces, including XML data exchange and REST API integration.

## Project Purpose
The goal of this project is to provide a comprehensive, easy-to-navigate documentation suite for technical partners and integrators. It covers:
- Classic XML-based data exchange (Import/Export).
- Modern REST API integration.
- Operational processes and transport models.
- Implementation examples and schemas.

## Directory Structure
The project is organized as a flat static site with language-specific subdirectories:

```text
.
├── de/                         # German documentation pages
├── en/                         # English documentation pages
├── examples/                   # Sample XML files and XSD schemas
├── _project_files/             # Internal project management and design notes
├── index.html                  # Main entry point / Landing page
├── schnittstellen_shared.css   # Central design system and styles
├── mobile_nav.js               # Responsive navigation logic
├── tb_logo.svg                 # Brand assets
├── favicon.ico / svg           # Browser icons
└── README.md                   # Project overview and conventions
```

## Naming Conventions
To maintain consistency and ease of maintenance, we follow these naming rules:

1. **Parallel Filenames**: German and English documentation pages use identical filenames whenever possible.
2. **Transport Page**: Both languages use `schnittstellen_transport_betrieb.html`.
   - German: `de/schnittstellen_transport_betrieb.html`
   - English: `en/schnittstellen_transport_betrieb.html`
3. **Prefix**: All documentation-specific HTML files should be prefixed with `schnittstellen_`.

## Localization & Parity
The documentation is strictly bilingual (DE/EN).

- **Mirror Logic**: Every page in the `de/` directory must have a corresponding counterpart in `en/`.
- **Content Parity**: Content should stay aligned in meaning, depth, and structural coverage. Significant guidance added to one language must be reflected in the other.
- **Language Switching**: Each page includes a language switcher that links directly to the corresponding page in the alternative language.

## Maintenance Guidance
- **Sync Changes**: When updating content in German, always review and update the English counterpart to ensure parity.
- **Navigation Alignment**: Sidebar and footer navigation must remain aligned across both languages.
- **Shared Assets**: Avoid duplicating styles or logic. Use `schnittstellen_shared.css` and `mobile_nav.js` for all pages.
- **Internal Links**: Use relative paths. Ensure that language-switching links resolve correctly across different directory levels.

## Examples & Schemas
The `examples/` directory contains:
- `technikboerse_import.xsd`: The authoritative XML schema for validation.
- Sample XML files for full synchronizations and delta updates.
- Reference implementations for specific use cases.

---
&copy; 2026 technikboerse. All rights reserved.
