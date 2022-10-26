// Modules
const express = require('express')
const app = express( )
const morgan = require('morgan')

// Routes import
const usersRoute = require("./routes/users.js")
const storesRoute = require("./routes/stores.js")



//Configuration
app.set( "port" , process.env.PORT || 3000) 

// Middlewares
app
    .use( express.json() )
    .use( morgan("dev") )

// Routes
app
    .use( "/users" , usersRoute )   
    .use( "/stores" , storesRoute )   
    .use( "*" , ( req, res, next ) => {
        res.status(404).send( "404 - not found" )
    } )

//Server
app.listen(app.get("port") , ( )  =>  {
    console.log( "server up in port" , app.get("port") );
})


