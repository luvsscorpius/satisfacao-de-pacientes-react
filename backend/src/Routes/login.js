const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Mongo = require('../config/db')
const bcrypt = require('bcrypt')
const secretKey = 'minhasenha'

router.post('/', async (req, res) => {
    try {
        //Pegamos oque vem da requisição do frontend
        const {loginData} = req.body

        const db = await Mongo()
        const collection = await db.collection('usuarios')

        // Procurando usuário pelo nome fornecido
        const user = await collection.findOne({username: loginData.username})

        // Comparando senha fornecida com o hash armazenado no database
        const isPasswordCorrect = await bcrypt.compare(loginData.password, user.password)

        if (isPasswordCorrect) {
            const token = jwt.sign({name: user.username}, secretKey, {expiresIn: "1hr"})

            const userWithToken = {...user, token}
            return res.status(200).json(userWithToken)
        } else {
            return res.status(401).json({message: "Invalid credentials"})
        }
    } catch (error) {
        console.error(error)
    }
})

module.exports = router