require('dotenv').config()

const config = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: 'mysql'
}

module.exports = {
  development: config,
  teste: config,
  production: config
}
