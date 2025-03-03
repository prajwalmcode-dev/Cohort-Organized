//Find most user activity

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
    { user: "Charlie", activityCount: 50 },
]

let mem1 = 0;

let res = userActivity.reduce((acc, curr) => {
    let mem2 = 0 + curr.activityCount
    if (mem2 >= mem1) {
        mem1 = mem2
        console.log("in if") //for debugging
        console.log(acc) //for debugging
        console.log(curr) //for debugging
        return curr
    }
    else {
        console.log("in else") //for debugging
        console.log(acc) //for debugging
        console.log(curr) //for debugging
        return acc
    }
}, 0)

console.log(res)

/*
ALTERNATE WAY (BETTER WAY)

let mostActiveUser = userActivity.reduce((maxUser, user) => user.activityCount > maxUser.activityCount ? user : maxUser);
console.log(mostActiveUser);
*/
