const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Allow cross-origin requests
app.use(cors())

// Create your own account at https://mlab.com/ and
// replace the gql-ninja:test123 with your infos
mongoose.connect('mongodb://gql-ninja:test123@ds033907.mlab.com:33907/gql-ninja',  { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

// Use http://localhost:8080/graphql to access graphiql interface
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(8080, () => {
    console.log('now listening for requests on port 8080')
})