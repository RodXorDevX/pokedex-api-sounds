require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const SOUNDS_DIR = path.join(__dirname, 'Poke-Sounds');

// Configuración básica de CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'API de sonidos Pokémon Gen 1-5',
    environment: NODE_ENV,
    endpoints: {
      getSound: '/sound/:id',
      example: '/sound/25',
    },
  });
});

app.get('/sound/:id', (req, res) => {
  const { id } = req.params;
  // Eliminar ceros a la izquierda del ID
  const idNum = parseInt(id, 10);
  
  // Validar que el ID sea un número válido
  if (isNaN(idNum) || idNum < 1 || idNum > 649) {
    return res.status(400).json({ error: 'ID de Pokémon inválido. Debe ser un número entre 1 y 649.' });
  }
  
  const filename = `${idNum}.wav`;
  const filePath = path.join(SOUNDS_DIR, filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Sonido no encontrado' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} en modo ${NODE_ENV}`);
});

// Manejo de timeouts
server.timeout = parseInt(process.env.TIMEOUT || '30000');
