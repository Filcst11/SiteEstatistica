const Sequelize = require('sequelize');
const database = require('../db');

const Jogador_Jogo = database.define('jogador_jogo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pontos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    id_jogador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'jogador', // nome da tabela Jogador
            key: 'id'
        }
    },
    id_jogo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'jogo', // nome da tabela Jogo
            key: 'id'
        }
    }
})

module.exports = Jogador_Jogo