const express = require('express')
require('./db/mongoose')

// Load in routers  
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Configure express server
const app = express()
const port = process.env.PORT || 3000


// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('Application in maintenance mode')
//     }
// })
// Configure express middleware
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Configure express application
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port: ', port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const user = await User.findById('60f130cefc5a8f0252c574ae')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
    // const task = await Task.findById('60f13250182a670379badd04')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

}

main()