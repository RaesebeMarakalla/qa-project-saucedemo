# Test Execution Report: Round 1

| Field | Detail |
|---|---|
| Date | (12/10/2026) |
| Tester | Raesebe Marakalla |
| Build / URL | https://www.saucedemo.com |
| Browser | Chrome (latest), Incognito |
| OS | (e.g., Windows 11) |

## Results

| Test ID | Title | Expected | Actual | Status | Evidence | Notes |
|---|---|---|---|---|---|---|
| TC-LOGIN-01 | Login with valid credentials | Products page opens | Products page opened | Pass | | |
| TC-LOGIN-02 | Non-existent username | Error: do not match any user | Not run | Not run | screenshots/TC-LOGIN-02.png | |
| TC-LOGIN-03 | Wrong password | Error: do not match any user | Not run | Not run | screenshots/TC-LOGIN-03.png | |
| TC-CHK-01 | All checkout fields empty | Error: First Name is required | Error: First Name is required | Pass | Browser capture in chat | |
| TC-CHK-02 | Only postal code filled | Error: First Name is required | Error: First Name is required | Pass | Browser capture in chat | |
| TC-CHK-03 | Last name only | Error: First Name is required | Error: First Name is required | Pass | Browser capture in chat | |
| TC-CHK-04 | Last name and postal code filled | Error: First Name is required | Error: First Name is required | Pass | Browser capture in chat | |
| TC-CHK-05 | First name only | Error: Last Name is required | Error: Last Name is required | Pass | Browser capture in chat | |
| TC-CHK-06 | First name and postal code filled | Error: Last Name is required | Error: Last Name is required | Pass | Browser capture in chat | |
| TC-CHK-07 | First and last names filled | Error: Postal Code is required | Error: Postal Code is required | Pass | Browser capture in chat | |
| TC-CHK-08 | All checkout fields valid | Overview page opens | Overview opened for Sauce Labs Backpack ($29.99); total was $32.39 | Pass | Browser capture in chat | |
| TC-CHK-09 | Overview shows correct items | Correct items listed | Backpack and Bike Light shown; both quantity 1 | Pass | Not captured | |
| TC-CHK-10 | Totals are calculated correctly | Total equals item total plus tax | $39.98 item total + $3.20 tax = $43.18 total | Pass | Not captured | |
| TC-CHK-11 | Complete the order | "Thank you for your order" shown | "Thank you for your order!" shown | Pass | Not captured | |
| TC-CHK-12 | Cart empty after order | Cart badge gone; products page shown | Back Home opened Products; cart badge absent | Pass | Not captured | |
| TC-CHK-13 | Cancel on information page | Returns to cart page | Returned to Your Cart; 1 item remained | Pass | Not captured | |
| TC-CHK-14 | Cancel on overview page | Returns to products page | Returned to Products; cart badge still showed 1 | Pass | Not captured | |
| TC-CHK-15 | Checkout with empty cart | Record behavior | Checkout was allowed and opened "Checkout: Your Information" with an empty cart; no warning or error was shown | Pass | Not captured | |
| TC-CHK-16 | Special characters in fields | Accepted or rejected; no crash | `<b>test</b>` and `!@#$%` with postal code 12345 were accepted; Overview opened without an error | Pass | Not captured | |
| TC-CHK-17 | Very long field values | No crash or layout break | 200 characters entered in each field were accepted; Overview opened without a crash | Pass | Not captured | |
| TC-CHK-18 | Spaces only in fields | Record behavior | Three spaces in each field were accepted; Overview opened without an error | Pass | Not captured | |
| TC-PROD-01 | Count products and verify product information | 6 products, each with image, name, description, and price | 6 products; all 6 had an image, name, description, and price | Pass | Not captured | |
| TC-PROD-02 | Open a product detail page | Detail matches selected product | Sauce Labs Backpack matched; price was $29.99 on both pages | Pass | Not captured | |
| TC-SORT-01 | Sort products by name A to Z | Names in ascending alphabetical order | Backpack, Bike Light, Bolt T-Shirt, Fleece Jacket, Onesie, Test.allTheThings() T-Shirt (Red) | Pass | Not captured | |
| TC-SORT-02 | Sort products by name Z to A | Names in descending alphabetical order | Test.allTheThings() T-Shirt (Red), Onesie, Fleece Jacket, Bolt T-Shirt, Bike Light, Backpack | Pass | Not captured | |
| TC-SORT-03 | Sort products by price low to high | Prices in ascending order | $7.99, $9.99, $15.99, $15.99, $29.99, $49.99 | Pass | Not captured | |
| TC-SORT-04 | Sort products by price high to low | Prices in descending order | $49.99, $29.99, $15.99, $15.99, $9.99, $7.99 | Pass | Not captured | |
| TC-OUT-01 | Log out from the menu | Login page opens | Logout returned to the login page | Pass | Not captured | |
| TC-OUT-02 | Press browser Back after logout | Authenticated session is not restored | Login page remained visible; inventory access required login | Pass | Not captured | |
| TC-CART-01 | Add one product | Button changes to Remove; badge shows 1 | Button changed to Remove; badge showed 1 | Pass | Not captured | |
| TC-CART-02 | Add multiple products | Badge shows 3 | Badge showed 3 after adding three products | Pass | Not captured | |
| TC-CART-03 | Remove one of three products | Badge shows 2 | Badge showed 2 after removal | Pass | Not captured | |
| TC-CART-04 | Remove the last product | Badge disappears | Cart badge disappeared after removal | Pass | Not captured | |
| TC-CART-05 | Verify products in cart | Both items show name, quantity, and price | Backpack and Bike Light shown; each quantity was 1 with its price | Pass | Not captured | |
| TC-CART-06 | Remove an item from the cart page | Item disappears and badge updates | One cart row remained; badge showed 1 | Pass | Not captured | |
| TC-CART-07 | Verify cart persists across pages | Badge remains 2 after product detail and return | Backpack detail opened; after browser Back the badge showed 2 | Pass | Not captured | |
| TC-CART-08 | Continue shopping from cart | Products page opens; cart unchanged | Products page opened; badge remained 2 | Pass | Not captured | |
| TC-CART-09 | Verify cart after logout and login | Record whether cart persists | Cart persisted; badge showed 2 after logging in again | Pass | Not captured | |
| TC-CART-10 | Reset App State | Cart empties | Cart badge disappeared after reset | Pass | Not captured | |

## Summary

| Metric | Count |
|---|---|
| Total test cases | 39 |
| Passed | 37 |
| Failed | 0 |
| Blocked | 0 |
| Pass percentage | 94.87% |