const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const jwt = require('jsonwebtoken')

const senha = 'minhasenha'

router.post('/:token', async (req, res) => {
    const {token} = req.params
    const {newPassword} = req.body

    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()

        const decoded = jwt.verify(token, senha)
    
        const foundUser = collection.find(user => user.id === decoded.id)
        if (!foundUser) {
            return res.status(400).send({ message: 'Token inválido' })
        }   
    } catch (error) {
        console.error(error)
    }
})

module.exports = router