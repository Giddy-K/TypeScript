class User {
    email: string
    name: string
    readonly city: string = "Nairobi"
    constructor(email: string, name: string){
        this.name = name;
        this.email = email;
    }
}

const SuperUser = new User("superuser@example.com", "SuperUser")
// SuperUser.city = "Nairobi"