class Person {
    #_id
    #_name
    #_salary
    constructor(personName, personId, personSalary) {
        this.#_id = personId
        this.#_name = personName
        this.#_salary = personSalary
    }
    set id(value) {
        this.#_id = value
    }
    get id() {
        return this.#_id
    }
    //show = function () {
    show() {
        return `
        Id:${this.#_id == 0 ? 'NA' : this.#_id},
        Name:${this.#_name}, 
        Salary:${this.#_salary}
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