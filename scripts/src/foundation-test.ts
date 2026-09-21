import { readFileSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = join(import.meta.dirname, "..", "..");
const read = (path: string) => readFileSync(join(root, path), "utf8");

const requiredDocuments = [
  "docs/governance/KFIN-DEVELOPMENT-CONSTITUTION.md",
  "docs/governance/DEVELOPMENT-CONSTITUTION.md",
  "docs/governance/DEFINITION-OF-DONE.md",
  "docs/governance/AI-DEVELOPMENT-RULES.md",
  "docs/governance/CHANGE-MANAGEMENT.md",
  "docs/architecture/adr/0000-template.md",
  "docs/development/SETUP.md",
  "docs/development/PHASE-0-SECURITY-AUDIT.md",
  "docs/development/PHASE-0-ARCHITECTURAL-AUDIT.md",
  "docs/development/PHASE-0-RECONCILIATION.md",
  "docs/development/PHASE-0-TRACEABILITY.md",
  "docs/development/PHASE-0.1-COMPLETION-REPORT.md",
  "docs/development/PHASE-0-COMPLETION-REPORT.md",
  "docs/testing/QUALITY-GATES.md",
];

for (const document of requiredDocuments) {
  assert.ok(read(document).length > 0, `${document} must not be empty`);
}

const constitution = read("docs/governance/KFIN-DEVELOPMENT-CONSTITUTION.md");
assert.match(constitution, /Document ID:\*\* KFIN-GOV-001/);
assert.match(constitution, /## 4\. Architectural Authority/);
assert.match(constitution, /## 21\. Forensic Integrity/);
assert.match(constitution, /## 30\. AI-Assisted Development/);
assert.match(constitution, /## 40\. Definition of Done/);
assert.match(constitution, /## 52\. Phase 0\.1 Boundary and Stop Condition/);
assert.match(constitution, /AI-Assisted Development/);
assert.match(constitution, /Real DNA profiles/);

const adrTemplate = read("docs/architecture/adr/0000-template.md");
assert.match(adrTemplate, /## Security impact/);
assert.match(adrTemplate, /## Data impact/);
assert.match(adrTemplate, /## Operational impact/);

const openApi = read("lib/api-spec/openapi.yaml");
const healthRoute = read("artifacts/api-server/src/routes/health.ts");
assert.match(openApi, /operationId: healthCheck/);
assert.match(healthRoute, /\/healthz/);

const subPhaseReport = read("docs/development/PHASE-0.1-COMPLETION-REPORT.md");
assert.match(subPhaseReport, /Acceptance gate:\*\* PASS/);
assert.match(subPhaseReport, /Phase 1 status:\*\* LOCKED/);

const completionReport = read("docs/development/PHASE-0-COMPLETION-REPORT.md");
assert.match(completionReport, /Phase 1 is locked/);

console.log(`Foundation tests passed for ${requiredDocuments.length} required documents.`);