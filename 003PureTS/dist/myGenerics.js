"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val;
}
//identityFour<Bootle>({})
function getSearchProducts(products) {
    //do some db ops
    const myIndex = 3;
    return products[myIndex];
}
//Generic arrow method
const getMoreSearchProducts = (products) => {
    //some db ops
    const myIndex = 4;
    return products[myIndex];
};
