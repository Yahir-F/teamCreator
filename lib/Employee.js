class Employee {
    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }


employeeName(){
return this.name;
}

empId(){
    return this.id;
}

empEmail(){
    return this.email;
}
empPosition(){
    return this.position;
}
}
module.exports = Employee;