describe('My First Test', function() {
  it('Visits the HappyTC', function() {
    cy.visit('/');
    cy.contains('Add player').click();
    cy.get('playerForm').within(() => {
      cy.get('name').type('dummyName');
      cy.get('lastname').type('lastname');
      cy.get('gender').select('male');
    });
  });
});
