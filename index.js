const express = require('express');
const conectarDB = require('./config/db');
const datosRoutes = require('./routes/datos');
const dotenv = require('dotenv');
const cors = require('cors');

// Se crea el server
const app = express();

// Cargar variables
dotenv.config({ path: './variables.env' });

// Conexión a DB
conectarDB();

// Habilitar CORS ANTES de las rutas
app.use(cors());

// Habilitar body parser JSON
app.use(express.json());

// Rutas de la API
app.use('/api', datosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Servidor escuchando
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


