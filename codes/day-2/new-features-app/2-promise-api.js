//Promise

const divide = (a, b) => {
    const p = new Promise(
        //pass a callback function to the constructor of Promise API
        //callback function: executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                // const error = new Error('divisor can not be zero')
                // rejectFnRef(error)
                rejectFnRef('divisor can not be zero')
            }

            resolveFnRef(res)
        }
    )
    return p;
}

const add = (a, b) => a + b

const divPromise = divide(12, 0)
// divPromise
//     .then(
//         (data) => console.log(data),
//         (err) => console.log(err)
//     )
divPromise
    .then((data) => console.log(data))
    .catch(err => console.log(err))
//.catch((err) => console.log(err.message))

const addRes = add(12, 3)
console.log(addRes)