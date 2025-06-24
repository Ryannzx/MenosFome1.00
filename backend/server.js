const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const campanhaRoutes = require('./routes/campanhaRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Rota de teste
app.get('/', (req, res) => {
    res.send('API do Menos Fome Brasil está no ar!')
})

app.use('/campanhas', campanhaRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch(err => console.error('Erro ao conectar no MongoDB:', err))
