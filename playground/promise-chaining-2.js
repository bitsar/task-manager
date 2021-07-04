require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('60dd6052fb481a0b5816aade').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})