const express = require("express")
const app = express( )

app.get( "/", (req , res) => { 
    res.send(" practicas node ")
} ) 

app.listen( 3000 , ()  =>  {
    console.log("server up");
} )