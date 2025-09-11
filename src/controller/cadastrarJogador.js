const Jogador = require('../model/jogador');

function formulario(req, res){
    res.render('cadastrarJogador.html')
}

function cadastrar(req, res) {
    let jogador = {
        nome: req.body.nome,
        apelido: req.body.apelido,
        senha: req.body.senha,
    }
    
    Jogador.create(jogador).then(()=>{
        let sucesso = true;
        res.render('cadastrarJogador.html', {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render('cadastrarJogador.html', {erro});
    });
}

module.exports = {
    formulario,
    cadastrar
}