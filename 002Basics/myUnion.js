var score = 33;
score = 44;
score = "55";
var SuperUser = { name: "SuperUser", id: 332 };
SuperUser = { username: "SU", id: 332 };
// function getDbId(id: number | string){
//     //Making some API calls
//  console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("10");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//unions in arrays
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, true, 2, "3", "4"];
//! let pi: 3.142 = 3.142
//! pi = 3.1245
var seatAllotment;
seatAllotment = "aisle";
//seatAllotment = "crew"
