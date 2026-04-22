# Documentation Portal Todo List

This document tracks the remaining tasks and open points to be addressed before publishing the technikboerse interface documentation to partners and customers.

## ðŸ”´ Critical / Technical
- [ ] **Clarify `validation` element**: Confirm the functional status of the `<validation>` element in the XSD. Is it active, deprecated, or reserved? 
  - *Affected files:* `schnittstellen_root_exchange.html`, `known_issues.html`
- [x] **Clarify `auction` & `purchase`**: Verify if these objects are currently used by any systems or if they are legacy.
  - *Affected files:* `schnittstellen_preise_medien_zusatzobjekte.html`
- [ ] **API Reference Audit**: Verify the technical reference URL (`https://api.technikboerse.com/doc/html`) and ensure endpoint groups match the live API.
  - *Affected files:* `schnittstellen_rest_api.html`
- [ ] **Example XML Validation**: Perform a final schema validation of all XML snippets in the `beispiel_*.html` files to ensure zero syntax errors.
- [ ] **Mobile vs Mobil Fix**: Finalize the decision on whether to "fix" the XML generator to match the XSD (`mobile`) or continue documenting the discrepancy (`mobil`).

## ðŸŸ¡ Design & UX
- [x] **Editorial Metadata Visibility**: Moved to internal `@Todo.md` archive. Top-level metadata grids removed from public view.
- [x] **Branding / Logo**: Add a company logo to the root and include it on every page in the header.
- [x] **Branding / Favicon**: Add a company favicon to the root and include it in the `<head>` of all 22 documents.
- [x] **Mobile Navigation**: Implement a simple mobile menu/toggle for the sidebar when viewed on smaller screens (below 960px).
- [ ] **Syntax Highlighting**: Consider adding a client-side library like Prism.js or Highlight.js for better XML readability in the code blocks.

## ðŸ”µ SEO & Quality Assurance
- [ ] **Meta Descriptions**: Add descriptive `<meta name="description">` tags to every HTML file to improve search engine discoverability.
- [ ] **Link Audit**: Run a link-checker tool across the entire `/de/` and `/en/` folders to ensure zero broken internal references.
- [ ] **Cross-Language Links**: Double-check that every `lang-switch` link points to the exact mirrored page (e.g., `de/ad.html` <-> `en/ad.html`).

## ðŸŸ¢ Maintenance & Publishing
- [ ] **Define Versioning Model**: Establish a formal versioning system (e.g., SemVer) and document it on the `changelog.html` page.
- [ ] **Publishing Plan**: Determine the final hosting location and ensure correct `.htaccess` or server redirects are in place.
- [ ] **Final Sign-off**: Obtain approval from Technical Support and Product Management.

## ðŸ“ Editorial Archive (Preserved from HTML Pages)

### XML Interface Pages
- **Root Element (exchange)**
  - *DE Basis:* XSD als technische Strukturreferenz, Full- und Update-Beispiel fr die reale Ausprgung, bestehendes Schnittstellendokument fr fachliche Erluterungen.
  - *DE Offen:* Konkrete Datentypdarstellung von exportDate, genaue operative Rolle von validation, finale Kardinalitten in der HTML-Feldtabelle.
  - *EN Basis:* XSD as technical structure reference, Full and Update examples for real-world expression, existing interface document for functional explanations.
  - *EN Open:* Concrete data type representation of exportDate, exact operational role of validation, final cardinalities in the HTML field table.

- **Dealer (dealer)**
  - *DE Basis:* XSD fr Struktur, Attribute und Pflichtlogik des dealer-Objekts; bestehendes Schnittstellendokument fr fachliche Einordnung von GUID, ID, created und modified.
  - *DE Offen:* Feingranulare Unterstruktur von info, operative Nutzung von pguid, finale Kardinalitten einzelner dealer-Unterelemente.
  - *EN Basis:* XSD for structure, attributes, and required logic of the dealer object; existing interface document for functional classification of GUID, ID, created, and modified.
  - *EN Open:* Fine-grained sub-structure of info, operational use of pguid, final cardinalities of individual dealer sub-elements.

