// const { Developer } = require('./models/developer')
// const { Hr } = require('./models/hr')
// const { employees } = require('./repository/employees')

import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { employees } from "./repository/employees";

const anilDeveloper = new Developer(1, "anil", 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, "sunil", 1500, 2500, 3500, 4500)
employees.push(anilDeveloper)
employees.push(sunilHr)

for (const employee of employees) {
    const salary = employee.calculateSalary()
    console.log(`${employee.name} with id:${employee.id} has got ${salary} as salary`)
}