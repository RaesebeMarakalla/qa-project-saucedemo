# Test Execution Report: Round 1

| Field | Detail |
|---|---|
| Date | 2026-10-12 |
| Tester | Raesebe Marakalla |
| Build / URL | https://www.saucedemo.com |
| Browser | Chrome (latest), Incognito |
| OS | Windows |

## Results

| Test ID | Title | Expected | Actual | Status | Evidence | Notes |
|---|---|---|---|---|---|---|
| TC-LOGIN-01 | Login with valid credentials | Products page opens | Products page opened | Pass | | |
| TC-LOGIN-02 | Non-existent username | Error: do not match any user | Error shown: "Epic sadface: Username and password do not match any user in this service". User stayed on login page | Pass | screenshots/TC-LOGIN-02.png | Error text slightly clipped at top of red box (minor visual) |
| TC-LOGIN-03 | Wrong password | Error: do not match any user | Error shown: "Epic sadface: Username and password do not match any user in this service". User stayed on login page | Pass | screenshots/TC-LOGIN-03.png | Error text slightly clipped at top of red box (minor visual) |
| TC-LOGIN-04 | Both fields empty | Error: Username is required | Error shown: "Epic sadface: Username is required". User stayed on login page | Pass | screenshots/TC-LOGIN-04.png | |
| TC-LOGIN-05 | Empty username | Error: Username is required | Error shown: "Epic sadface: Username is required". Password was filled in. User stayed on login page | Pass | screenshots/TC-LOGIN-05.png | |
| TC-LOGIN-06 | Empty password | Error: Password is required | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-07 | Locked-out user | Error: user has been locked out | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-08 | Username case-sensitive | Login rejected | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-09 | Password case-sensitive | Login rejected | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-10 | 1-character values | Error shown | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-11 | 100-character username | Error, no layout break | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-12 | 1000-character username | Error, no crash | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-13 | Trailing space in username | Record behavior | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-14 | Special characters | Error, no script runs | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-LOGIN-15 | Other users log in | Products page opens | Result matched expected result (confirmed by tester) | Pass | Not captured | |
| TC-PROD-01 (problem_user) | Product images | Each product shows its own image | All 6 products show the same dog photo | Fail | ../05-bug-reports/screenshots/BUG-01.png | BUG-01 (#1) |
| TC-CHK-08 (problem_user) | Checkout with valid data | Overview page opens | Last Name entry appears in First Name box; "Error: Last Name is required" | Fail | ../05-bug-reports/screenshots/BUG-02.png | BUG-02 (#2) |
| TC-CART-03 (error_user) | Remove item from cart | Item removed; badge goes down | Item cannot be removed; console shows "Failed to remove item from cart" | Fail | ../05-bug-reports/screenshots/BUG-03.png | BUG-03 (#3) |
| TC-CHK-11 (error_user) | Complete the order | "Thank you for your order" shown | Page stays on overview; console error | Fail | See BUG-04.md | BUG-04 (#4) |
| TC-PROD-01 (visual_user) | Product images and prices | Own image and normal price on every load | Backpack shows dog photo; prices differ and change between loads | Fail | ../05-bug-reports/screenshots/BUG-05.png | BUG-05 (#5) |
| TC-CHK-01 | All checkout fields empty | Error: First Name is required | Error: First Name is required | Pass | Not captured | |
| TC-CHK-02 | Only postal code filled | Error: First Name is required | Error: First Name is required | Pass | Not captured | |
| TC-CHK-03 | Last name only | Error: First Name is required | Error: First Name is required | Pass | Not captured | |
| TC-CHK-04 | Last name and postal code filled | Error: First Name is required | Error: First Name is required | Pass | Not captured | |
| TC-CHK-05 | First name only | Error: Last Name is required | Error: Last Name is required | Pass | Not captured | |
| TC-CHK-06 | First name and postal code filled | Error: Last Name is required | Error: Last Name is required | Pass | Not captured | |
| TC-CHK-07 | First and last names filled | Error: Postal Code is required | Error: Postal Code is required | Pass | Not captured | |
| TC-CHK-08 | All checkout fields valid | Overview page opens | Overview opened for Sauce Labs Backpack ($29.99); total was $32.39 | Pass | Not captured | standard_user |
| TC-CHK-09 | Overview shows correct items | Correct items listed | Backpack and Bike Light shown; both quantity 1 | Pass | Not captured | |
| TC-CHK-10 | Totals are calculated correctly | Total equals item total plus tax | $39.98 item total + $3.20 tax = $43.18 total | Pass | Not captured | |
| TC-CHK-11 | Complete the order | "Thank you for your order" shown | "Thank you for your order!" shown | Pass | Not captured | standard_user |
| TC-CHK-12 | Cart empty after order | Cart badge gone; products page shown | Back Home opened Products; cart badge absent | Pass | Not captured | |
| TC-CHK-13 | Cancel on information page | Returns to cart page | Returned to Your Cart; 1 item remained | Pass | Not captured | |
| TC-CHK-14 | Cancel on overview page | Returns to products page | Returned to Products; cart badge still showed 1 | Pass | Not captured | |
| TC-CHK-15 | Checkout with empty cart | Record behavior | Checkout was allowed and opened "Checkout: Your Information" with an empty cart; no warning shown | Pass | Not captured | Possible defect: confirm |
| TC-CHK-16 | Special characters in fields | Accepted or rejected; no crash | `<b>test</b>` and `!@#$%` with postal code 12345 were accepted; Overview opened without an error | Pass | Not captured | |
| TC-CHK-17 | Very long field values | No crash or layout break | 200 characters in each field accepted; Overview opened without a crash | Pass | Not captured | |
| TC-CHK-18 | Spaces only in fields | Record behavior | Three spaces in each field accepted; Overview opened without an error | Pass | Not captured | |
| TC-PROD-01 | Count products and verify product information | 6 products, each with image, name, description, price | 6 products; all had image, name, description and price | Pass | Not captured | standard_user |
| TC-PROD-02 | Open a product detail page | Detail matches selected product | Sauce Labs Backpack matched; price $29.99 on both pages | Pass | Not captured | |
| TC-SORT-01 | Sort by name A to Z | Ascending alphabetical order | Backpack, Bike Light, Bolt T-Shirt, Fleece Jacket, Onesie, Test.allTheThings() T-Shirt (Red) | Pass | Not captured | |
| TC-SORT-02 | Sort by name Z to A | Descending alphabetical order | Test.allTheThings() T-Shirt (Red), Onesie, Fleece Jacket, Bolt T-Shirt, Bike Light, Backpack | Pass | Not captured | |
| TC-SORT-03 | Sort by price low to high | Ascending prices | $7.99, $9.99, $15.99, $15.99, $29.99, $49.99 | Pass | Not captured | |
| TC-SORT-04 | Sort by price high to low | Descending prices | $49.99, $29.99, $15.99, $15.99, $9.99, $7.99 | Pass | Not captured | |
| TC-OUT-01 | Log out from the menu | Login page opens | Logout returned to the login page | Pass | Not captured | |
| TC-OUT-02 | Press browser Back after logout | Session not restored | Login page shown; inventory access required login | Pass | screenshots/TC-OUT-02.png | |
| TC-CART-01 | Add one product | Button changes to Remove; badge shows 1 | Button changed to Remove; badge showed 1 | Pass | Not captured | standard_user |
| TC-CART-02 | Add multiple products | Badge shows 3 | Badge showed 3 | Pass | Not captured | |
| TC-CART-03 | Remove one of three products | Badge shows 2 | Badge showed 2 after removal | Pass | Not captured | standard_user |
| TC-CART-04 | Remove the last product | Badge disappears | Badge disappeared | Pass | Not captured | |
| TC-CART-05 | Verify products in cart | Items show name, quantity, price | Backpack and Bike Light shown; quantity 1 each, with price | Pass | Not captured | |
| TC-CART-06 | Remove an item from the cart page | Item disappears; badge updates | One cart row remained; badge showed 1 | Pass | Not captured | |
| TC-CART-07 | Cart persists across pages | Badge stays 2 after detail page and return | After browser Back the badge showed 2 | Pass | Not captured | |
| TC-CART-08 | Continue shopping from cart | Products page opens; cart unchanged | Products page opened; badge remained 2 | Pass | Not captured | |
| TC-CART-09 | Cart after logout and login | Record whether cart persists | Cart persisted; badge showed 2 after login | Pass | Not captured | |
| TC-CART-10 | Reset App State | Cart empties | Badge disappeared after reset | Pass | Not captured | |

## Summary

| Metric | Count |
|---|---|
| Total test case rows | 56 |
| Executed | 56 |
| Passed | 51 |
| Failed | 5 |
| Blocked | 0 |
| Not Run | 0 |
| Pass percentage (passed / executed) | 91.1% |

Note: "Not captured" means no screenshot was saved. Fail rows use problem_user, error_user or visual_user.