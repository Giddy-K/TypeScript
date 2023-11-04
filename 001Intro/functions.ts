function addTwo(num: number) {
    //return num + 2;
    return "Hello"
}

function getUpper(value: string) {
    return value.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }


let myValue = addTwo(5);
getUpper("SuperUser");

signUpUser("SuperUser", "u.anonymous@gmail.com", true);
loginUser("SuperUser", "u.anonymous@gmail.com", true);