const mongoose = require('mongoose')

const campanhaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    chavePix: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Campanha', campanhaSchema)
