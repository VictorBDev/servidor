const express = require('express');
const conectarDB = require('./config/db');
//cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

//Creación del servidor
const app = express();

//Conectar a la base de datos
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
  console.log("El servidor está corriendo en el puerto 4000")
})