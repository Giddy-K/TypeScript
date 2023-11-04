"use strict";
class User {
    constructor(email, name) {
        this.city = "Nairobi";
        this.name = name;
        this.email = email;
    }
}
const SuperUser = new User("superuser@example.com", "SuperUser");
// SuperUser.city = "Nairobi"
