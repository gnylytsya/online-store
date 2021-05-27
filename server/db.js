const {Sequelize} = require('sequelize')

module.export = new Sequelize (
    process.env.DB.NAME, // Name DB
    process.env.DB.user,// User
    process.env.DB.PASSWORD, // Password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST
    }
})