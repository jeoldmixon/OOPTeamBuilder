const inquirer = require('inquirer');

const teamArray = [];

// Manager Profile Builder

const managerBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter manager name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter manager employee ID number'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter manager email address'
            },
            {
                type: 'input',
                name: 'managerphone',
                message: 'Enter manager office phone numbner'
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
            teamArray.push(managerRole)
        })
};

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
            }
        });
}

// Add Engineer?

const engineerBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter the Engineer name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the Engineer Employee ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Engineer email address'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter Engineers GitHub id'
            }
        ])
        .then((responses) => {
            const { name, id, email, github } = responses;
            const engineer = new Engineer(name, id, email, github);
            const engineerProfile = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.id(),
                email: engineer.getEmail(),
                github: engineer.gethub(),
            };
            teamArray.push(engineerBuilder)
        })
        .then(nextPrompt);
}

const internBuilder = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter Interns name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Inters id'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Interns email'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter Interns school'
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
            teamArray.push(internBuilder)
        })
        .then(nextPrompt);
}