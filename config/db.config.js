const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'rto141822',
    port: 3306,
    database: 'rutas_motos'
});

global.db = pool.promise()