const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    grabPosition() {
        return "Intern";
    }

    grabSchool() {
        return this.school;
     }
    }
module.exports = Intern;