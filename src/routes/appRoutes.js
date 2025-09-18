const express = require('express');
const router  = express.Router();
const appController = require('../controller/appController')
const cadastrarJogador = require('../controller/cadastrarJogador')
//const postagemController = require('../controller/postagemController')
const loginController = require('../controller/loginController')
//const contaController = require('../controller/contaController')

router.get('/', loginController.formularioLogin)

router.get('/login', loginController.formularioLogin)
router.post('/login', loginController.autenticar)
router.get('/logout', loginController.logout)

router.get('/cadastrarUsuario', cadastrarJogador.formulario)
router.post('/cadastrarUsuario', cadastrarJogador.cadastrar)

router.get('/index', appController.index)



module.exports = router