const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.get('/', async (req, res) => {
    console.log('Requisacao recebida')
    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()
        
        // Precisamos contar os documentos para mandar para o react admin
        // Erro do cors
        const totalCount = await db.collection('usuarios').countDocuments()
        res.set('X-Total-Count', totalCount) // Adicionando no cabecalho

        // Precisamos formatar os usuarios
        const formattedUsers = collection.map(user => ({
            id: user._id,
            ...user
        }))

        res.json(formattedUsers)

    } catch (error) {
        console.error(error)
    }
})

module.exports = router