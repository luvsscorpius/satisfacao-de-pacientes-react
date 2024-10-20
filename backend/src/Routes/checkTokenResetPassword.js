const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
const saltRounds = 12

const senha = 'minhasenha'

router.post('/:token', async (req, res) => {
    const { token } = req.params
    const { newPassword } = req.body

    console.log(token, newPassword)

    // Criptografando a nova senha
    bcrypt.hash(newPassword, saltRounds, async (err, hash) => {
        if (err) throw err
        console.log('Senha criptografada', hash)

        try {
            const db = await Mongo()

            const decoded = jwt.verify(token, senha)

            const foundUser = await db.collection('usuarios').findOne({ _id: new ObjectId(decoded.id) })
            console.log(foundUser)
            if (!foundUser) {
                return res.status(400).send({ message: 'Token inválido' })
            }

            await db.collection('usuarios').updateOne(
                { _id: foundUser._id },
                { $set: { password: hash } }
            )

            console.log('Senha atualizada com sucesso')
            res.status(200).send({ message: 'Senha atualizada com sucesso' })
        } catch (error) {
            console.error(error)
        }

    })
})

module.exports = router