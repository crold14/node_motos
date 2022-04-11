//1 paso: fichero que contiene todos los manejadores de la app (configuracion basica de nuestra app de express)

const express = require('express');

// 2 paso: crear la app , crear la variable q nos permite recibir peticiones y generar respuestas

const app = express();

//configuracion de los manejadores



//exportamos la app
module.exports = app;