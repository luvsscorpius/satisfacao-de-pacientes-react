const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const senha = 'minhasenha'

router.post('/', async (req, res) => {
    const {email} = req.body
    console.log(email)

    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()
    
        const foundUser = collection.find(user => user.email === email)
        if (!foundUser) {
            return res.status(400).send({ message: 'Usuário não encontrado' })
        }

        // gerando um token de recuperacao de senha
        const token = jwt.sign({id: foundUser._id}, senha, {expiresIn: '1hr'})

        // Configurando o transporte de email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        })

        // Enviando o email com o token
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: foundUser.email,
            subject: 'Redefinição de senha',
            text: `Clique no link para redefinir sua senha: http://localhost:3000/#/login/resetpassword?token=${token}`,
        }

        try {
            await transporter.sendMail(mailOptions)
            res.status(200).json(token)
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error) // Adicione esta linha
            res.status(500).json({message: 'Erro ao enviar e-mail', error})
        }

    } catch (error) {
        console.error(error)
    }
})

module.exports = router