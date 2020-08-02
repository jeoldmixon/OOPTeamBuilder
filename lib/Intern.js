const TeamMembers = require('./TeamMember');

class Intern extends TeamMembers {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern