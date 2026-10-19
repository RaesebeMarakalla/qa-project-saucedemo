# Test Summary Report: SauceDemo

| Field | Detail |
|---|---|
| Project | QA Project: SauceDemo |
| Tester | Raesebe Marakalla |
| Application | https://www.saucedemo.com (web), https://dummyjson.com (API) |
| Environment | Windows, Chrome (latest) |
| Report date | 2026-10-19 |

## 1. Summary
I tested login, product listing, sorting, cart, checkout and logout using manual test cases, exploratory sessions, Postman API tests and Playwright automation. Everything worked for `standard_user`. The special test users (`problem_user`, `error_user`, `visual_user`) exposed five defects, all still open after retest.

## 2. What was tested
- 56 manual test case rows (login, products, sorting, cart, checkout, logout)
- 3 exploratory sessions
- 6 API requests with 17 assertions
- 4 automated UI tests

Techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Tables, State Transition, Error Guessing, Exploratory Testing, Regression Testing, Requirements Traceability.

## 3. Results

| Area | Result |
|---|---|
| Manual tests | 51 passed, 5 failed, 91.1% pass rate |
| API tests | 17 of 17 assertions passed |
| Automation | 4 of 4 passed |
| Retest | 5 of 5 defects still open |

## 4. Open defects

| ID | Issue | Summary | Severity |
|---|---|---|---|
| BUG-01 | #1 | All product images show the same dog photo (problem_user) | Medium |
| BUG-02 | #2 | Checkout form puts Last Name entry into First Name field (problem_user) | High |
| BUG-03 | #3 | Remove button does not remove items from the cart (error_user) | High |
| BUG-04 | #4 | Finish button does not complete the order (error_user) | High |
| BUG-05 | #5 | Random prices and wrong Backpack image (visual_user) | High |

## 5. Other observations
- Checkout is allowed with an empty cart (TC-CHK-15). This may be a defect; it was recorded as a note.
- Dynamic Catalog > Lazy Load lists size (L) twice for one product. Seen in exploratory testing, not reported as a defect.
- Terms of Service and Privacy Policy in the footer appear as plain text. Open question.
- Console shows unrelated errors from an external reporting service (CORS and 503). Not part of any defect.

## 6. Risks and limitations
- Only Chrome was tested; Edge and Firefox were not compared.
- Many Round 1 passes have no saved screenshots.
- No performance, security or mobile testing (out of scope).
- Automation covers only `standard_user` happy paths, so it does not catch the user-specific defects.
- SauceDemo is a demo site whose special users are built with deliberate bugs, so these defects are expected.

## 7. Recommendation
For `standard_user`, all tested flows work, so that path is acceptable. The application is **not recommended for release** while the four High defects remain open, because they block checkout, cart removal or show wrong prices for some users. Retest after fixes and re-run the Playwright suite.

## 8. Lessons learned
- Testing with different user types found bugs that normal-user testing and automation did not.
- A requirement traceability matrix shows gaps early.
- Expected results must be based on observed behavior when there is no specification.
- Honest statuses (Pass, Fail, Not Run) and saved evidence make a report trustworthy.
- Retesting and regression runs confirm whether defects are really fixed.