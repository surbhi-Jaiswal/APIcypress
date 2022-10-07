describe('login Test',() =>{
  it('sucessfulllogin', () =>{
 cy.visit('https://demo.actitime.com/login.do')

 cy.get('#username').click().type('admin')
 cy.get(':nth-child(5) > :nth-child(1) > .textFieldsArea > .textFieldsTable > tbody > :nth-child(2) > td > .textField').click().type('manager')
 cy.get('#loginButton > div').click()

  })
})
//it.only('facebookpageLogin',()=>{
  //cy.visit('https://www.facebook.com')
 // cy.get('[data-testid="royal_email"]').type('surywanshi09.surbhi@gmail.com')
  //cy.get('[data-testid="royal_email"]').type('surbhi.jaiswalgmail.com')
 // cy.get('[data-testid="royal_pass"]').type('jgdjhh2678#%$')
// cy.get('[data-testid="royal_login_button"]').click()
//})

it.only('flipkartLogIn',()=>{
  cy.visit('https://www.flipkart.com/')
  cy.get('._1_3w1N').click()
  cy.get(':nth-child(1) > ._2IX_2-').click().type('8669079485')
 cy.get(':nth-child(2) > ._2IX_2-').type('Tashi@1234')
//cy.get('input').should('have.class','_2IX_2- _3mctLh VJZDxU').click().type('ggsggJGJ@$@132')
//cy.get('._1D1L_j > ._2KpZ6l').focus().click()
//cy.get('spam').should('have.linktext','Forgot?').click()
//cy.get("input[class=_2IX_2- _3mctLh VJZDxU]").click()
cy.get('._2KpZ6l > span').click()
cy.get('span').should('have.link','Forgot?').click()
})

it('Amazon page',()=>{
  cy.visit('https://www.amazon.com/')
  cy.get('input').should('have.id','twotabsearchtextbox').click()

  })