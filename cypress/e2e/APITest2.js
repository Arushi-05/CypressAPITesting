describe("Product Scenarios", () => {
  it("POST METHOD", () => {
    cy.api({
      method: "POST",
      url: "https://fakestoreapi.com/products",
      body: {
        id: 0,
        title: "Pro Product",
        price: 10,
        description: "my product is useful",
        category: "Pros",
        image: "http://example.com",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("id", 21);
    });
  });

  it("Get a single product", () => {
    const requestBody = {
      id: 2,
    };
    cy.api({
      method: "GET",
      url: `https://fakestoreapi.com/products/${requestBody.id}`,
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 2);
      expect(response.body).to.have.property("price");
      expect(response.body).to.have.property("category");
    });
  });

  it("Update a product", () => {
    const requestBody = {
      id: 2,
      title: "this got updated",
      price: 0.1111,
      description: "updated description",
      category: "updated to Pro max",
      image: "http://examplee.com",
    };
    cy.api({
      method: "PUT",
      url: `https://fakestoreapi.com/products/${requestBody.id}`,
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", requestBody.id);
      expect(response.body).to.have.property("price",requestBody.price);
      expect(response.body).to.have.property("category",requestBody.category);
      expect(response.body).to.have.property("description",requestBody.description);
      expect(response.body).to.have.property("title",requestBody.title);
    });
  });
});
