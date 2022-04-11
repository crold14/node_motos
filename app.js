//1 paso: fichero que contiene todos los manejadores de la app (configuracion basica de nuestra app de express)

const express = require('express');

// 2 paso: crear la app , crear la variable q nos permite recibir peticiones y generar respuestas

const app = express();

// app.use(cors());
app.use(express.json()); //para poder recibir objetos a traves del body
app.use(express.urlencoded({ extended: true }))


//configuracion de los manejadores
app.use(require('./routes'));


//exportamos la app
module.exports = app;