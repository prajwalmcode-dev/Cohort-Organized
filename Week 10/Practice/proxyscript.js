const user = {
    name: "hitesh",
    age: 40,
    password: "123",
}

const proxyUser = new Proxy(user, {
    get(target, prop) {
        console.log(prop)
        console.log(target)
        return target[prop]
    }
})

console.log(proxyUser.password) // here, prop = password

// console.log(proxyUser.name) this line will set the prop to name, and upon printing prop = name

// console.log(proxyUser) this line will set prop to nothing , therefore when you will print the prop, it won't display anything.
