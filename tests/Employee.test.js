const Employee = require("../lib/Employee");

test("Can make new Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can get employee name", () => {
    const emp = "Alice";
    const e = new Employee(emp);
    expect(e.empName()).toBe(emp);
  });


test("Can set employee id", () => {
    const emp = 2133;
    const e = new Employee("the", emp);
    expect(e.id).toBe(emp);
  });
  
  test("Can set employee email", () => {
    const emp = "placeholder@gmail.com";
    const e = new Employee("the", 1, emp);
    expect(e.email).toBe(emp);
    });

    test("Can set employee name", () => {
        const emp = "Elmo";
        const e = new Employee(emp);
        expect(e.empName()).toBe(emp);
    });

        