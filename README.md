# SauceDemo QA Project

Manual and automated QA project for the [SauceDemo](https://www.saucedemo.com) demo e-commerce application, with API checks against [DummyJSON](https://dummyjson.com).

**Tester:** Raesebe Marakalla  
**Environment:** Windows, Chrome (latest)
**Status:** Testing and reporting complete; five reported defects remain open.

## Project scope

Coverage includes login, product listing and sorting, product details, cart, checkout, logout, exploratory testing, API checks, and regression automation. Test design used Equivalence Partitioning, Boundary Value Analysis, Decision Tables, State Transition, and Error Guessing.

## Results

| Activity | Result |
|---|---|
| Manual execution, Round 1 | 51 passed, 5 failed out of 56 test case rows (91.1% pass rate) |
| API checks | 17 of 17 assertions passed across 6 requests |
| Playwright UI automation | 4 of 4 tests passed; rerun in Round 2 |
| Defect retest, Round 2 | 5 of 5 defects still reproduce; all remain open |
| Exploratory testing | 3 sessions; Chrome and Edge checked, Firefox unverified |

The tested `standard_user` flows passed. Four open defects are High severity and one is Medium; the High severity issues affect checkout, cart removal, or product data for special users. See the final report for the release recommendation, risks, and limitations.

## Project files

| Folder | Contents |
|---|---|
| `01-test-plan/` | Test strategy, scope, environment, schedule, and deliverables |
| `02-requirements-and-scenarios/` | Derived requirements and test scenarios |
| `03-test-cases/` | Login, cart and checkout cases, plus the requirements traceability matrix |
| `04-execution-reports/` | Round 1 evidence and Round 2 retest/regression results |
| `05-bug-reports/` | Individual defect reports and defect summary |
| `06-exploratory-testing/` | Session charters, notes, and observations |
| `07-api-testing/` | API testing evidence |
| `08-automation/` | Playwright configuration and UI tests |
| `09-final-report/` | Test summary and metrics |

### Key reports

- [Test plan](01-test-plan/test-plan.md)
- [Requirements](02-requirements-and-scenarios/requrements.md)
- [Test scenarios](02-requirements-and-scenarios/test-scenario.md)
- [Test case traceability matrix](03-test-cases/RTM.md)
- [Round 2 retest report](04-execution-reports/retest-round2.md)
- [Defect summary](05-bug-reports/bug_summary.md)
- [Exploratory testing notes](06-exploratory-testing/exploratory-notes.md)
- [Final test summary](09-final-report/test-summary-report.md)
- [Test metrics](09-final-report/metrics.md)

## Run the UI automation

Requirements: Node.js (LTS). From `08-automation/`, install dependencies and the Chromium browser, then run the suite:

```bash
npm install
npx playwright install chromium
npx playwright test
```

Open the generated HTML report with:

```bash
npx playwright show-report
```

The suite covers valid login, invalid login, adding a product to the cart, and completing an order using `standard_user`. Configuration and test files are in [`08-automation/`](08-automation/).

## Limitations

- Automation covers four standard-user flows; it does not exercise the special users where the reported defects reproduce.
- Chrome and Edge were checked for selected browser behavior; Firefox was not tested.
- Performance, security, and mobile testing were out of scope.
- SauceDemo is a demonstration site; some special-user behavior is intentionally faulty.
