describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`, { fixtures: "articles" })
    cy.visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })


  it('should render a header with the site\'s name and a link to the base url', () => {
    cy.get('.header')
      .contains('News, of the Latest Type')
      .get('.header > a')
      .should('have.attr', 'href', '/')
  })

  it('should render a list of articles on page load', () => {
    cy.get('.homepage > .article-list')
      .get(':nth-child(1)')
      .get('.title')
      .get('.section')
      .get(':nth-child(2)')
      .get('.title')
      .get('.section')

  })

  it('should display the headline, section, and a link to full article', () => {
    cy.get('.homepage > .article-list >:nth-child(1)')
      .get('.section')
      .contains('Section: us, politics')
      .get('a')
      .should('have.attr', 'href', '/')
  })
  it('should have a sidebar with options to sort articles by', () => {
    cy.get('.homepage > .sort-menu')
      .get(':nth-child(1)')
      .contains('Us')
  })

  it('should sort articles when a radio button is clicked', () => {
    cy.get('.homepage > .sort-menu')
      .get(':nth-child(3) > label > input')
      .click()
    cy.get('.homepage > .article-list >:nth-child(1)')
      .get('.section')
      .contains('Section: sports, baseball')

  })
})