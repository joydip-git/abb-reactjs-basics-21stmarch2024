// const { Employee } = require('./employee')
// class Developer extends Employee {

import { Employee } from "./employee";

export class Developer extends Employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra)
        this.incentivePay = incentive
    }
    calculateSalary() {
        return this.incentivePay + super.calculateSalary()
    }
}

// module.exports = {
//     Developer:Developer
// }