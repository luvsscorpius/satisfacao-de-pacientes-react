const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.put('/', async (req, res) => {
    try {
        const userData = req.body
        console.log(userData)

        const db = await Mongo()
        await db.collection('feedbacks').insertOne(userData) // Adicionando um novo feedback

        console.log('Feedback Adicionado com sucesso')
        res.status(201)
        res.send(userData)
    } catch(error) {
        console.error(error)
    }
})

module.exports = router