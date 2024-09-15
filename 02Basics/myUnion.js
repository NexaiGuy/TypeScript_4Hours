var score = 33;
score = 44;
score = "55";
var kevin = { name: "kevin", id: 369 };
kevin = { username: "kb", id: 369 };
// function getDbId(id: number | string){
//making some API calls 
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
// let pi:3.141592 = 3.141592
// pi = 3.141592
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
