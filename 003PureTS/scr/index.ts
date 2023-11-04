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
    readonly city: string = "Nairobi"
    constructor(
        public email: string,
        public name: string,
        private userId : string,
    ) {

    }
}

const SuperUser = new User("superuser@example.com", "SuperUser", "12345")
// SuperUser.city = "Nairobi" //!!READ-ONLY!!
//SuperUser.name //!private