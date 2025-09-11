const Jogador = require('../model/jogador')

function index(req, res){
    //parte de saber se é admin ou nn
    let admin = req.session.admin === true
    let jogador = req.session.jogador ? true : false;


    //parte para receber as informações das postagens
    
    Jogador.findAll({
       
    }).then((jogadors)=>{
        res.render('index.html', {jogadors, jogador, admin})
    }).catch((erro_recuperar)=>{
        res.render('index.html', {erro_recuperar, jogador, admin})
    })
        
    
}

function administrador(req, res){
    let admin = req.session.admin === true
    let usuario = req.session.usuario ? true : false;

    Postagem.findAll({
       
    }).then((postagems)=>{
        res.render('administrador.html', {postagems, usuario, admin})
    }).catch((erro_recuperar)=>{
        res.render('administrador.html', {erro_recuperar,  usuario, admin})
    })
}

module.exports = {
    index,
    administrador
}