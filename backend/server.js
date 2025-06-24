const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const campanhaRoutes = require('./routes/campanhaRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/campanhas', campanhaRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => {
            console.log('Servidor rodando em http://localhost:5000')
        })
    })
    .catch(err => console.error('Erro ao conectar no MongoDB:', err))
