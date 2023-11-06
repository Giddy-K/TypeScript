"use strict";
function detectType(val) {
    if (typeof val === 'number') {
        return val.toFixed;
    }
    return val.toLowerCase;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID!");
        return;
    }
    id.toLowerCase();
}
//!Don not do this!!
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
