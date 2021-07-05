require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60dfdd0358a80b16a3c48c07', { age: 1} ).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60dfdd3b7d58bb16badc21ae', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})