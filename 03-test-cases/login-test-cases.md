# Login Test Cases (REQ-01)

**Techniques:** Equivalence Partitioning, Boundary Value Analysis
**Test data:** valid user `standard_user` / `secret_sauce`
**Note:** SauceDemo defines no length limits, so BVA cases record observed behavior.

| ID | Req | Technique | Title | Preconditions | Steps | Test Data | Expected Result | Priority |
|---|---|---|---|---|---|---|---|---|
| TC-LOGIN-01 | REQ-01 | EP (valid) | Login with valid credentials | On login page | 1. Enter username 2. Enter password 3. Click Login | standard_user / secret_sauce | Products page opens | High |
| TC-LOGIN-02 | REQ-01 | EP (invalid username) | Login with non-existent username | On login page | Enter data, click Login | invalid_user / secret_sauce | Error: username and password do not match any user | High |
| TC-LOGIN-03 | REQ-01 | EP (invalid password) | Login with wrong password | On login page | Enter data, click Login | standard_user / wrong_pass | Error: username and password do not match any user | High |
| TC-LOGIN-04 | REQ-01 | EP (empty) | Login with both fields empty | On login page | Click Login | (empty) / (empty) | Error: Username is required | High |
| TC-LOGIN-05 | REQ-01 | EP (empty) | Login with empty username | On login page | Enter password only, click Login | (empty) / secret_sauce | Error: Username is required | High |
| TC-LOGIN-06 | REQ-01 | EP (empty) | Login with empty password | On login page | Enter username only, click Login | standard_user / (empty) | Error: Password is required | High |
| TC-LOGIN-07 | REQ-01 | EP (blocked user) | Login as locked-out user | On login page | Enter data, click Login | locked_out_user / secret_sauce | Error: user has been locked out | High |
| TC-LOGIN-08 | REQ-01 | EP (case) | Username is case-sensitive | On login page | Enter data, click Login | Standard_User / secret_sauce | Login rejected with error | Medium |
| TC-LOGIN-09 | REQ-01 | EP (case) | Password is case-sensitive | On login page | Enter data, click Login | standard_user / Secret_Sauce | Login rejected with error | Medium |
| TC-LOGIN-10 | REQ-01 | BVA (min+1) | Login with 1-character values | On login page | Enter data, click Login | a / b | Error: do not match any user | Low |
| TC-LOGIN-11 | REQ-01 | BVA (max) | Login with 100-character username | On login page | Paste 100 characters, click Login | 100 x "a" / secret_sauce | Error shown, no crash or layout break | Low |
| TC-LOGIN-12 | REQ-01 | BVA (max) | Login with 1000-character username | On login page | Paste 1000 characters, click Login | 1000 x "a" / secret_sauce | Error shown, no crash | Low |
| TC-LOGIN-13 | REQ-01 | BVA (space) | Username with trailing space | On login page | Enter data, click Login | "standard_user " / secret_sauce | Record behavior (accepted or rejected) | Medium |
| TC-LOGIN-14 | REQ-01 | EP (special chars) | Username with special characters | On login page | Enter data, click Login | `<script>`, `' OR 1=1` / secret_sauce | Error shown, no script runs | Medium |
| TC-LOGIN-15 | REQ-01 | EP (valid, other user) | Login with each other user | On login page | Log in as problem_user, error_user, visual_user, performance_glitch_user | Each user / secret_sauce | Products page opens for each | Medium |