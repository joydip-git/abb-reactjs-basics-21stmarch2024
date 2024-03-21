class Person {
    constructor(personName, personId, personSalary) {
        this.id = personId
        this.name = personName
        this.salary = personSalary
    }
    //show = function () {
    show() {
        return `
        Id:${this.id == 0 ? 'NA' : this.id},
        Name:${this.name}, 
        Salary:${this.salary}
        `
    }
}
class Trainer extends Person {
    constructor(personName, personId, personSalary, personSubject) {
        super(personName, personId, personSalary)
        this.subject = personSubject
    }
    show() {
        return `
        ${super.show()}
        Subject:${this.subject}
        `
    }
}

const anilObj = new Trainer('anil', 1, 1000, "React")
const sunilObj = new Trainer('sunil', 2, 2000, "Angular")

const infoOfAnil = anilObj.show()
const infoOfSunil = sunilObj.show()
console.log(infoOfAnil)
console.log(infoOfSunil)