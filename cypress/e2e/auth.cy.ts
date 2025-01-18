describe("auth", () => {
  it("Signs up successfully", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type("sikharulidzeeea34523akhalimariam@gmail.com");
    cy.get('[data-cy="signup-password-input"]').type("mariammariam1");
    cy.get('[data-cy="signup-submit-button"]').click();
    cy.url().should("include", "/login");
  });

  it("Logs in successfully", () => {
    cy.visit("/");

    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="login-email-input"]').type("l.kuchukhidze@gmail.com");
    cy.get('[data-cy="login-password-input"]').type("zxc123321");
    cy.get('[data-cy="login-submit-button"]').click();

    cy.url().should("include", "/products");
  });

  it("Fails to log in with incorrect credentials", () => {
    cy.visit("/");

    cy.get("a").contains("Log in").click();
    cy.get("input[name=email]").type("l.kuchukhidze@gmail.com");
    cy.get("input[name=password]").type("incorrect");
    cy.get("button").contains("Log In").click();

    cy.get('[data-cy="login-error-message"]')
      .should("be.visible")
      .and("not.be.empty");
  });

  it("Logs user out", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="login-email-input"]').type("l.kuchukhidze@gmail.com");
    cy.get('[data-cy="login-password-input"]').type("zxc123321");
    cy.get('[data-cy="login-submit-button"]').click();

    cy.url().should("include", "/products");
    cy.get('[data-cy="log-out"]').click();
    cy.url().should("include", "/login");
  });

  it("Fails to sign up with invalid data", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type("test@gmail.com");
    cy.get('[data-cy="signup-password-input"]').type("1111111");
    cy.get('[data-cy="signup-submit-button"]').click();

    cy.get('[data-cy="signup-error-message"]')
      .should("be.visible")
      .and("not.be.empty");
  });
});
