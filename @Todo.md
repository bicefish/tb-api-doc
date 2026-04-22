# Documentation Portal Todo List

This document tracks the remaining tasks and open points to be addressed before publishing the technikboerse interface documentation to partners and customers.

## 🔴 Critical / Technical
- [ ] **Clarify `validation` element**: Confirm the functional status of the `<validation>` element in the XSD. Is it active, deprecated, or reserved? 
  - *Affected files:* `schnittstellen_root_exchange.html`, `known_issues.html`
- [ ] **Clarify `auction` & `purchase`**: Verify if these objects are currently used by any systems or if they are legacy.
  - *Affected files:* `schnittstellen_preise_medien_zusatzobjekte.html`
- [ ] **API Reference Audit**: Verify the technical reference URL (`https://api.technikboerse.com/doc/html`) and ensure endpoint groups match the live API.
  - *Affected files:* `schnittstellen_rest_api.html`
- [ ] **Example XML Validation**: Perform a final schema validation of all XML snippets in the `beispiel_*.html` files to ensure zero syntax errors.
- [ ] **Mobile vs Mobil Fix**: Finalize the decision on whether to "fix" the XML generator to match the XSD (`mobile`) or continue documenting the discrepancy (`mobil`).

## 🟡 Design & UX
- [ ] **Editorial Metadata Visibility**: Review the "Editorial Metadata" section at the bottom of each page. Should this be visible to customers or kept as internal-only?
- [x] **Branding / Logo**: Add a company logo to the root and include it on every page in the header.
- [x] **Branding / Favicon**: Add a company favicon to the root and include it in the `<head>` of all 22 documents.
- [x] **Mobile Navigation**: Implement a simple mobile menu/toggle for the sidebar when viewed on smaller screens (below 960px).
- [ ] **Syntax Highlighting**: Consider adding a client-side library like Prism.js or Highlight.js for better XML readability in the code blocks.

## 🔵 SEO & Quality Assurance
- [ ] **Meta Descriptions**: Add descriptive `<meta name="description">` tags to every HTML file to improve search engine discoverability.
- [ ] **Link Audit**: Run a link-checker tool across the entire `/de/` and `/en/` folders to ensure zero broken internal references.
- [ ] **Cross-Language Links**: Double-check that every `lang-switch` link points to the exact mirrored page (e.g., `de/ad.html` <-> `en/ad.html`).

## 🟢 Maintenance & Publishing
- [ ] **Define Versioning Model**: Establish a formal versioning system (e.g., SemVer) and document it on the `changelog.html` page.
- [ ] **Publishing Plan**: Determine the final hosting location and ensure correct `.htaccess` or server redirects are in place.
- [ ] **Final Sign-off**: Obtain approval from Technical Support and Product Management.

---
*Created: 2026-04-22*
