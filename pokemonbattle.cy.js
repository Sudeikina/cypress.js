describe('login form tests', () => {
  beforeEach(() => {
    cy.visit('https://pokemonbattle.me/')
  })

  it('right email right pass', () => {
        cy.get(':nth-child(1) > .auth__input').type('sudeykina.ps@gmail.com')
        cy.get('#password').type('B1g!anch')
        cy.get('.auth__button').click()
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get(':nth-child(2) > .shop__button').click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111')
        cy.get(':nth-child(1) > .pay_base-input-v2').type('10/26')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('asdfasf')
        cy.get('.pay-btn').should('not.be.disabled')
        cy.get('.pay-btn').click()
        cy.get('#cardnumber').type('56456')
        cy.get('.payment__submit-button').should('not.be.disabled')
        cy.get('.payment__submit-button').click()
        cy.contains('Покупка прошла успешно').should('be.visible')
        cy.get('.payment__adv').click()
    })
})