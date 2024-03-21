/*
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
const sunilObj = {
    name: 'sunil',
    id: 2,
    salary: 2000,
    show: function () {
        return `
        Id:${this.id == 0 ? 'NA' : this.id},
        Name:${this.name}, 
        Salary:${this.salary}
        `
    }
}
*/
//class Person{
// public Person(....){....}
// public string Show(){...}
//}

//constructor function
function person(personName, personId, personSalary) {
    // var x = 10
    // let y = 20
    // const z = 30
    this.id = personId
    this.name = personName
    this.salary = personSalary
    this.show = function () {
        return `
        Id:${this.id == 0 ? 'NA' : this.id},
        Name:${this.name}, 
        Salary:${this.salary}
        `
    }
}
const anilObj = new person('anil', 1, 1000)
const sunilObj = new person('sunil', 2, 2000)

const infoOfAnil = anilObj.show()
const infoOfSunil = sunilObj.show()
console.log(infoOfAnil)
console.log(infoOfSunil)