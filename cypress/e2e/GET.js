describe("GET", () => {
  it("GET users request", () => {
    cy.api("GET", "/public/v2/users").as('users')
    cy.get('@users').then(res=>{
        const items = res.body;
        expect(res.status).to.eq(200)
        expect(res.headers['content-type']).to.include('application/json')
        const values = [...new Set(res.body.map((o) => o.status))];
        cy.log(values)
        expect(values.every((val) => val=== 'active'|| val=='inactive')).to.be.true
        expect(res.body.every((o) => o.status === 'active' || o.status === 'inactive')).to.be.true;
        //expect(items)
    });
  });


});
