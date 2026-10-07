# Test Plan: SauceDemo Web Application

| Field | Detail |
|---|---|
| Project | QA Project: SauceDemo |
| Version | 1.0 |
| Author | ramaree025 |
| Date | 2026-10-07 |

## 1. Introduction
This document describes the approach for testing SauceDemo, a demo e-commerce
website, to verify that its main features work as expected.

## 2. Objectives
- Verify that login, product listing, sorting, cart, checkout and logout work correctly.
- Find and report defects with clear evidence.
- Practice applying QA techniques (EP, BVA, decision tables, state transition).
- Produce a final test summary report with a recommendation.

## 3. Scope

### In scope
- Login (valid, invalid, locked-out user)
- Product listing, sorting, and product details
- Add to cart / remove from cart
- Cart badge count and item quantity updates
- Checkout (information form, overview, completion)
- Logout
- Burger menu actions (All Items, About, Reset App State)
- Basic API testing of DummyJSON (Day 9)

### Out of scope
- Performance and load testing
- Security / penetration testing
- Mobile app testing
- Payment gateway (the demo has none)

## 4. Test Types
| Type | Description |
|---|---|
| Functional testing | Verify features against expected behavior |
| Negative testing | Invalid inputs and error handling |
| Exploratory testing | Unscripted sessions with charters |
| Regression testing | Re-run tests after fixes |
| Cross-browser testing | Chrome, Firefox, Edge |
| API testing | Status codes, response body, negative cases |
| Basic usability checks | Layout, messages, navigation |

## 5. Test Design Techniques
- Equivalence Partitioning and Boundary Value Analysis (login, checkout form)
- Decision Tables (checkout rules)
- State Transition (cart: empty -> has items -> checked out)
- Error guessing

## 6. Test Environment
| Item | Detail |
|---|---|
| Application URL | https://www.saucedemo.com |
| Operating system | Windows 11 |
| Browsers | Chrome (latest), Firefox (latest), Edge (latest) |
| Test users | standard_user, locked_out_user, problem_user, performance_glitch_user |
| Password | secret_sauce |

## 7. Tools
| Purpose | Tool |
|---|---|
| Test cases and reports | Markdown / Excel |
| Defect tracking | GitHub Issues |
| API testing | Postman |
| Automation | Playwright (or Selenium) |
| Version control | Git and GitHub |

## 8. Entry Criteria
- Test plan approved (by yourself, as the author)
- Test environment accessible
- Test cases written and reviewed

## 9. Exit Criteria
- 100% of planned test cases executed
- All critical and high severity defects reported
- Test summary report completed

## 10. Roles and Responsibilities
| Role | Responsibility |
|---|---|
| QA Engineer (you) | Planning, design, execution, reporting, automation |

## 11. Risks and Mitigation
| Risk | Impact | Mitigation |
|---|---|---|
| Demo site changes or goes down | Tests cannot run | Save screenshots; retry later |
| Limited time (12 days) | Incomplete coverage | Prioritize high-risk features first |
| Intentional bugs hard to tell from real ones | Wrong defect reports | Document expected behavior first |

## 12. Schedule
| Day | Activity |
|---|---|
| 1 | Setup and scope |
| 2 | Test plan |
| 3 | Requirements and scenarios |
| 4-5 | Test case design |
| 6 | Execution round 1 |
| 7 | Defect reporting |
| 8 | Exploratory testing |
| 9 | API testing |
| 10 | Automation |
| 11 | Regression and metrics |
| 12 | Final report |

## 13. Deliverables
Test plan, requirements and scenarios, test cases, RTM, execution reports,
bug reports, exploratory notes, Postman collection, automation scripts,
test summary report.