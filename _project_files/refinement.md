# Dokumentations-Review: Siegfried & Ida

Basierend auf den Personas **Softwareentwickler Siegfried** (Technischer Ansprechpartner) und **Integrationspartnerin Ida** (Plattform-Integrationspartner) wurde die aktuelle Dokumentation analysiert.

## 1. Analyse Ergebnisse

### Softwareentwickler Siegfried (Fokus: Implementierung & Stabilität)
*   **Positiv:** 
    *   Klarer Onboarding-Prozess mit Testphase/Sandbox.
    *   Detaillierte Erläuterung der Löschlogik (verhindert Fehl-Synchronisation).
    *   Saubere Trennung zwischen konzeptioneller Hilfe und technischer REST-Referenz.
*   **Lücken:**
    *   **Fehler-Monitoring:** Es fehlt der Hinweis, *wo* Siegfried im Fehlerfall Logs einsehen kann (z.B. im Händler-Backend oder via API-Endpoint).
-> XML: Fehler in der Verarbeitung von XML-Dokumenten können erst während der Verarbeitung der Dokumente durch die Technikboerse festgestell werden. Daher ist eine vorherige Validierung des XML-Dokuments ratsam. 
-> REST API: Die API gibt Auskunft über den Erfolg eines einzelnen API-Aufrufs. Sollte ein API-Aufruf fehlschlagen, wird eine Fehlermeldung als Response zurückgegeben. Daher sollte die Applikation die Fehlerberichte der API protokollieren und auswerten können.
    *   **Authentifizierung:** Konkrete Beispiele für den Token-Refresh oder Standard-FTPS-Einstellungen (Ports/Verschlüsselung) fehlen.
-> Diese Information erhält der Kunde oder der Partner im Rahmen des technischen Onboardings
    *   **Betriebsgrenzen:** Die Dokumentation verweist bei Rate-Limits und SLAs auf individuelle Absprachen. Hier wären "Standard-Limits" für die Planung hilfreich.

### Integrationspartnerin Ida (Fokus: Datenhoheit & Ökosystem)
*   **Positiv:** 
    *   Szenario-basierter Einstieg im Quick-Start Guide ermöglicht schnelle Orientierung.
    *   Eindeutige Klärung der Terminologie (Import/Export-Richtung).
    *   Warnung vor "Zuständigkeits-Konflikten" (Händler bereits an anderen Provider gebunden).
*   **Lücken:**
    *   **Datenhoheit:** Es fehlt eine klare Aussage zum "Conflict Handling": Wer gewinnt, wenn ein Händler Daten auf der technikboerse manuell ändert, während Ida ein Update schickt? (Overwrite-Policy).
-> Sollte ein Inserat gerade via XML oder API bearbeitet werden, während der Händler Daten manuell anpasst, kann es zu unvorhergesehenen Fehlern kommen. Dieser Fall ist jedoch äußerst selten, da in den überwiegenden Fällen technikboerse entweder das führende oder das folgende System ist. Im zweiten Fall nimmt der Kunde die Änderungen daher dann in seinem führenden System vor.
    *   **Mapping-Ressourcen:** Ida muss Kategorien und Marken mappen. Ein Link zu einer (ggf. via API abrufbaren) Master-Liste für Kategorien/Marken fehlt in der Übersicht.
-> Diese Informationen erhält der Kunde im Rahmen des technischen Onboardings, allerdings ist es ratsam, diese Informationen regelmäßig zu aktualisieren über die REST API Endpoints /adcategories und /manufacturers.
    *   **Dry-Run / Validierung:** Es gibt keinen Hinweis auf einen "Validation-Only" Modus für XML-Uploads, um große Batches vorab zu prüfen.
-> Es gibt keinen Dry-Run Modus für XML-Uploads, aber über die vom technikboerse-Entwicklerteam bereitgestellte Sandbox-Umgebung können Updates vor der Live-Schaltung ausführlich getestet werden.

## 2. Empfohlene Optimierungen (Checkliste)

- [ ] **Erweiterung Quickstart:** Hinweis auf Masterlisten (Marken/Kategorien), welche im Rahmen des technischen Onboardings bereitgestellt werden, und die Möglichkeit zum Abruf über REST API Endpoints hinzufügen.
- [ ] **Erweiterung Transport & Betrieb:** Abschnitt "Datenhoheit" ergänzen (Standard: Schnittstelle überschreibt manuelle Änderungen).
- [ ] **Erweiterung REST-API:** Hinweis auf Fehler-Logging/Monitoring-Tools für Entwickler aufnehmen.
- [ ] **Technische Details:** Standard-Rate-Limits (z.B. Requests/Minute) als Richtwert für Siegfried dokumentieren.
- [ ] **Beispiel-Erweiterung:** Authentifizierungs-Flow (OAuth2/Bearer) mit einem cURL-Beispiel visualisieren.

---
*Erstellt am: 2026-04-27*
*Status: In Review*
