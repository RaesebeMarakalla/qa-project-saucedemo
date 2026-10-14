# BUG-03: Cart removal and checkout completion fail for error_user

| Field | Detail |
|---|---|
| Bug ID | BUG-03 |
| Reported by | Raesebe Marakalla |
| Date | 14/10/2026 |
| Requirement | Cart management and checkout |
| Severity | High |
| Priority | High |
| Status | Open |

## Environment
- URL: https://www.saucedemo.com/
- User: `error_user` / `secret_sauce`
- Browser: Chrome
- OS: Windows

## Steps to Reproduce
1. Log in as `error_user`.
2. Add multiple products to the cart.
3. Click **Remove** for a product on the products page.
4. Proceed to checkout, enter valid customer information, and click **Continue**.
5. On the checkout overview, click **Finish**.

## Expected Result
- Removing a product removes it from the cart and updates the cart badge.
- Clicking **Finish** completes the order and displays the confirmation page.

## Actual Result
- Clicking **Remove** for Sauce Labs Bike Light left its button as **Remove** and the cart badge unchanged at 6. A JavaScript error was reported.
- Clicking **Finish** left the page on the checkout overview instead of showing the order confirmation. A JavaScript `TypeError` was reported.

## Notes
The checkout form accepted the information and advanced to the checkout overview. The observed defects were specific to `error_user`.
