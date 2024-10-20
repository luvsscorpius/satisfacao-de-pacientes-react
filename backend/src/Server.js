const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
require('dotenv').config();

app.use(express.json())
// Precisamos expor o cabecalho para o react admin
app.use(cors({exposedHeaders: ['X-Total-Count']}))

// Importando as rotas
const indexRouter = require('./Routes/index')
const createFeedBack = require('./Routes/createFeedBack')
const login = require('./Routes/login')
const getUsers = require('./Routes/getUsers')
const getFeedbacks = require('./Routes/getFeedbacks')
const resetPassword = require('./Routes/resetPassword')
const checkTokenResetPassword = require('./Routes/checkTokenResetPassword')

// Usando as rotas
app.use('/', indexRouter)
app.use('/createFeedBack', createFeedBack)
app.use('/login', login)
app.use('/users', getUsers)
app.use('/feedbacks', getFeedbacks)
app.use('/request-password-reset', resetPassword)
app.use('/reset-password', checkTokenResetPassword)

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})