// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/', () => {

    })
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update running total when number buttons are pessed', () => {
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '13')
  });

  it('should update the display with the result of arithmetic operations', () => {
    cy.get('#number4').click();
    cy.get ('#operator_add').click();
    cy.get('#number5').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '9');
  });

  it('should allow multiply operations chained together', () => {
    cy.get('#number7').click();
    cy.get ('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get ('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8');
  });

  it('should return decimal 4.5 when 9 is divided by 2', () => {
    cy.get('#number9').click();
    cy.get ('#operator_divide').click();
    cy.get('#number2').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '4.5');
  });

  it('should return decimal 6172.5 when 12345 is divided by 2', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get ('#operator_divide').click();
    cy.get('#number2').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '6172.5');
  });

  it('should return negative 5 when 10 is subtracted from 15', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get ('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '-5');
  });

  it('should return error when dividing a number by zero', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get ('#operator_divide').click();
    cy.get('#number0').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', 'Error');
  });

})
