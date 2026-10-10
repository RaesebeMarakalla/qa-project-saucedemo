# Cart and Checkout Test Cases (REQ-04, REQ-05)

**Techniques:** Decision Table, State Transition, Error Guessing
**Test data:** standard_user / secret_sauce
**Note:** Expected results marked "record" must be filled in from observed behavior.

## Cart (REQ-04), State Transition

| ID | Req | Technique | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|---|---|
| TC-CART-01 | REQ-04 | State: empty to items | Add one product | Logged in, cart empty | Click Add to cart on one product | Button changes to Remove; badge shows 1 | High |
| TC-CART-02 | REQ-04 | State: items to items | Add multiple products | Logged in, cart empty | Add 3 products | Badge shows 3 | High |
| TC-CART-03 | REQ-04 | State: items to items | Remove one of several items | Cart has 3 items | Click Remove on one | Badge shows 2 | High |
| TC-CART-04 | REQ-04 | State: items to empty | Remove the last item | Cart has 1 item | Click Remove | Badge disappears | High |
| TC-CART-05 | REQ-04 | State | Cart page lists items | Cart has 2 items | Click cart icon | Both items shown with name, quantity, price | High |
| TC-CART-06 | REQ-04 | State | Remove item from cart page | Cart page open with items | Click Remove | Item disappears, badge updates | Medium |
| TC-CART-07 | REQ-04 | State | Cart persists across pages | Cart has 2 items | Open a product detail page, go back | Badge still shows 2 | Medium |
| TC-CART-08 | REQ-04 | State | Continue Shopping | On cart page | Click Continue Shopping | Products page opens, cart unchanged | Medium |
| TC-CART-09 | REQ-04 | State | Cart persists after logout and login | Cart has 2 items | Logout, login again | Record behavior | Medium |
| TC-CART-10 | REQ-04 | State | Reset App State | Cart has items | Menu, Reset App State | Cart empties | Low |

## Checkout form (REQ-05), Decision Table

| ID | Req | Technique | Title | Test Data (First / Last / Postal) | Expected Result | Priority |
|---|---|---|---|---|---|---|
| TC-CHK-01 | REQ-05 | DT R1 | All fields empty | (empty) / (empty) / (empty) | Error: First Name is required | High |
| TC-CHK-02 | REQ-05 | DT R2 | Only postal code filled | (empty) / (empty) / 12345 | Error: First Name is required | High |
| TC-CHK-03 | REQ-05 | DT R3 | Last name only | (empty) / Doe / (empty) | Error: First Name is required | Medium |
| TC-CHK-04 | REQ-05 | DT R4 | Last name and postal filled | (empty) / Doe / 12345 | Error: First Name is required | Medium |
| TC-CHK-05 | REQ-05 | DT R5 | First name only | John / (empty) / (empty) | Error: Last Name is required | High |
| TC-CHK-06 | REQ-05 | DT R6 | First and postal filled | John / (empty) / 12345 | Error: Last Name is required | Medium |
| TC-CHK-07 | REQ-05 | DT R7 | First and last filled | John / Doe / (empty) | Error: Postal Code is required | High |
| TC-CHK-08 | REQ-05 | DT R8 | All fields valid | John / Doe / 12345 | Overview page opens | High |

## Checkout flow (REQ-05), State Transition and Error Guessing

| ID | Req | Technique | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|---|---|
| TC-CHK-09 | REQ-05 | State | Overview shows correct items | Cart has 2 items, valid info entered | Review overview page | Correct items listed | High |
| TC-CHK-10 | REQ-05 | State | Totals are calculated correctly | Cart has 2 items | Compare item total + tax with total | Total = item total + tax | High |
| TC-CHK-11 | REQ-05 | State | Complete the order | On overview page | Click Finish | "Thank you for your order" shown | High |
| TC-CHK-12 | REQ-05 | State | Cart empty after order | Order completed | Click Back Home | Cart badge gone, products page shown | High |
| TC-CHK-13 | REQ-05 | State | Cancel on information page | On checkout info page | Click Cancel | Returns to cart page | Medium |
| TC-CHK-14 | REQ-05 | State | Cancel on overview page | On overview page | Click Cancel | Returns to products page | Medium |
| TC-CHK-15 | REQ-05 | State (invalid) | Checkout with empty cart | Logged in, cart empty | Open cart, click Checkout | Record behavior (blocked or allowed) | High |
| TC-CHK-16 | REQ-05 | Error guessing | Special characters in fields | On checkout info page | Enter `<b>test</b>`, `!@#$%` | Accepted or rejected, no crash. Record | Low |
| TC-CHK-17 | REQ-05 | Error guessing | Very long values | On checkout info page | Enter 200 characters in each field | No crash or layout break. Record | Low |
| TC-CHK-18 | REQ-05 | Error guessing | Spaces only in fields | On checkout info page | Enter spaces in all fields | Record behavior | Medium |