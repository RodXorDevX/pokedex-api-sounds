# Pokedex API - Sonidos Pokémon

API REST que proporciona acceso a los sonidos de los Pokémon de las generaciones 1 a 5. Desplegada en Render para acceso público.

## Características

- Sonidos de los Pokémon del #001 al #649
- Fácil de integrar
- Respuestas rápidas
- Formato de audio WAV
- Despliegue en la nube listo para producción

## URL de Producción

La API está desplegada en:
```
https://pokedex-api-sounds.onrender.com
```

## Uso Rápido

### Obtener información de la API

```bash
curl https://pokedex-api-sounds.onrender.com/
```

**Respuesta:**
```json
{
  "message": "API de sonidos Pokémon Gen 1-5",
  "environment": "production",
  "endpoints": {
    "getSound": "/sound/:id",
    "example": "/sound/25"
  }
}
```

### Obtener sonido de un Pokémon

```bash
# Ejemplo: Obtener el sonido de Pikachu (ID: 25)
curl https://pokedex-api-sounds.onrender.com/sound/25 --output pikachu.wav
```

**Parámetros:**
- `id` (requerido): Número de la Pokédex del Pokémon (1-649)

**Respuestas:**
- 200: Archivo de audio WAV del Pokémon
- 400: ID inválido (fuera del rango 1-649)
- 404: Sonido no encontrado

## Ejemplos de Uso

### Usando JavaScript (en el navegador)

```javascript
// Reproducir sonido de Pikachu (ID: 25)
const playPokemonSound = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokedex-api-sounds.onrender.com/sound/${pokemonId}`);
    if (!response.ok) throw new Error('Sonido no encontrado');
    
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Ejemplo de uso
playPokemonSound(25); // Reproduce el sonido de Pikachu
```

### Usando Python

```python
import requests

def download_pokemon_sound(pokemon_id, filename):
    url = f"https://pokedex-api-sounds.onrender.com/sound/{pokemon_id}"
    response = requests.get(url)
    
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Sonido guardado como {filename}")
    else:
        print(f"Error: {response.status_code} - {response.text}")

# Ejemplo de uso
download_pokemon_sound(25, "pikachu.wav")
```

## Despliegue Local

Si prefieres ejecutar la API localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RodXorDevX/pokedex-api-sounds.git
   cd pokedex-api-sounds
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example`

4. Inicia el servidor:
   ```bash
   npm start
   ```

5. La API estará disponible en `http://localhost:3000`

## Estructura del Proyecto

```
.
├── Poke-Sounds/     # Archivos de sonido de los Pokémon
├── index.js         # Punto de entrada de la aplicación
├── package.json     # Configuración del proyecto y dependencias
├── render.yaml      # Configuración de despliegue en Render
└── README.md       # Este archivo
```

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
