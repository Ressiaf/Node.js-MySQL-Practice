const express = require("express")
const router = express.Router()

// /search

// req.query va a devolvernos el valor 
//de la query que que envian al servidor desde el front
//cuando se hace el pedido de busqueda +-
router.get( "/" , (req, res) => {
    console.log(req.query.keyword);
} )