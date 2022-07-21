class Worker {
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

getEmpId() {
    return this.id;
}

getEmpEmail() {
    return this.email;
}

getEmpPosition() {
    return 'Employee';
}   
}
module.exports = Employee;
