const Employee = require('../lib/Employee');

test("Can make new Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("can get employee name", () => {
    const test = "Elmo";
    const emp = new Employee(test);
    expect(emp.()).toBe(test);
});