# Test Scenarios: SauceDemo

| Scenario ID | Requirement | Scenario | Type |
|---|---|---|---|
| TS-01 | REQ-01 | Verify login with valid credentials | Positive |
| TS-02 | REQ-01 | Verify login with invalid username | Negative |
| TS-03 | REQ-01 | Verify login with invalid password | Negative |
| TS-04 | REQ-01 | Verify login with empty fields | Negative |
| TS-05 | REQ-01 | Verify locked-out user cannot log in | Negative |
| TS-06 | REQ-01 | Verify username and password case sensitivity | Negative |
| TS-07 | REQ-02 | Verify all products display with correct details | Positive |
| TS-08 | REQ-02 | Verify product detail page opens | Positive |
| TS-09 | REQ-03 | Verify each of the 4 sort options | Positive |
| TS-10 | REQ-04 | Verify adding one product to cart | Positive |
| TS-11 | REQ-04 | Verify adding multiple products to cart | Positive |
| TS-12 | REQ-04 | Verify removing a product from cart | Positive |
| TS-13 | REQ-04 | Verify cart persists after navigation | Positive |
| TS-14 | REQ-05 | Verify checkout with valid information | Positive |
| TS-15 | REQ-05 | Verify checkout with missing fields | Negative |
| TS-16 | REQ-05 | Verify order overview totals are calculated correctly | Positive |
| TS-17 | REQ-05 | Verify checkout with an empty cart | Negative |
| TS-18 | REQ-05 | Verify cancel during checkout | Positive |
| TS-19 | REQ-06 | Verify logout | Positive |
| TS-20 | REQ-06 | Verify products page is not accessible after logout | Negative |
| TS-21 | REQ-01 to 05 | Verify behavior with problem_user | Exploratory |
| TS-22 | REQ-01 to 05 | Verify behavior with performance_glitch_user | Non-functional |