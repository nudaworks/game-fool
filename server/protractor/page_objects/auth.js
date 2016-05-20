module.exports = function(){
    var emailInput = element(by.model('email'));
    var passwordInput = element(by.model('password'));
    var emailError = element(by.css('form [name=mail] + p'));
    var pssswordError = element(by.css('form [name=password] + p'));

    this.get = function(){
        browser.get('auth');
    };

    this.setEmail = function(email){
        emailInput.sendKeys(email);
    };

    this.setPassword = function(password){
        passwordInput.sendKeys(password);
    }
};


