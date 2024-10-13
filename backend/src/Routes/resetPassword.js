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
        console.log(foundUser)
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
            // Utilizando html aqui ao inves de text para deixar o email personalizavel
            html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #2E86C1;">Olá, ${foundUser.username}!</h2>
                <p>Recebemos uma solicitação para redefinir sua senha.</p>
                <p>Para continuar com o processo de redefinição, clique no botão abaixo:</p>
                <a href="http://localhost:3000/#/login/resetpassword?token=${token}" 
                   style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                   Redefinir Senha
                </a>
                <p style="margin-top: 20px;">Se você não solicitou essa alteração, ignore este e-mail.</p>
                <p>Atenciosamente,<br/>Equipe de Suporte</p>
                <div style="margin-top: 30px; font-size: 12px; color: #999;">
                    <p>Este é um e-mail automático, por favor não responda.</p>
                </div>
            </div>
        `,
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