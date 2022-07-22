const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    grabPosition() {
        return "Manager";
    }

    grabOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;