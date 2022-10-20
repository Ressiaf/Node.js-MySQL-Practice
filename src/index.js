// Modules
const express = require('express')
const app = express( )
const morgan = require('morgan')

// Routes import
const usersRoute = require("./routes/users.js")

app.set( "port" , process.env.PORT || 3000) 

// Middlewares
app.use(morgan("tiny"))

// Routes
app.use("/users" , usersRoute )

//Server
app.listen(app.get("port") , ( )  =>  {
    console.log( "server up in port" , app.get("port") );
})


