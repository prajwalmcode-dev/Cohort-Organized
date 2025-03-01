let arr = [1, 2, 3, 4]

if (!Array.prototype.myreduce) {
    Array.prototype.myreduce = function (userFn, initial_value) { //userFn is any callback function
        let acc;
        let startIndex = 0; //sets start index to 0

        if (initial_value !== undefined) { //if current array is non-empty
            acc = initial_value; //assign initial value of arr to acc
        }
        else {
            if (this.length === 0) { //throws an error is arr is empty
                throw new TypeError("Reduce of empty array with no initial value")
            }
            acc = this[0]
            startIndex = 1
        }
        for (let i = startIndex; i < this.length; i++) {
            acc = userFn(acc, this[i], i, this) // Here, userFn will get replaced by the called function
        }
        return acc
    }
}

const sum = arr.myreduce((acc, curr, i, arr) => { return acc + curr }, 0)

console.log(sum)