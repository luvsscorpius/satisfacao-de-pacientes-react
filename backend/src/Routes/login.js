const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Mongo = require('../config/db')

const secretKey = 'minhasenha'

router.post('/', async (req, res) => {
    try {
        //Pegamos oque vem da requisição do frontend
        const {loginData} = req.body
        console.log(loginData)
    } catch (error) {
        console.error(error)
    }
})