//const { Employee } = require('./employee')
//class Hr extends Employee {

import { Employee } from "./employee";

export class Hr extends Employee {
    constructor(id, name, basic, da, hra, gratuity) {
        super(id, name, basic, da, hra)
        this.gratuityPay = gratuity
    }
    calculateSalary() {
        return this.gratuityPay + super.calculateSalary()
    }
}

// module.exports = {
//     Hr
// }