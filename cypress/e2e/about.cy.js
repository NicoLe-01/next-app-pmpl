import History from "@/components/History";

describe('<AboutPage />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<History />);

    // The new page should contain an h1 with "About page"
    cy.get('p').contains('History');

    cy.get('a[href="/"]').should('be.visible');

  });
});