"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "Hello"
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("SuperUser");
signUpUser("SuperUser", "u.anonymous@gmail.com", true);
loginUser("SuperUser", "u.anonymous@gmail.com", true);
// function getValue(nyVal: number) {
//     if (myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "Siderman", "IronMan"];
//const heros = [1, 2, 3]
heros.map(function (hero) {
    return ("Hey ".concat(hero));
    //return 2
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
