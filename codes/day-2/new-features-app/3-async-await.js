//Promise using async and await
const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const error = new Error('divisor can not be zero')
        throw error
    }
    return res
}

const add = (a, b) => a + b

// const divPromise = divide(12, 4)
// divPromise
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))

async function callDivide() {
    try {
        //waiting for the divide function to be "resolved/fulfilled"
        const data = await divide(12, 3)
        console.log(data)
    } catch (error) {
        //waiting for the divide function to be "rejected"
        console.log(error)
    }
}
callDivide().catch(error => console.log(error))

const addRes = add(12, 3)
console.log(addRes)