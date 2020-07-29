class Role {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return this.role
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

class Manager extends Role {
    constructor(role, name, id, email, managerphone) {
        super(role, name, id, email)
        this.managerphone = managerphone
    }
    getManagerphone() {
        return this.managerphone
    }
}

class Engineer extends Role