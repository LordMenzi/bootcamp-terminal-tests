let assert=require("assert");
let greet=require("../greet");

describe("the greet function" , function(){
    it('should greet Andrew correctly', function(){
        assert.equal('HELLO, Ann', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('HELLO, KAREN', greet('Karen'));
    });
});
