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

router.post("/", (req, res) => {
    prisma.stocks.create({
        data: req.body
    }).then(res => {
        res.send("stock successfully added!")
    }).catch(err => {
        res.json(err)
    })
})

router.delete("/:id" , (req , res ) =>{
    prisma.stock.delete({
        where: {
            id:Number(req.params.id)
        }
    }).then(res => {
        res.send("stock successfully deleted!")
    }).catch(err => {
        res.json(err)
    })
})
module.exports=router