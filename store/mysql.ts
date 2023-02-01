import mysql from 'mysql';
import { config } from '../config/config';

let connection;

function handleCon() {
    connection = mysql.createConnection({
        host     : config.db.host,
        user     : config.db.user,
        password : config.db.password,
        database : config.db.database
    })

    connection.connect((err) =>{
        console.log('[ db ]', err)
        setTimeout(handleCon,2000)
    })

    connection.on('error', err =>{
        console.log('[ db ]', err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleCon()
        }else{
            throw err;
        }
    })

}

handleCon()