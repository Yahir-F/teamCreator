//Requriring modules
const inquirer = require("inquirer");
const fs = require("fs");
const loadTeam = require ("./layout/layoutpage")

//modules lib
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');

const employeeData = [];

const dataQuestions = async () => {
const replies = await inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your work email?",
    },
    {
        type: "list",
        name: "position",
        message: "What is your position?",
        choices: ["Manager", "Engineer", "Intern"],
    },
])


if(replies.position === "Manager"){
    const managerQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number."
        }
    ])
    //created manager object 
    const newManager =  new Manager(
        replies.name,
        replies.id,
        replies.email,
        managerQuestions.officeNumber
    );
    employeeData.push(newManager);
} else if (replies.position === "Engineer"){
    const engineerAns = await inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "enter your github username."
        }
    ])
    //created engineer object 
    const incomingEngineer = new Engineer(
        replies.name,
        replies.id,
        replies.email,
        engineerAns.github
    );
    employeeData.push(incomingEngineer);


} else if (replies.position === "Intern") {
    const  internRep = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school are you attending?"
        }
    ])
    //created intern object 
    const incomingIntern = new Intern(
        replies.name,
        replies.id,
        replies.email,
        internRep.school
    );
    employeeData.push(incomingIntern);
    }
};
async function showQuestion() {
    await dataQuestions();

    const addNewMember = await inquirer.prompt([
        {
            name: "addNewMember",
            type: "list",
            choices: ["Create New Team Member", "Create a New Team"],
            message: "Select an option"
        }
    ]);

    if (addNewMember.addNewMember === "Create New Team Member") {
        return showQuestion();
    }
    return createdTeam();
}

showQuestion(); 

function createdTeam() {
    console.log("Incoming member", employeeData);
    fs.writeFileSync(
  "./result/resultpage.html",
loadTeam(employeeData),
);
}


