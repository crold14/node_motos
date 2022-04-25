const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b8a57526654af5',
    password: 'da10abb9',
    port: 3306,
    database: 'heroku_b37805d55b9c5bb'
});

global.db = pool.promise()
/* mysql://b8a57526654af5:da10abb9@eu-cdbr-west-02.cleardb.net/heroku_b37805d55b9c5bb?reconnect=true */