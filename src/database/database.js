const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "punk1991",
    database: "shop",
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'escriba su password aqui';

connection.connect( (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("connected to db");
    }
} );

module.exports = connection

