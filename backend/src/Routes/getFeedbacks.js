const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.get('/', async (req, res) => {
    console.log('Requisacao recebida')
    try {
        const db = await Mongo()
        const allFeedBacks = await db.collection('feedbacks').find({}).toArray()
        
        // Precisamos contar os documentos para mandar para o react admin
        // Erro do cors
        const totalCount = await db.collection('feedbacks').countDocuments()
        res.set('X-Total-Count', totalCount) // Adicionando no cabecalho

        // Tratando feedbacks por anonimos e nao anonimos
        // Anonimos
        const isAnonymousFeedbacks = allFeedBacks.filter(feedback => feedback.isAnonymous === true)
        // Nao anonimos
        const nonAnonymousFeedbacks = allFeedBacks.filter(feedback => feedback.isAnonymous === false)

        // // Precisamos formatar os usuarios
        // const formattedFeedbacks = allFeedBacks.map(feedback => ({
        //     id: feedback._id,
        //     ...feedback
        // }))

        const response = {
            isAnonymousFeedbacks: isAnonymousFeedbacks,
            nonAnonymousFeedbacks: nonAnonymousFeedbacks
        }

        res.json(response)
        console.log(response)

    } catch (error) {
        console.error(error)
    }
})

module.exports = router