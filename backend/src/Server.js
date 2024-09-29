const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')

app.use(express.json())
// Precisamos expor o cabecalho para o react admin
app.use(cors({exposedHeaders: ['X-Total-Count']}))

// Importando as rotas
const createFeedBack = require('./Routes/createFeedBack')
const login = require('./Routes/login')
const getUsers = require('./Routes/getUsers')

// Usando as rotas
app.use('/createFeedBack', createFeedBack)
app.use('/login', login)
app.use('/users', getUsers)

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})