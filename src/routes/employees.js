const express = require("express")

const router = express.Router()

const connection = require("../database/database.js")

router.get("/" , (req,res ) => {
    connection.query("SELECT * FROM Empleados" , ( err , rows , _fields ) => {
        if(err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
})

module.exports = router 