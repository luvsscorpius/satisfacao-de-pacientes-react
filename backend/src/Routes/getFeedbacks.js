const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.get('/', async (req, res) => {
    console.log('Requisacao recebida')
    try {
        const db = await Mongo()
        const collection = await db.collection('feedbacks').find({}).toArray()
        
        // Precisamos contar os documentos para mandar para o react admin
        // Erro do cors
        const totalCount = await db.collection('feedbacks').countDocuments()
        res.set('X-Total-Count', totalCount) // Adicionando no cabecalho

        // Precisamos formatar os usuarios
        const formattedFeedbacks = collection.map(feedback => ({
            id: feedback._id,
            ...feedback
        }))

        res.json(formattedFeedbacks)

    } catch (error) {
        console.error(error)
    }
})

module.exports = router