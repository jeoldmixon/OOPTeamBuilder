const pageformat = require("./public/assets/js/page-template");
const pageWriteFile = require("./public/assets/js/pageWriteFile");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];

// Manager Profile Builder

const managerBuilder = () => {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Enter manager's name",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "A name must be entered";
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter manager's employee ID number",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "An ID must be entered"

                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter manager's email address",
                // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                validate: response => {
                    var emailvalid = response.match(/\S+@\S+\.\S+/);
                    if (emailvalid) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: "input",
                name: "managerphone",
                message: "Enter manager's office phone numbner",
                // https://www.w3resource.com/javascript/form/phone-no-validation.php
                validate: response => {
                    var validphone = response.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
                    if (validphone) {
                        return true;
                    }
                    return "Phone number must 10 digits with or without hypens 5551235555 or 555-123-5555"
                }
            },
        ])
        .then((responses) => {
            const { name, id, email, managerphone } = responses;
            const manager = new Manager(name, id, email, managerphone);
            const managerProfile = {
                role: manager.getRole(),
                name: manager.getName(),
                id: manager.getID(),
                email: manager.getEmail(),
                managerphone: manager.getManagerphone(),
            };
            teamArray.push(managerProfile);
        });
};

// Add New Team Member?

const nextPrompt = () => {
    return inquirer
        .prompt([{
            type: "list",
            name: "pickRole",
            message: "What role would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "None"],
        }, ])
        .then((responses) => {
            switch (responses.pickRole) {
                case "Manager":
                    managerBuilder();
                    break;
                case "Engineer":
                    engineerBuilder();
                    break;
                case "Intern":
                    internBuilder();
                    break;
                default:
                    generateWebpage(teamArray);
            }
        });
};
const generateWebpage = (teamArray) => {
    let htmlcreated = pageformat(teamArray);
    console.log("You can now open the webpage called index.html");
    pageWriteFile(htmlcreated);
};
// Add Engineer?

const engineerBuilder = () => {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Enter the Engineer's name",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "A name must be entered";
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter the Engineer's Employee ID",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "An ID must be entered"
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer's email address",
                validate: response => {
                    var emailvalid = response.match(/\S+@\S+\.\S+/);
                    if (emailvalid) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: "input",
                name: "github",
                message: "Enter Engineers's GitHub username",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "A username must be entered";
                }
            },
        ])
        .then((responses) => {
            const { name, id, email, github } = responses;
            const engineer = new Engineer(name, id, email, github);
            const engineerProfile = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.getID(),
                email: engineer.getEmail(),
                github: engineer.getGithub(),
            };
            teamArray.push(engineerProfile);
        })
        .then(nextPrompt);
};

const internBuilder = () => {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Enter Intern's name",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "A name must be entered";
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter Inter's ID",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "An ID must be entered"
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern's email",
                validate: response => {
                    var emailvalid = response.match(/\S+@\S+\.\S+/);
                    if (emailvalid) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's school",
                validate: response => {
                    if (response !== "") {
                        return true;
                    }
                    return "A school name must be entered"

                }
            },
        ]).then((responses) => {
            const { name, id, email, school } = responses;
            const intern = new Intern(name, id, email, school);
            const internProfile = {
                role: intern.getRole(),
                name: intern.getName(),
                email: intern.getEmail(),
                school: intern.getSchool(),
            };
            teamArray.push(internProfile);
        })
        .then(nextPrompt);
};
managerBuilder().then(nextPrompt);