const Jogador = require('../model/jogador')
const Partida = require('../model/partida')

function index(req, res){
    //parte de saber se é admin ou nn
    let admin = req.session.admin === true
    let jogador = req.session.usuario ? true : false;
    
    
    if (req.session.autorizado){
        let nomeJogador = req.session.usuario.apelido
        
        Partida.count().then(qtdPartidas => {
            //parte para receber as informações das postagens
            Jogador.findAll({
        
            }).then((jogadors)=>{
                res.render('index.html', {jogadors, jogador, admin, nomeJogador, qtdPartidas})
            }).catch((erro_recuperar)=>{
                res.render('index.html', {erro_recuperar, jogador, admin, nomeJogador, qtdPartidas})
            })
        })
    }
    else{
        let erro_autenticacao = true
        res.render('login.html', {erro_autenticacao})
    }
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