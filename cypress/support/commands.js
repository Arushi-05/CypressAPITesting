// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { faker } from '@faker-js/faker';

Cypress.Commands.add('fakeUser', () => {
  // faker seed is optional—use it for deterministic data in CI
  // faker.seed(12345);

  const first = faker.person.firstName();
  const last  = faker.person.lastName();
  const name  = `${first} ${last}`;
  // Use a non-routable test domain so you never hit real mailboxes
  const email = faker.internet.email({
    firstName: first,
    lastName : last,
    provider : 'example.testapi',   // or 'example.com'
  }).toLowerCase();

  return cy.wrap({ name, email });
});

export {};