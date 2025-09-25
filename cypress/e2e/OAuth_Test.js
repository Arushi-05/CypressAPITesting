describe("GET API request test", () => {
  it("GET METHOD", () => {
    cy.api("GET", "/public/v2/users")
      .its("status")
      .should("eq", 200);
  });
})