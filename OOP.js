const inquirer = require('inquirer');

const teamArray = [];

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