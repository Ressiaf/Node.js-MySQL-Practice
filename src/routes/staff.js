const express = require("express")

const router = express.Router()

const connection = require("../database/database.js")


router.get("/" , (_req , res ) => {
    connection.query("SELECT * FROM staff", 
    ( err , rows , _fields ) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
})

router.get("/:id" , ( req , res ) => {
    connection.query( "SELECT * FROM staff WHERE id = ?", [req.params.id],
    ( err , rows , _fields ) => {
        if(err) {
            console.log( err );
        } else {
            res.json( rows )
        }
    })
})

router.post("/" , (req, res ) => {
    const  { id , roles_id , store_id , name } = req.body
    const query = "CALL addOrEditStaffStaff( ?, ? ,? .? )" 
    connection.query(query , [ id , name,  roles_id , store_id ], ( err, rows , fields ) => {
            if(!err){
                res.json( {status : "staff member successfully added" } )
            } else {
                console.log(err);
            }
        } 
    )
} )

router.put("/:id" , (req , res ) => {
    const { id } = req.params 
    const {roles_id , store_id , name} = req.body
    const query = "CALL addOrEditStaffStaff( ?, ? ,? ,? )"
    connection.query(query , [ id , name,  roles_id , store_id ] , ( err, rows , fields ) => {
        if(!err){
            res.json( {status : "staff member successfully updated" } )
        } else {
            console.log(err);
        }
    })
})



module.exports = router
