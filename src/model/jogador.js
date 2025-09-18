const Sequelize = require('sequelize')
const database = require('../db')

const Jogador = database.define('jogador', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    apelido: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    vitorias: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    total_pontos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    qtd_partidas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    imagemLink: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    } 
})

module.exports = Jogador;