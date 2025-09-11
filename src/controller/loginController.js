const Jogador = require('../model/jogador')

function formularioLogin(req, res){
    res.render('login.html')
}

async function autenticar(req, res){
    const jogador = await Jogador.findOne({
        where: {
            apelido: req.body.apelido,
            senha: req.body.senha
        }
    })
    
    if (jogador != null){
        req.session.autorizado = true
        req.session.jogador = jogador

        if(jogador.admin){
            req.session.admin = true
            res.redirect('/index')
        }
        else{
            req.session.admin = false
            res.redirect('/index')
        }
    }
    else{
        let erro_autenticacao = true
        res.render('login.html', {erro_autenticacao})
    }
}

function logout(req, res){
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    formularioLogin,
    autenticar,
    logout
}