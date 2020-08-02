const TeamMembers = require('./TeamMember');

class Manager extends TeamMembers {
    constructor(name, id, email, managerphone) {
        super(name, id, email)
        this.managerphone = managerphone
    }
    getRole() {
        return 'Manager'
    }
    getManagerphone() {
        return this.managerphone
    }
}
module.exports = Manager