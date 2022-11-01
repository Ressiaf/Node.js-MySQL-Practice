const express = require("express")

const router = express.Router()

const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

router.get("/" , (_req, res) => {
    prisma.stocks.findMany({
        include:{
            stores:{
                select:{
                    name:true
                }
            },
            products:{
                select:{
                    name:true
                }
            }
        }
    })
    .then(stocks => {
        res.json(stocks)
    }).catch(err => {
        res.json(err)
    })
})

router.get("/:id" , ( req , res ) => {
    const {id} = req.params.id
    prisma.stocks.findUnique( {
        where : {
            id: id
        }
    } )
    .then(stocks => {
        res.json(stocks)
    }).catch(err => {
        res.json(err)
    })
})




module.exports=router