"use strict";
// class User {
//     public email: string
//     private name: string
//     //#name: string
//     readonly city: string = "Nairobi"
//     constructor(email: string, name: string){
//         this.name = name;
//         this.email = email;
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Nairobi";
    }
}
const SuperUser = new User("superuser@example.com", "SuperUser", "12345");
// SuperUser.city = "Nairobi" //!!READ-ONLY!!
//SuperUser.name //!private
