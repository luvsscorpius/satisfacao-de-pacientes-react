const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
    const {email} = req.body
    console.log(email)

    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()
    
        const foundUser = collection.find(user => user.email === email)
        if (!foundUser) {
            return res.status(400).send({message: 'Usuario não encontrado'})
        }


    } catch (error) {
        console.error(error)
    }
})

module.exports = router