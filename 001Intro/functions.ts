function addTwo(num: number): number {
    return num + 2;
    //return "Hello"
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

// function getValue(nyVal: number) {

//     if (myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "Siderman", "IronMan"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return (`Hey ${hero}`);
    //return 2
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }