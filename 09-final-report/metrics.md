# Test Metrics

## Test execution (Round 1)

| Metric | Value |
|---|---|
| Test case rows | 56 |
| Passed | 51 |
| Failed | 5 |
| Blocked / Not Run | 0 / 0 |
| Pass rate (passed / executed) | 91.1% |

## Defects

| Metric | Value |
|---|---|
| Total defects | 5 |
| Open | 5 |
| Fixed / Closed | 0 |
| Defect density (defects per test case) | 0.09 (5 / 56), about 9 per 100 test cases |

### By severity
| Severity | Count | Bugs |
|---|---|---|
| High | 4 | BUG-02, BUG-03, BUG-04, BUG-05 |
| Medium | 1 | BUG-01 |
| Low | 0 | |

### By feature
| Feature | Count | Bugs |
|---|---|---|
| Product listing (REQ-02) | 2 | BUG-01, BUG-05 |
| Checkout (REQ-05) | 2 | BUG-02, BUG-04 |
| Shopping cart (REQ-04) | 1 | BUG-03 |

### By user
| User | Count |
|---|---|
| problem_user | 2 |
| error_user | 2 |
| visual_user | 1 |
| standard_user | 0 |

## Other testing

| Area | Result |
|---|---|
| API testing (Postman) | 6 requests, 17 tests, 17 passed, 0 failed |
| Automation (Playwright) | 4 tests, 4 passed (also re-run in Round 2) |
| Exploratory testing | 3 sessions, 1 open question, 1 unreported observation |
| Retest (Round 2) | 5 of 5 defects still open |