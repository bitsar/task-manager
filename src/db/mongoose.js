const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

// User model definition
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// Task model definition 
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Walk the dog',
    completed: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error', error)
})


// // Intsance of model
// const me = new User({
//     name: 'Nick',
//     age: 'blah'
// })

// // Save the model the db (returns a promise)
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })