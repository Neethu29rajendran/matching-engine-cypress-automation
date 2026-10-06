describe('Matching Engine Website Automation Assessment', () => {

  it('should navigate to Distribution Processing and verify the solution page', () => {

    // Setting up desktop screen size
    cy.viewport(1440, 900)

    // Helps in Visiting Matching Engine website
    cy.visit('https://www.matchingengine.com/')

    // To Close cookie popup
    cy.contains('Deny', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Click and Open Solutions menu
    cy.contains('Solutions', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Assert the list of Solutions displayed
    cy.contains('Music and copyright solutions')
      .should('be.visible')

    cy.contains('Repertoire management')
      .should('be.visible')

    cy.contains('Repertoire and usage matching')
      .should('be.visible')

    cy.contains('Data ingestion and integration')
      .should('be.visible')

    cy.contains('Distribution processing')
      .should('be.visible')

    cy.contains('Member management')
      .should('be.visible')

    cy.contains('Member self service')
      .should('be.visible')

    // Click Distribution processing
    cy.contains('Distribution processing')
      .should('be.visible')
      .click()

    // Scroll to the "All-in-one solution for scale" section
    cy.contains('All-in-one solution for scale', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')

    // Assert "All-in-one solution for scale" section content
    cy.contains(
      'Imagine an technology solution for collective management organisations that stays ahead of industry trends.'
    ).should('be.visible')

    cy.contains(
      "With Matching Engine's distribution processing solution, you can:"
    ).should('be.visible')


    cy.contains('Distribute royalty payments quickly')
      .should('be.visible')

    cy.contains('Provide full detail of music usage to members')
      .should('be.visible')

    cy.contains('Reduce cost-to-distribution ratios.')
      .should('be.visible')
  })

})
