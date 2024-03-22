function add(a, b) {
    return a + b
}
const subtract = function (a, b) {
    return a - b
}
//function expression using arrow function syntax
const mutiply = (a, b) => { return a * b }
const divide = (a, b) => a / b

function outer() {
    this.x = 10
    console.log("inside outer")
    console.log(this)
    //let inner = function () {
    //arrow function will help bind the function with the object to which its immediate parent function is bound
    const inner = () => {
        this.y = 20
        let res = this.x + this.y
        console.log("inside inner")
        console.log(this)
        console.log(res)

        const innerMost = () => {
            this.z = 30
            console.log(this.x + this.y + this.z)
        }
        innerMost()

    }
    //inner = inner.bind(this)
    inner()
}
new outer()