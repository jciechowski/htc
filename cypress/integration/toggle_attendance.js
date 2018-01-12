describe('Toggle attendance switch', function() {
  it('should change total frequency', function() {
    cy.visit('/events');
    cy
      .get('.card-text')
      .first()
      .next()
      .then(card => {
        const initialFrequency = card.text();
        cy
          .get('mat-slide-toggle')
          .first()
          .click();
        cy
          .get('.card-text')
          .first()
          .next()
          .then(actualCard => {
            const actualFrequency = actualCard.text();
            expect(initialFrequency).to.not.equal(actualFrequency);
          });
      });
  });
});
