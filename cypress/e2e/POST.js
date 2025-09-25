import { faker } from "@faker-js/faker";
describe("POST", () => {
  let token =
    "584b1a54f7750801a945eabdbce201a5a22b6482d8d0568feb7a3b15cdedc7c0";
  it("POST users request", () => {
    cy.fakeUser().then(({ name, email }) => {
      const gender = faker.helpers.arrayElement(["female", "male"]);
      const status = faker.helpers.arrayElement(["active", "inactive"]);
      cy.api({
        method: "POST",
        url: "/public/v2/users",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: {
          name,
          email,
          gender,
          status,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("name", name);
        expect(response.body).to.have.property("gender", gender);
        expect(response.body).to.have.property("status", status);
        expect(response.body).to.have.property("email", email);
        expect(response.headers["content-type"]).to.include("application/json");
        //const id = String(response.body.id);
        cy.api({
          method: "GET",
          url: `/public/v2/users/${response.body.id}`,
          headers: {
            Authorization: "Bearer " + token,
          },
        }).as("users");
        cy.get("@users").then((res) => {
          const items = res.body;
          expect(res.status).to.eq(200);
          expect(res.headers["content-type"]).to.include("application/json");
          expect(res.body).to.include({
            id: res.body.id,
            email: email.toLowerCase(),
            name: name,
            status: status,
            gender: gender,
          });
        });
      });
    });
  });
});
