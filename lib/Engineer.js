const TeamMembers = require("./teamMember")

// const TeamMember = require('./TeamMember');

class Engineer extends TeamMembers {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return this.github
    }
}
module.exports = Engineer