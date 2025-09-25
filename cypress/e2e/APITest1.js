describe("GET API request test", () => {
  it("GET METHOD", () => {
    cy.api("GET", "https://fakestoreapi.com/products")
      .its("status")
      .should("eq", 200);
  });

  it("POST METHOD", () => {
    cy.api({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: { title: "Blah", id: "77", body: "some body stuff" },
    })
      .its("status")
      .should("eq", 201);
  });

  it("PUT METHOD", () => {
    cy.api({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/77",
      body: { title: "foo", id: "77", body: "bar", userId: "1" },
    })
      .its("status")
      .should("eq", 200);
  });

  it("DELETE METHOD", () => {
    cy.api({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("eq", 200);
  });

  
});
