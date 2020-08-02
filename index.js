const pageformat = require('./public/assets/js/pageFormat');
const pageWriteFile = require('./public/assets/js/pageWriteFile');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];

// Manager Profile Builder

const managerBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter manager's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter manager's employee ID number"
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter manager's email address"
            },
            {
                type: 'input',
                name: 'managerphone',
                message: "Enter manager's office phone numbner"
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
            teamArray.push(managerProfile)
        })
}

// Add New Team Member?

const nextPrompt = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'pickRole',
            message: 'What role would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'None']
        }])
        .then(responses => {
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
                    generateWebpage(teamArray)
            }
        });
}
const generateWebpage = (teamArray) => {
    let htmlcreated = pageformat(teamArray);
    console.log('You can now open the webpage called index.html')
    pageWriteFile(htmlcreated);
};
// Add Engineer?

const engineerBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter the Engineer's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the Engineer's Employee ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Engineer's email address"
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter Engineers's GitHub username"
            }
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
            teamArray.push(engineerProfile)
        })
        .then(nextPrompt);
}

const internBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter Intern's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Inter's ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Intern's email"
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter Intern's school"
            }
        ])
        .then((responses) => {
            const { name, id, email, school } = responses;
            const intern = new Intern(name, id, email, school);
            const internProfile = {
                role: intern.getRole(),
                name: intern.getName(),
                email: intern.getEmail(),
                school: intern.getSchool(),
            };
            teamArray.push(internProfile)
        })
        .then(nextPrompt);
}
managerBuilder().then(nextPrompt)