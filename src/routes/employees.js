const express = require("express")

const router = express.Router()

const connection = require("../database/database.js")

router.get("/" , (_req , res ) => {
    connection.query("SELECT * FROM Empleados", 
    ( err , rows , _fields ) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id" , ( req , res ) => {
    connection.query( "SELECT * FROM Empleados WHERE id = ?", [req.params.id],
    ( err , rows , _fields ) => {
        if(err) {
            console.log( err );
        } else {
            res.json( rows )
        }
    })
})

module.exports = router 