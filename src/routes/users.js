const express = require("express")

const router = express.Router()

const connection = require("../database/database.js")


router.get("/" , (_req , res ) => {
    connection.query("SELECT * FROM customers", 
    ( err , rows , _fields ) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id" , ( req , res ) => {
    connection.query( "SELECT * FROM customers WHERE id = ?", [req.params.id],
    ( err , rows , _fields ) => {
        if(err) {
            console.log( err );
        } else {
            res.json( rows )
        }
    })
})

router.post("/" , (req, res ) => {
    const  { id , name , email } = req.body
    const query = "CALL addOrEditCustomers( ?, ? ,? )" 
    connection.query(query , [ id , name , email ], ( err, rows , fields ) => {
            if(!err){
                res.json( {status : "user successfully added" } )
            } else {
                console.log(err);
            }
        } 
    )
} )

router.put("/:id" , (req , res ) => {
    const { id } = req.params 
    const {name  ,email } = req.body
    const query = "CALL addOrEditCustomers( ?, ? ,? )"

    connection.query(query ,  [ id , name , email ], ( err, rows , fields ) => {
        if(!err){
            res.json( {status : "user successfully updated" } )
        } else {
            console.log(err);
        }
    })
})



module.exports = router
