const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Mongo = require('../config/db')

const secretKey = 'minhasenha'

router.post('/', async (req, res) => {
    try {
        //Pegamos oque vem da requisição do frontend
        const {loginData} = req.body
        console.log(loginData)

        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()

        const user = collection.find(user => user.username === loginData.username && user.password === loginData.password)
        console.log(user)

        if (user) {
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