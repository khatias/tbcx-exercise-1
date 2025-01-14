describe("products", () => {
    it("Creates products successfully", () => {

      cy.visit("/");
      cy.get('[data-cy="login-in"]').click();
      cy.get('[data-cy="login-email-input"]').type("l.kuchukhidze@gmail.com");
      cy.get('[data-cy="login-password-input"]').type("zxc123321");
      cy.get('[data-cy="login-submit-button"]').click();
  

      cy.get('[data-cy="create-products-link"]').click();
  

      cy.get('[data-cy="product-name"]').type("Test Product");
      cy.get('[data-cy="product-price"]').type("3455");
      cy.get('[data-cy="product-brand"]').type("Test Brand");
      cy.get('[data-cy="product-category"]').type("Test Category");
      cy.get('[data-cy="product-image"]').type("Testimageurl");
      cy.get('[data-cy="product-description"]').type("This is a test product.");

      cy.get('[data-cy="product-create-button"]').click();
  

      cy.get('[data-cy="success-message"]').should("be.visible").and("contain", "Product created successfully!");
    });
  
    it("It falies to create product", () => {
     
      cy.visit("/");
      cy.get('[data-cy="login-in"]').click();
      cy.get('[data-cy="login-email-input"]').type("l.kuchukhidze@gmail.com");
      cy.get('[data-cy="login-password-input"]').type("zxc123321");
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="create-products-link"]').click();
  
    
      cy.get('[data-cy="product-name"]').type("Test Product");
      cy.get('[data-cy="product-name"]').type("Test Product");
      cy.get('[data-cy="product-price"]').type("3455");
      cy.get('[data-cy="product-brand"]').type("Test Brand");
      cy.get('[data-cy="product-category"]').type("Test Category");
      cy.get('[data-cy="product-image"]').type("Test image url");
      cy.get('[data-cy="product-description"]').type("This is a test product.");

      cy.get('[data-cy="product-create-button"]').click();
  
   
      cy.get('[data-cy="error-message"]').should("be.visible").and("contain", "Failed to create product. Please try again.");
    });
  });
  