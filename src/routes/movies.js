const express = require("express")
const router = express.Router()

let movies = [ 
    {
        id: 1 ,
        title: "Iron man",
        year: "2008"
    } ,
    {
        id: 2 ,
        title: "Lightyear",
        year: "2022"
    } ,
    {
        id: 3 ,
        title: "Cars",
        year: "2006"
    } ,
    {
		"id": 4,
		"title": "Toy Story 2",
		"year": "2001"
	} ,
]

router.get( "/" , (req ,res )  => {
    res.json(movies)
} )

router.get( "/:id" , (req ,res )  => {
    res.json(movies[req.params.id-1])
} )

router.post( "/" , (req , res) => {
    const data = req.body
    
    const ids = movies.map(movie => movie.id)
    const maxID = Math.max( ... ids )

    const newMovie = {
        id: maxID + 1, 
        title: data.title ,
        year: data.year
    }

    movies.push(newMovie)
    res.json({newMovie})
} )

router.delete("/:id" ,  (req, res) => {
    const id = Number(req.params.id)
    movies = movies.filter( movie => movie.id !== id )
    res.status(204).end() 
})



module.exports = router
