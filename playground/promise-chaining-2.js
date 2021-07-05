require('../src/db/mongoose')
const Task = require('../src/models/task')

// 60dfe100219be417862ab5d0

// Task.findByIdAndDelete('60dd6052fb481a0b5816aade').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60dfe0c1219be417862ab5cd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})