const express = require("express")
const router = express.Router()

// /users
router.get( "/" , (req, res) => {
    res.send ("hola mundo , usuarios")
} )

// req.params va a ser igual al id del usuario 
// facebook.com/1  => req.params.userid= 1 
router.get( "/:userid" , (req, res) => {
    console.log( req.params.userid ); 
} )






module.exports = router
