const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.get('/', async (req, res) => {
    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()

        res.send(collection)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router