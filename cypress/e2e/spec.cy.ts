describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="history"]').click();

    // The new page should contain an h1 with "About page"
    cy.get("p").contains("History");
  });
});
