const express = require('express')
require('./db/mongoose')

// Load in routers  
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Configure express
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port: ', port)
})