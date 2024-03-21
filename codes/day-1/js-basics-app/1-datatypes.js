var nameValue = 'joydip'
var intNum = 12
var floatNum = 12.34
var charValue = 'a'
var isTrue = false

//local function
function add(a, b) {
    return a + b
}

var result = add(12, 13)
console.log(result)

var anilObject = {
    //value properties (fields)
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional property (method)
    print: function () {
        return this.id + ", " + this.name + ", " + this.salary
    }
}

//var numbers = new Array(12, 13, 14)
var numbers = [12, 13, 14]
/**
 * {
 *  0:12,
 *  1: 13,
 *  2: 14
 * }
 */

var val //= undefined
var num = val + 12
var res = val + 'abb'

var ref = null
// console.log(ref, typeof ref)
// console.log(res, typeof res)
// console.log(num, typeof num)
// console.log(val, typeof val)
// console.log(nameValue, typeof nameValue)
// console.log(intNum, typeof intNum)
// console.log(floatNum, typeof floatNum)
// console.log(charValue, typeof charValue)
// console.log(isTrue, typeof isTrue)
// console.log(add, typeof add)
// console.log(anilObject, typeof anilObject)
// console.log(numbers, typeof numbers)

// for (var index = 0; index < numbers.length; index++) {
//     var element = numbers[index];
//     console.log(element)
// }

//for..of loop: fetches the value from each index position from an array or property from an object
// for (var value of numbers) {
//     console.log(value)
// }

//for..in loop: fetches the index position from an array or property from an object
for (var i in numbers) {
    console.log(i)
}

var divRes = 12 / 0
console.log(divRes, typeof divRes)