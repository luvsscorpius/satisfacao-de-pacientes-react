const bcrypt = require('bcrypt')
const saltRounds = 12;
const Mongo = require('../config/db')

const username = 'and'
const senha = 'January18Th*'

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