const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    grabSchool() {
        return this.school;
    }
    grabPosition() {
        return "Intern";
    }
    }
module.exports = Intern;