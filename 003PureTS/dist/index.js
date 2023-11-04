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
        this._courseCount = 1;
        this.city = "Nairobi";
    }
    //private in methods
    deleteToken() {
        console.log("Deleting token");
    }
    //getter
    get getAppleEmail() {
        return `${this.name} has an apple email of ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //You cannot set a variable or void in a setter //!set courseCount(courseNum): void{} 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCouresCount() {
        this._courseCount = 4;
    }
}
const SuperUser = new User("superuser@example.com", "SuperUser", "12345");
// SuperUser.city = "Nairobi" //!!READ-ONLY!!
//SuperUser.name //!private
// SuperUser.deleteToken()//!private
