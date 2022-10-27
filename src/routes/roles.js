const express = require("express")

const router = express.Router()

const connection = require("../database/database.js")


router.get("/" , (_req , res ) => {
    connection.query("SELECT * FROM roles", 
    ( err , rows , _fields ) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id" , ( req , res ) => {
    connection.query( "SELECT * FROM roles WHERE id = ?", [req.params.id],
    ( err , rows , _fields ) => {
        if(err) {
            console.log( err );
        } else {
            res.json( rows )
        }
    })
})

router.post("/" , (req, res ) => {
    const  { id , name } = req.body
    const query = "CALL addOrEditRoles( ?, ? )" 
    connection.query(query , [ id , name ], ( err, rows , fields ) => {
            if(!err){
                res.json( {status : "role successfully added" } )
            } else {
                console.log(err);
            }
        } 
    )
} )

router.put("/:id" , (req , res ) => {
    const { id } = req.params 
    const {name} = req.body
    const query = "CALL addOrEditRoles( ?, ? )"
    connection.query(query ,  [ id , name ] , ( err, rows , fields ) => {
        if(!err){
            res.json( {status : "role successfully updated" } )
        } else {
            console.log(err);
        }
    })
})



module.exports = router
