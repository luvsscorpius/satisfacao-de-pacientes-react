const bcrypt = require('bcrypt')
const saltRounds = 12;
const Mongo = require('../config/db')

const username = 'luis'
const senha = 'luis'

bcrypt.hash(senha, saltRounds, async function(err, hash) {
    if (err) throw err
    console.log('Senha criptografada', hash)

    try {
        const db = await Mongo()
    
        await db.collection('usuarios').insertOne({username: username, password: hash})
    
        return console.log('Enviado')
    } catch (err) {
        console.error(err)
    }
})