describe("Login E2E Test", () => {
  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:5173");

    cy.get('[data-cy="email"]').type("test@example.com");
    cy.get('[data-cy="password"]').type("123456");
    cy.get('[data-cy="login-btn"]').click();

    cy.get('[data-cy="message"]').should(
      "contain.text",
      "Login successful"
    );
  });

  it("shows error for invalid credentials", () => {
    cy.visit("http://localhost:5173");

    cy.get('[data-cy="email"]').type("wrong@test.com");
    cy.get('[data-cy="password"]').type("wrongpass");
    cy.get('[data-cy="login-btn"]').click();

    cy.get('[data-cy="message"]').should(
      "contain.text",
      "Invalid credentials"
    );
  });
});
