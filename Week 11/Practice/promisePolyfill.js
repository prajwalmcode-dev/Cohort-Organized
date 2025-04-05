class MyPromise {
    constructor(executorFn) {
        this._state = 'pending'
        this._successfulCBs = []
        this._errorCBs = []
        this._finallyCBs = []
        executorFn(this.resolverFunction.bind(this), this.rejectorFunction.bind(this))
    }
    resolverFunction(value) {
        this._state = 'fulfilled'
        this._successfulCBs.forEach((cb) => cb(value))
        this._finallyCBs.forEach((cb) => cb())

    }
    rejectorFunction(err) {
        this._state = 'rejected'
        this._errorCBs.forEach((cb) => cb(err))
        this._finallyCBs.forEach((cb) => cb())
    }

    then(cb) {
        this._successfulCBs.push(cb)
        return this
    }

    catch(cb) {
        this._errorCBs.push(cb)
        return this
    }

    finally(cb) {
        this._finallyCBs.push(cb)
        return this
    }
}

function wait(seconds) {
    const p = new MyPromise(
        (resolve, reject) => { //executor function
            setTimeout(() => reject(), seconds * 1000)
        })
    return p
}

wait(5)
    .then(() => console.log("Promise Resolved after 5 sec"))
    .catch(() => console.log("Promise Rejected after 5 sec"))
    .finally(() => console.log("Main toh har barr run karunga"))

//Cons: unable to chain the promises