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

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisisaseriesofcharacters', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisisaseriesofcharacters')
    console.log(data)
}

myFunction()