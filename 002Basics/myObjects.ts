// const User = {
//     name: 'John',
//     email: 'john@gmail.com',
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = { name: "John", isPaid: false, email: "h@h.com" };

// createUser(newUser);

// function createCourse(): { name: string, price: number } {
//     return { name: "ICT", price: 12000 }
// }

// type User = {
//     name: string;
//     isActive: boolean;
//     email: string;
// }

// function createUser(user: User) {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true })


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "123456789",
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true,
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type creditCardDetails = cardNumber & cardDate & {
    cvv: number//hacky way
}

myUser.email = "ld@example.com";
//myUser._id = "123456789"