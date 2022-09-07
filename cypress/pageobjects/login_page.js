class LoginPage {

    get mainForm() {
        return cy.get('[class="wrapper"]')
    };

    get Logo() {
        return cy.get('#logomini')
    };

    get formHeader() {
        return cy.get('h1')
    };

    get usernameInput() {
        return cy.get('input[name="username"]')
    };

    get passwordInput() {
        return cy.get('input[name="password"]')
    };

    get loginButton() {
        return cy.get('input[type="submit"]')
    };

    get usernameError() {
        return cy.get('input[name="username"] ~ span[class="help-block"]')
    };

    get passwordError() {
        return cy.get('input[name="password"] ~ span[class="help-block"]')
    };

    get fakeDashboardSelector() {
        return cy.get('#dashboard')
    };

    loginWithCredentials({ username = '{backspace}', password = '{backspace}' }) {
        this.usernameInput.clear();
        this.usernameInput.type(username)
        this.passwordInput.clear();
        this.passwordInput.type(password)
        this.loginButton.click();
    }

    checkLinkContentType(link) {
        return cy.request({
            method: 'GET',
            url: link
        }).then(response => { return response.headers['content-type'] })
    }
}

module.exports = LoginPage