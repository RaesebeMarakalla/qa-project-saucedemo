# SauceDemo Testing

**Tester:** Raesebe Marakalla  
**Browser:** Chrome (latest)  
**Approach:** Session-based testing. Each session has a charter, a time box, notes and findings.
## 12-Day Roadmap
| Day | Task | Status |
|---|---|---|
| 1 | Setup and scope | ✅ |
| 2 | Test plan | ✅ |
| 3 | Requirements and scenarios | ✅ |
| 4 | Test cases: Login (EP and BVA) | ✅ |
| 5 | Test cases: Cart and Checkout, RTM | ✅ |
| 6 | Test execution round 1 | ✅ |
| 7 | Defect reporting | ✅ |
| 8 | Exploratory testing | ✅ |
| 9 | API testing | ✅ |
| 10 | Automation | ✅ |
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
- Day 8: Completed exploratory checks of the product catalog, sorting, product details, cart navigation, checkout URL, menu, and footer in Chrome and Edge. Firefox remains unverified; results are in the exploratory testing notes.
- **Day 10:** Automated 4 key tests with Playwright (valid login, invalid login, add to cart, checkout). All passed.

## Session 1
**Charter:** Explore the products page and sorting with standard_user to find layout, data or usability problems.  
**Time box:** 15 minutes  
**Date:** 2026-10-16

### Notes
- Logged in as `standard_user` and opened the cart; selected **All Items** from the menu and returned to the Products page.
- Selected **About**; it navigated to `https://saucelabs.com/` in the same tab. Browser Back returned to the Products page.
- Opened the menu and used **Close Menu (X)**; the menu closed.
- Added the Backpack and Bike Light; the cart badge showed 2. Selected **Reset App State**; the badge cleared. Refreshed and confirmed both products showed **Add to cart**.
- Inspected the footer: X, Facebook and LinkedIn link to their Sauce Labs profiles and are configured to open in a new tab. Terms of Service and Privacy Policy appeared as text, not links.
- Selected **Logout**; the login page opened.
- Logged in as `standard_user` and checked all four product sort options:
  - **Name (A to Z):** Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red).
  - **Name (Z to A):** Test.allTheThings() T-Shirt (Red), Sauce Labs Onesie, Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt, Sauce Labs Bike Light, Sauce Labs Backpack.
  - **Price (low to high):** Sauce Labs Onesie ($7.99), Sauce Labs Bike Light ($9.99), Sauce Labs Bolt T-Shirt ($15.99), Test.allTheThings() T-Shirt (Red) ($15.99), Sauce Labs Backpack ($29.99), Sauce Labs Fleece Jacket ($49.99).
  - **Price (high to low):** Sauce Labs Fleece Jacket ($49.99), Sauce Labs Backpack ($29.99), Sauce Labs Bolt T-Shirt ($15.99), Test.allTheThings() T-Shirt (Red) ($15.99), Sauce Labs Bike Light ($9.99), Sauce Labs Onesie ($7.99).
- Opened every product detail by clicking its image and name. Both controls opened the same detail page; each detail's name, price and description matched the product listing.

### Findings
| # | Type | Description |
|---|---|---|
| 1 | Question | The footer displays “Terms of Service” and “Privacy Policy” as plain text rather than clickable links. Confirm whether these are intended to be links. |

## Session 2
**Charter:** Explore cart and checkout with unusual actions (browser back button, refresh, direct URLs) to find broken flows.  
**Time box:** 15 minutes  
**Date:** 2026-10-16

### Notes
- Added the Sauce Labs Backpack and Bike Light; the cart badge showed 2.
- Opened the cart and confirmed both items and quantities were listed.
- Used the browser Back button to return to Products; the cart badge still showed 2.
- Refreshed the Products page; the cart badge still showed 2 and both products still had **Remove** buttons.
- Entered `https://www.saucedemo.com/checkout-step-one.html` directly while logged in; the Checkout: Your Information form opened and the cart badge remained at 2.

### Findings
| # | Type | Description |
|---|---|---|
| 1 | Observation | Cart contents and product selection state were retained after browser Back and refresh. Direct navigation to checkout worked while logged in. No issue observed in these checks. |

## Session 3
**Charter:** Explore usability and cross-browser behavior (Chrome, Edge or Firefox) on the login and products pages.  
**Time box:** 25 minutes  
**Date:** 2026-10-16

### Notes
- Checked the login and Products pages in Chrome. The login page displayed Username, Password and Login controls; the Products page displayed six products and a product sort control.
- Product images and names opened their corresponding details, and all four sort options displayed the expected order (see Session 1 for details).
- Repeated the login and Products page checks in Microsoft Edge. The Products page displayed six products.
- In Edge, checked all four sort options; name A to Z, name Z to A, price low to high and price high to low all displayed the expected product order and prices.
- In Edge, clicked the Sauce Labs Backpack image and name; both opened the matching detail page, and its name, price ($29.99) and description matched the listing.
- Firefox was not checked, so behavior in Firefox remains unverified.

### Findings
| # | Type | Description |
|---|---|---|
| 1 | Limitation | Chrome and Edge were checked with the flows above. Firefox behavior remains unverified. No issue was observed in the checks recorded here. |

# Automation: Playwright

Automated UI tests for https://www.saucedemo.com

## Setup
1. Install Node.js (LTS) from nodejs.org
2. Open a terminal in this folder (`08-automation`)
3. Run:
   npm install
   npx playwright install chromium

## Run the tests
   npx playwright test

## View the HTML report
   npx playwright show-report

## Tests
| File | Test | Manual case |
|---|---|---|
| tests/login.spec.js | Valid login opens the products page | TC-LOGIN-01 |
| tests/login.spec.js | Wrong password shows an error | TC-LOGIN-03 |
| tests/cart.spec.js | Adding a product updates the cart badge | TC-CART-01 |
| tests/checkout.spec.js | Complete an order | TC-CHK-11 |

## Result
4 tests, 4 passed (Chrome, standard_user)


