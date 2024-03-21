//inner local function
function foo() {
    console.log(x) //undefined
    var x
    x = 10
    console.log(x) //10

    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x)//20
    }
    console.log(x)//20 or 10

    test()
    //function declaration syntax: a function can be called before the function decalartion itself as well as after
    function test() {
        var x = 20
        console.log(x)//20
    }
    test()
    //function expression syntax: a function can't be called before the function expression itself but can be called after the expression
    //var show
    //show()
    var show = function () {

    }
    show()
}
foo()
