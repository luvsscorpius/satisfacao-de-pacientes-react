const express = require('express')
const app = express()
const port = 3000

// Importando as rotas
const createFeedBack = require('./Routes/createFeedBack')

// Usando as rotas
app.use('/createFeedBack', createFeedBack)

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})