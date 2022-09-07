
const LoginPage = require('../pageobjects/login_page');
const loginPage = new LoginPage();
const { MYNAME, MYPASSWORD } = Cypress.env();


before(() => {
  cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
});

describe("The existence of all the page's elements", () => {

  it("The main login form is displayed", () => {
    loginPage.mainForm.should('be.visible');
  });

  it("The 'Pecode' logo exists", () => {
    loginPage.Logo.should('exist');
  });

  it("The 'Pecode' logo's link is valid", () => {
    loginPage.Logo.invoke('attr', 'src').then(src => {
      loginPage.checkLinkContentType(src).should('eq', 'image/svg+xml');
    });

  });

  it("The form's header is displayed", () => {
    loginPage.formHeader.should('be.visible');
  });

  it("The form's header is valid", () => {
    loginPage.formHeader.should('have.text', 'AQA internship Login');
  });

  it("The 'Username' input exists", () => {
    loginPage.usernameInput.should('exist');
  });

  it("The 'Username' input's placeholder is valid", () => {
    loginPage.usernameInput.invoke('attr', 'placeholder').should('eq', 'Username');
  });

  it("The 'Password' input exists", () => {
    loginPage.passwordInput.should('exist');
  });

  it("The 'Password' input's placeholder is valid", () => {
    loginPage.passwordInput.invoke('attr', 'placeholder').should('eq', 'Password');
  });

  it("The 'Login' button exists", () => {
    loginPage.loginButton.should('exist');
  });

  it("The 'Login' button's text is valid", () => {
    loginPage.loginButton.invoke('attr', 'value').should('eq', 'Login');
  });
});

describe("Login with both inputs empty", () => {

  before(() => {
    loginPage.loginButton.click();
  });

  it("Username input's error is displayed", () => {
    loginPage.usernameError.should('be.visible');
  });

  it("Username input's error has a valid text", () => {
    loginPage.usernameError.should('have.text', 'Please enter username.');
  });

  it("Password input's error is displayed", () => {
    loginPage.passwordError.should('be.visible');
  });

  it("Password input's error has a valid text", () => {
    loginPage.passwordError.should('have.text', 'Please enter your password.');
  });
});

describe("Login with empty 'Username' input", () => {

  before(() => {
    loginPage.loginWithCredentials({
      password: MYPASSWORD
    });
  });

  it("Username input's error is displayed", () => {
    loginPage.usernameError.should('be.visible');
  });

  it("Username input's error has a valid text", () => {
    loginPage.usernameError.should('have.text', 'Please enter username.');
  });

  it("Password input's error isn't displayed", () => {
    loginPage.passwordError.should('not.be.visible');
  });
});

describe("Login with empty 'Password' input", () => {

  before(() => {
    loginPage.loginWithCredentials({
      username: MYNAME
    });
  });

  it("Username input's error isn't displayed", () => {
    loginPage.usernameError.should('not.be.visible');
  });

  it("Password input's error is displayed", () => {
    loginPage.passwordError.should('be.visible');
  });

  it("Password input's error has a valid text", () => {
    loginPage.passwordError.should('have.text', 'Please enter your password.');
  });
});

describe("Login with valid credentials", () => {

  before(() => {
    loginPage.loginWithCredentials({
      username: MYNAME,
      password: MYPASSWORD
    });
  });

  it("User is redirected to the 'Dashboard' page", () => {
    loginPage.fakeDashboardSelector.should('be.visible');
  });
});