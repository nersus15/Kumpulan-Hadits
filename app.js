// import package, moduls etc...
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphQlHTTP = require('express-graphql');
const graphQlResolver = require('./graphQl/Resolver/index');
const graphQlSchema = require('./graphQl/Schema/index');
// ...

const app = express();

// use middleware
app.use(bodyParser.json());

// make API end point
app.use('/hadits', graphQlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true,
}));

// Connect to MongoDB Using Mongoose Driver
mongoose.connect(`mongodb+srv://fathurrahman:Y4308FK4xKajs3N1@myhadits-wizk7.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => {
        // Setting Listenig Server and connect to server
        app.listen(3001);
    }).catch(err => {
        console.log(err);
    });
