const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    show: function () {
        return `
        Id:${this.id == 0 ? 'NA' : this.id},
        Name:${this.name}, 
        Salary:${this.salary}
        `
    }
}

//spread operator (...)
//spreading an object
const copy = {
    ...anilObj,
    name: 'anil kumar'
}

console.log(copy)
console.log(copy.show())

//spreading an array
const numbers = [1, 2, 3, 4]
const copyNumbers = [10, 20, ...numbers, 40, 50]