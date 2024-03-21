function foo() {
    //console.log(x)
    let x = 10 //var x = 10
    console.log(x)
    for (let i = 0; i < 1; i++) {
        let x = 20 //var _x =20
        console.log(x) //_x
    }
    console.log(x)//x
}
foo()

//console.log(x)
const x = 200
//x = 400
console.log(x)

const numbers = [12, 1, 2]
//numbers = [1, 2]
numbers.push(11, 13)
console.log(numbers)