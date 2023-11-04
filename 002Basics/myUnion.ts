let score: number | string = 33
score = 44
score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let SuperUser: User | Admin = { name: "SuperUser", id: 332 }

SuperUser = { username: "SU", id: 332 }

// function getDbId(id: number | string){
//     //Making some API calls
//  console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("10");

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

//unions in arrays
const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string| number | boolean)[] = [1, true, 2, "3", "4"]


//! let pi: 3.142 = 3.142
//! pi = 3.1245

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"

export{}