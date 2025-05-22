const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const SOUNDS_DIR = path.join(__dirname, 'sounds');

app.get('/', (req, res) => {
  res.send('API de sonidos Pokémon Gen 1-5');
});

app.get('/sound/:id', (req, res) => {
  const { id } = req.params;
  const filename = `${id.padStart(3, '0')}.wav`;
  const filePath = path.join(SOUNDS_DIR, filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Sonido no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
