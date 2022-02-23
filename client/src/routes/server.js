const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection')
const routes = require('./usuarios')
const cors = require('cors');


//Crear el servidor
const app = express()

app.set('port', process.env.PORT || 10000)

//Conectar la BD
const dbOptions = {
    port: 3306, 
    // user: process.env.GATSBY_USER_BD,
    // password: process.env.GATSBY_PASS_BD,
    // database: process.env.GATSBY_BD
    host: 'localhost', 
    user: 'root',
    password: 'cd4dm1n',
    database: 'bioseikatsu'
}

//Habilitar cors

app.use(cors());

// middleware
app.use(myconn(mysql,dbOptions, 'single'))
app.use(express.json({extended: true}));

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//Importae rutas
app.use('/api/clientes', routes)

//server running
app.listen(app.get('port'), ()=> {
    console.log('server running on port', app.get('port'))

})