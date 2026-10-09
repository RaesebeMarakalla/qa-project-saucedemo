# Requirements: SauceDemo

> Note: SauceDemo has no official specification. These requirements are derived
> from observing the application's expected behavior.

## REQ-01 Login
**User story:** As a registered user, I want to log in with my username and
password so that I can access the products.

**Acceptance criteria:**
- AC1: Valid username and password redirect the user to the products page.
- AC2: Invalid credentials show an error message and keep the user on the login page.
- AC3: Empty username shows "Username is required".
- AC4: Empty password shows "Password is required".
- AC5: A locked-out user sees a "user has been locked out" message.
- AC6: Username is case-sensitive.

## REQ-02 Product Listing
**User story:** As a user, I want to see all products with name, price, image
and description so that I can choose what to buy.

**Acceptance criteria:**
- AC1: 6 products are displayed after login.
- AC2: Each product shows image, name, description, price and an Add to cart button.
- AC3: Clicking a product name opens its detail page.

## REQ-03 Product Sorting
**User story:** As a user, I want to sort products so that I can find items faster.

**Acceptance criteria:**
- AC1: Name (A to Z) sorts alphabetically ascending.
- AC2: Name (Z to A) sorts alphabetically descending.
- AC3: Price (low to high) sorts by price ascending.
- AC4: Price (high to low) sorts by price descending.

## REQ-04 Shopping Cart
**User story:** As a user, I want to add and remove products from my cart so
that I can control what I buy.

**Acceptance criteria:**
- AC1: Clicking Add to cart changes the button to Remove and increases the cart badge count.
- AC2: Clicking Remove decreases the badge count.
- AC3: The cart page lists all added items with name, quantity and price.
- AC4: Cart contents persist while navigating between pages.
- AC5: Continue Shopping returns to the products page.

## REQ-05 Checkout
**User story:** As a user, I want to enter my details and complete my order so
that I can purchase products.

**Acceptance criteria:**
- AC1: Checkout requires first name, last name and postal code.
- AC2: Missing any field shows the matching error message.
- AC3: The overview page shows items, item total, tax and total.
- AC4: Finish displays "Thank you for your order".
- AC5: Cancel returns the user to the cart or products page.
- AC6: After a completed order, the cart is empty.

## REQ-06 Logout
**User story:** As a user, I want to log out so that my session is closed.

**Acceptance criteria:**
- AC1: Logout via the menu returns to the login page.
- AC2: After logout, going back or opening the products URL directly does not show products.