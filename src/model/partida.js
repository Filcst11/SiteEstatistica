const Sequelize = require('sequelize')
const database = require('../db')

const Partida = database.define('partida', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_partida: {
        type: Sequelize.DATE,
        allowNull: false
    },
    nome_vencedor: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Partida