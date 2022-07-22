const Intern = require("../lib/Intern");

test("Can get school using  grabSchool()", () => {
    const emp = "Harvard";
    const intern = new Intern("the", "1", "placeholder@gmail.com", emp);
    expect(intern.grabSchool()).toBe(emp);
});


