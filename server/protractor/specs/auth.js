var Auth = new require('../auth');

describe('auth page testing', function(){
    Auth.get();

    it('should validate mail', function(){
        Auth.setEmail('test@gmail.com');
        
    });

    it('should check ng-submit', function() {
        expect(element(by.binding('list')).getText()).toBe('list=[]');
        element(by.css('#submit')).click();
        expect(element(by.binding('list')).getText()).toContain('hello');
        expect(element(by.model('text')).getAttribute('value')).toBe('');
    });

    it('should ignore empty strings', function() {
        expect(element(by.binding('list')).getText()).toBe('list=[]');
        element(by.css('#submit')).click();
        element(by.css('#submit')).click();
        expect(element(by.binding('list')).getText()).toContain('hello');
    });


    var thumbsUp = element(by.css('span.glyphicon-thumbs-up'));
    var thumbsDown = element(by.css('span.glyphicon-thumbs-down'));

    it('should check ng-show / ng-hide', function() {
        expect(thumbsUp.isDisplayed()).toBeFalsy();
        expect(thumbsDown.isDisplayed()).toBeTruthy();

        element(by.model('checked')).click();

        expect(thumbsUp.isDisplayed()).toBeTruthy();
        expect(thumbsDown.isDisplayed()).toBeFalsy();
    });
    

});