describe("auth", () => {
    it("Signs up successfully", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type("davit.mchedlishvili.2396@gmail.com");
    cy.get('[data-cy="signup-password-input"]').type("davitdavit1");
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

  it("Fails to log in", () => {
    cy.visit("/");

    cy.get("a").contains("Log in").click();
    cy.get("input[name=email]").type("l.kuchukhidze@gmail.com");
    cy.get("input[name=password]").type("incorrect");
    cy.get("button").contains("Log In").click();

    cy.get('[data-cy="login-error-message"]')
      .should("be.visible")
      .and("not.be.empty");
  });

  it("logs user out", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="login-email-input"]').type("l.kuchukhidze@gmail.com");
    cy.get('[data-cy="login-password-input"]').type("zxc123321");
    cy.get('[data-cy="login-submit-button"]').click();

    cy.url().should("include", "/products");
    cy.get('[data-cy="log-out"]').click();
    cy.url().should("include", "/login");
  });

  it("Signs up successfully", () => {
    cy.visit("/");
    cy.get('[data-cy="login-in"]').click();
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type("davit.mchedlishvili.2396@gmail.com");
    cy.get('[data-cy="signup-password-input"]').type("davitdavit1");
    cy.get('[data-cy="signup-submit-button"]').click();
    cy.url().should("include", "/login");
  });

  it("Fails up successfully", () => {
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
