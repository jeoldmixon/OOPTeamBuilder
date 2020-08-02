class TeamMember {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'TeamMember'
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email
    }
}
module.exports = TeamMember