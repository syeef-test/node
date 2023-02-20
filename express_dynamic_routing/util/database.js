const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete','root','root',{dialect:'mysql',host:'127.0.0.1'});


// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'node_complete',
//     password: 'root'
// });
// module.exports = pool.promise();

module.exports = sequelize;