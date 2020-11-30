const user = require('../controllers/user');

describe('testing user file', () => {
    it('should do something before the forgotPassword function gets called', () => {
        expect(user.doSomethingBefore()).toBeFalsy();
    });
    //Then
    it('forgotPassword should return true', () => {
        expect(user.forgotPassword()).toBeTruthy();
    });
});
