require('dotenv').config();

const fs = require('fs');

module.exports = {
    development: {
      username: "eric",
      password: "chalon",
      database: "shakespeare",
      host: "localhost",
      dialect: "postgres",
      define: {
        timestamps: false
      }
    }
}