describe('login form tests', () => {
  beforeEach(() => {
    cy.visit('https://login.qa.studio/')
  })

  it('right email right pass', () => {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })

  it('forgot pass', () => {
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })

  it('right email wrong pass', () => {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('kjhljhlgtubjj')
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })

  it('wrong email right pass', () => {
        cy.get('#mail').type('german@dkjhkjhj.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })

  it('invalid email right pass', () => {
        cy.get('#mail').type('germankjhkjhj.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Нужно исправить проблему валидации').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })

  it('uppercase to lowercase in email', () => {
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton').should('be.visible')
    })
  })