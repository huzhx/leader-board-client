describe('Show all players', () => {
  it('shows all players', () => {
    cy.visit(`${Cypress.env('BASE_URL')}`);
    cy.get('[id="leaderboard"]').find('[id="player"]').should('have.length', 18);
    cy.get('#rankingPos');
    cy.get('#name');
    cy.get('#numOfActivities');
    cy.get('#totalPoints');
    cy.get('[id="leaderboard"]').find('[id="leaderboardTitle"]');
    cy.get('#header');
  });
});
