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

    private _courseCount = 1

    readonly city: string = "Nairobi"
    constructor(
        public email: string,
        public name: string,
        private userId: string,
    ) {

    }
    //private in methods
    private deleteToken() {
        console.log("Deleting token")
    }

    //getter
    get getAppleEmail(): string {
        return `${this.name} has an apple email of ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    //You cannot set a variable or void in a setter //!set courseCount(courseNum): void{} 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const SuperUser = new User("superuser@example.com", "SuperUser", "12345")
// SuperUser.city = "Nairobi" //!!READ-ONLY!!
//SuperUser.name //!private
// SuperUser.deleteToken()//!private