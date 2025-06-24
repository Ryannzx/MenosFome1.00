const express = require('express')
const router = express.Router()
const { criarCampanha, listarCampanhas, excluirCampanha } = require('../controllers/campanhaController')

router.post('/', criarCampanha)
router.get('/', listarCampanhas)


module.exports = router
