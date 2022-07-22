const Engineer = require('../lib/Engineer');

test("can use getrole() to get role name return should be \"Engineer\"", () => {
    const emp = "Engineer";
    const e = new Engineer("the", 1, "placeholder@gmail.com");
    expect(e.getRole()).toBe(emp);
});
