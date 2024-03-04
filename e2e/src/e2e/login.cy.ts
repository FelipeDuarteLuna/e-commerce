import { getTitle } from '../support/app.po';

describe('ecommerce', () => {
  beforeEach(() => cy.visit('/'));

  it('Should Login', () => {

    /*cy.get('a').contains('Fazer Login').click();
    cy.get('input[type="email"]').type('felipinho.luna@gmail.com');
    cy.get('button').contains('Próximo').click();
    cy.get('input[type="password"]').type('MentoriaAngularPro');
    cy.get('button').contains('Entrar').click();*/

    // Custom command example, see `../support/commands.ts` file
    cy.login('felipinho.luna@gmail.com', 'MentoriaAngularPro');

    // should redirect to Home
    cy.url().should('include', '/home');

    // Function helper example, see `../support/app.po.ts` file
    getTitle().contains('Ecommerce');
  });
  
});
