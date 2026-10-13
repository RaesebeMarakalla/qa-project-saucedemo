
# QA Project: SauceDemo

A practical quality assurance project focused on testing the SauceDemo web application using industry-standard test design techniques, defect reporting, and documentation.

## Project Goal
Apply QA practices across the full testing lifecycle:
- test planning
- requirements analysis
- test case design
- execution and evidence collection
- bug reporting
- exploratory testing
- API testing
- automation and final reporting

## Application Under Test
- Web app: https://www.saucedemo.com
- API: https://dummyjson.com

## Tools and Stack
- GitHub for version control and issue tracking
- Markdown for documentation and test artifacts
- Postman for API testing
- Playwright or Selenium for automation
- Browsers: Chrome, Firefox, Edge

## Test Techniques Used
- Equivalence Partitioning (EP)
- Boundary Value Analysis (BVA)
- Decision Tables
- State Transition Testing
- Exploratory Testing
- Regression Testing
- Requirements Traceability Matrix

## Repository Structure
| Folder | Contents |
|---|---|
| 01-test-plan | Test plan and project approach |
| 02-requirements-and-scenarios | User stories and test scenarios |
| 03-test-cases | Detailed test cases and RTM |
| 04-execution-reports | Test execution records and screenshots |
| 05-bug-reports | Defect reports |
| 06-exploratory-testing | Exploratory session notes |
| 07-api-testing | API testing artifacts |
| 08-automation | Automation scripts and helpers |
| 09-final-report | Final test summary and recommendation |

## Current Deliverables
- [Test Plan](./01-test-plan/test-plan.md)
- [Requirements](./02-requirements-and-scenarios/requrements.md)
- [Test Scenarios](./02-requirements-and-scenarios/test-scenario.md)
- [Login Test Cases](./03-test-cases/login-test-cases.md)
- [Cart and Checkout Test Cases](./03-test-cases/cart-checkout-test-cases.md)
- [Requirements Traceability Matrix](./03-test-cases/RTM.md)
- [Round 1 Execution Report](./04-execution-reports/screenshots/execution-report-round1.md)

## Round 1 Execution Status
- Total test cases: 39
- Passed: 37
- Failed: 0
- Blocked: 0
- Not run: 2 (TC-LOGIN-02 and TC-LOGIN-03)
- Pass percentage: 94.87%

The execution report records product, sorting, logout, cart, and checkout results. The two unrun login cases are excluded from the pass count.

## 12-Day Roadmap
| Day | Task | Status |
|---|---|---|
| 1 | Setup and scope | ✅ |
| 2 | Test plan | ✅ |
| 3 | Requirements and scenarios | ✅ |
| 4 | Test cases: Login (EP and BVA) | ✅ |
| 5 | Test cases: Cart and Checkout, RTM | ✅ |
| 6 | Test execution round 1 | ✅ |
| 7 | Defect reporting | ⬜ |
| 8 | Exploratory testing | ⬜ |
| 9 | API testing | ⬜ |
| 10 | Automation | ⬜ |
| 11 | Regression and metrics | ⬜ |
| 12 | Final report | ⬜ |

## Progress Log
- Day 1: Created repository, folder structure, and project README.
- Day 2: Drafted the test plan for the SauceDemo project.
- Day 3: Documented requirements and test scenarios.
- Day 4: Designed login test cases using EP and BVA techniques.
- Day 5: Added cart and checkout test cases and the requirements traceability matrix.
- Day 6: Executed Round 1 product, sorting, logout, cart, and checkout tests; recorded 37 passes and 2 unrun login cases.
- Day 7: Added Round 1 execution summary and pass percentage.

## Author
Raesebe Marakalla
- LinkedIn: https://www.linkedin.com/in/raesebe-marakalla-7a27b237a/
- Email: raesebemmarakalla@gmail.com
