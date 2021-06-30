// Destructure the returned object from requiring mongodb
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    } 
    
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 36
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(erros)
    // })

    db.collection('tasks').deleteOne({
        description: "Mow the lawns"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(erro)
    })
})