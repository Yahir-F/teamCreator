const Manager = require('../lib/Manager');

test("Get the position using getPosition() should return \"Manager\"", () => {
    const emp = "Manager";
    const e = new Manager("the", "1", "placeholder@gmail.com");
    expect(e.grabPosition()).toBe(emp);
});


test("Get the office number using grabOfficeNumber()", () => {
    const emp = 4;
    const e = new Manager("the", "1", "placeholder@gmail.com", emp);
    expect(e.grabOfficeNumber()).toBe(emp);
});
