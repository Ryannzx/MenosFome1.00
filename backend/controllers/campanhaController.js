const Campanha = require('../models/Campanha')

const criarCampanha = async (req, res) => {
    try {
        const novaCampanha = new Campanha(req.body)
        await novaCampanha.save()
        res.status(201).json(novaCampanha)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar campanha' })
    }
}

const listarCampanhas = async (req, res) => {
    try {
        const campanhas = await Campanha.find()
        res.json(campanhas)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar campanhas' })
    }
}

module.exports = {
    criarCampanha,
    listarCampanhas,
}
