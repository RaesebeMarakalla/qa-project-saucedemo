# Retest Report: Round 2

| Field | Detail |
|---|---|
| Date | 2026-10-19 |
| Tester | Raesebe Marakalla |
| URL | https://www.saucedemo.com |
| Browser | Chrome (latest), Incognito |
| OS | Windows |

## Defect retest results

| Bug ID | Issue | User | Retest result | Status |
|---|---|---|---|---|
| BUG-01 | #1 | problem_user | Still reproduces: all products show the same dog photo | Open |
| BUG-02 | #2 | problem_user | Still reproduces: form entries are not kept in the right fields; console shows a TypeError at onChange | Open |
| BUG-03 | #3 | error_user | Still reproduces: item cannot be removed | Open |
| BUG-04 | #4 | error_user | Still reproduces: checkout continues but the order cannot be finished (stuck on Finish) | Open |
| BUG-05 | #5 | visual_user | Still reproduces: Backpack photo and prices are still wrong | Open |

## Regression run

| Check | Result |
|---|---|
| Playwright suite (4 tests) | 4 passed |

## New observations (not reported as separate defects)
- problem_user: Remove does not work; only some products could be added to the cart.
- error_user: Last Name was cleared during checkout, yet checkout continued and got stuck on Finish (related to BUG-04).
- Dynamic Catalog > Lazy Load: size (L) of Test.allTheThings() T-Shirt (Red) is listed twice. Recorded in exploratory notes, not reported as a bug.