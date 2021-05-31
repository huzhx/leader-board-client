describe('Show all players', () => {
  it('shows all players', () => {
    cy.visit(`${Cypress.env('BASE_URL')}`);
    cy.get('[id="leaderboard"]').find('[id="player"]').should('have.length', 18);
    cy.get('#name');
    cy.get('#numOfActivities');
    cy.get('#totalPoints');
  });
});
