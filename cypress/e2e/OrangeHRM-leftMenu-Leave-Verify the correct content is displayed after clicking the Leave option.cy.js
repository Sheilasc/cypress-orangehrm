describe('Test the correct content is displayed after clicking the Leave option', () => {
  it('Should validate the correct content is displayed after clicking the Leave option', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //click on the Admin option of the left menu
    cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()

    //Verify Leave title in the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Leave').should('be.visible')
    
    //Verify the tab menu in the Leave page

    //Apply
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').should('contain', 'Apply')

    //My Leave
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should('contain', 'My Leave')

    //Entitlements
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Entitlements')
    
    //Reports
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Reports')
    
    //Configure
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Configure')
        
  })
})