describe("Filter",function(){

    it("filters banned word from the given string" , () =>{
        assert.equal(Strings.filter("This house is not nice!"),"This house is nice!");
    })

})

describe("Bubble Sort",function(){

    it("it sorts the item inside the given array" , () =>{
        assert.equal([64, 34, 25, 12, 22, 11, 90].Bubblesort(),JSON.stringify([11, 12, 22, 25, 34, 64, 90]));
    })
})