- **Inserat (ad)**
  - *DE Basis:* XSD fr Struktur, Attribute und Pflichtlogik des ad-Objekts; bestehendes Schnittstellendokument fr fachliche Bedeutung von category_id, contact_ids, Preis- und Medienfeldern sowie created und modified.
  - *DE Offen:* Feingranulare Unterstruktur von info, finale fachliche Einordnung von ad_type, operative Nutzung von auction und purchase.
  - *EN Basis:* XSD for structure, attributes, and required logic of the advertisement object; existing interface document for the functional meaning of category_id, contact_ids, price and media fields as well as created and modified.
  - *EN Open:* Fine-grained sub-structure of info, final functional classification of ad_type, operational use of auction and purchase.

- **Kontakt (contact)**
  - *DE Basis:* XSD fr Struktur, Feldnamen und Attributlogik der Kontakte; Beispiel-XMLs fr die beobachtbare Schreibweise; bestehendes Schnittstellendokument fr fachliche Bedeutung von Zustndigkeiten, Sprachen und Kontakt-Zuordnungen.
  - *DE Offen:* Finale Struktur von responsibilities, exakte Datentyp-Definition von languages_iso_639_1, operative Handhabung von Kontaktbildern.
  - *EN Basis:* XSD for structure, field names, and attribute logic of the contacts; example XMLs for the observable spelling; existing interface document for the functional meaning of responsibilities, languages, and contact assignments.
  - *EN Open:* Final structure of responsibilities, exact data type definition of languages_iso_639_1, operational handling of contact images.

- **Lschlogik (deletion logic)**
  - *DE Basis:* XSD fr strukturelle Existenz von dealersDeleted, adsDeleted und deleteInfo; bestehendes Schnittstellendokument fr fachliche Beschreibung von Full- und Update-Verhalten.
  - *DE Note:* Die auf dieser Seite gezeigten Mini-Beispiele dienen der Verdeutlichung. Die bestehenden Beispiel-XMLs zeigen die Lschlogik nicht in allen fachlich relevanten Varianten.
  - *EN Basis:* XSD for structural existence of dealersDeleted, adsDeleted, and deleteInfo; existing interface document for functional description of Full and Update behavior.
  - *EN Note:* The mini-examples shown on this page serve for clarity. The existing example XMLs do not show the deletion logic in all functionally relevant variants.

- **Preise & Medien (prices & media)**
  - *DE Basis:* XSD fr die strukturelle Existenz und Attribute der Preis-, Medien- und Zusatzobjekte; bestehendes Schnittstellendokument fr fachliche Preislogik, Bildverarbeitung, Videohinweise und kanonische URLs.
  - *DE Offen:* Finale Beschreibung von image-Unterstruktur, operative Nutzung von auction und purchase, konkrete Ausprgung von Bild-Hashes und Medien-Metadaten.
  - *EN Basis:* XSD for structural existence and attributes of price, media, and additional objects; existing interface document for functional pricing logic, image processing, video notes, and canonical URLs.
  - *EN Open:* Final description of image sub-structure, operational use of auction and purchase, concrete expression of image hashes and media metadata.

### REST API Pages
- **REST-API bersicht**
  - *DE/EN Basis:* Lokale Integrations-Docs & externe REST-API-Spezifikation. / Local integration docs & external REST API specification.
  - *DE/EN Purpose:* Strategische Einordnung; keine technische Endpunkt-Referenz. / Strategic classification; no technical endpoint reference.
  - *DE/EN Note:* Diese Seite ist als HTML-Vorlage fr die knftige Online-Dokumentation gedacht... / This page is intended as an HTML template...

### Examples & Changelog
- **Full Export Example**
  - *DE Didactic:* Reduziertes Beispiel zur Erluterung der Full-Logik; nicht als vollstndige Feldreferenz zu verstehen.
  - *EN Didactic:* Reduced example to explain the full logic; not to be understood as a complete field reference.
- **Update Export Example**
  - *DE Didactic:* Reduziertes Beispiel zur Erluterung der Update-Logik; ergnzt die Originalbeispiele um explizite Lschflle.
  - *EN Didactic:* Reduced example to explain the update logic; supplements the original examples with explicit deletion cases.
- **Changelog**
  - *DE Didactic:* Pflege- und Versionsseite; keine funktionale Referenzseite im engen Sinn.
  - *EN Didactic:* Maintenance and version page; not a functional reference page in the strict sense.
  - *Maintenance:* Update with every functionally relevant or structurally visible change to the HTML documentation.

---
*Created: 2026-04-22*
