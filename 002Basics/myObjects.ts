const User = {
    name: 'John',
    email: 'john@gmail.com',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "John", isPaid: false, email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string, price: number } {
    return { name: "ICT", price: 12000 }
}

export { }