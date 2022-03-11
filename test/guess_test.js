let assert = require("assert");
var fruit = require('../fruits');
describe('Testing the Fruits function' , function(){
    it('should return number is too high' , function(){
         guess = guessing_game(6, 9);
        assert.equal(guess, "Your guess is too high")
    });
    it('should return number is too low' , function(){
        var guess = guessing_game(7, 3);
        assert.equal(guess, "Your guess is too low")
    });
    it('should return Correct' , function(){
        var guess = guessing_game(9, 9);
        assert.equal(guess, "Correct, the secret number is 9")
    });
});