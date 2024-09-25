const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.put('/', async (req, res) => {
    try {
        console.log(req.body)
    } catch(error) {
        console.error(error)
    }
})

module.exports = router