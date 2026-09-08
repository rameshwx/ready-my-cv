# Improvement changelog

| Stage | Hypothesis and result | Decision |
|---|---|---|
| Baseline | Exact keyword occurrence is consistent but over-credits lists and stuffing. | Keep only as comparison. |
| Iteration 1 | Canonical terms and curated aliases recover KMP, Compose, Node and Postgres wording. | Retained. |
| Iteration 2 | Section boundaries distinguish experience/projects from skills lists. | Retained. |
| Iteration 3 | Nearby action verbs distinguish applied evidence from unsupported presence. | Retained with bounded classes. |
| Iteration 4 | Phrase boundaries prevent partial substring matches; contradictory classification is reserved for explicit conflict rules. | Retained; expand catalog exclusions. |
| Iteration 5 | Recomputing score bounds and unique rule credit blocks inconsistent display. | Retained as mandatory verifier. |
| Removed experiment | Raw occurrence count rewarded repeated keywords and raised false positives on the stuffing case. | Removed from final engine. |
| Final | Approved aliases + section/action context + fixed multipliers + verification are deterministic and cost zero. Generated run: 20 cases, macro-F1 0.800, traceability 1.000, repeatability 1.000, 0 failures. | Ship and review synthetic failures before rule publication. |
| Backend adaptation | Browser-only extraction failed on real-world PDFs. Poppler structural/text extraction with bounded local Tesseract fallback was added, while the compiled Dart runner preserves the exact canonical scoring path. | Retained with temporary encrypted queue storage, same-origin consent, bounded leases/retries, email-only delayed delivery, and shared purge. |

Generated comparison evidence is produced by the commands in the README. Remaining limitation: deterministic text rules cannot confirm whether a claim is true; recommendations are deliberately conditional and never ask applicants to fabricate experience.
