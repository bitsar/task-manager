require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('60dfdd0358a80b16a3c48c07', { age: 1} ).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})