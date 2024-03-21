//rest operator
//is used to declare an array as part of function argument list
//you can't use this rest operator with any other array
//you can't declare more than one array with rest parameter in the function's argument list
function calculateAverage(name, ...marks) {
    let sum = 0
    for (const mark of marks) {
        sum += mark
    }
    return sum / marks.length
}
calculateAverage('anil', 10, 20)
calculateAverage('sunil', 10, 20, 30)

