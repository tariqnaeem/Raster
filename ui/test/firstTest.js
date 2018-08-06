var assert =  require('chai').assert;
var first = require('../test/First');

describe('First', function(){
    it("it should return hello world", function(){
        assert.equal(first(),"helloworld"); 
    });
});