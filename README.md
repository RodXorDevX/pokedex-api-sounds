# Pokedex API - Sonidos Pokémon

API REST que proporciona acceso a los sonidos de los Pokémon de las generaciones 1 a 5.

## Características

- Sonidos de los Pokémon del #001 al #649
- Fácil de integrar
- Respuestas rápidas
- Formato de audio WAV

## Requisitos

- Node.js 14.x o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RodXorDevX/pokedex-api-sounds.git
   cd pokedex-api-sounds
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. El servidor estará disponible en `http://localhost:3000`

## Endpoints

### Obtener información básica

```
GET /
```

Muestra un mensaje de bienvenida.

### Obtener sonido de un Pokémon

```
GET /sound/:id
```

**Parámetros:**
- `id` (requerido): Número de la Pokédex del Pokémon (1-649)

**Ejemplo de uso:**
```
GET http://localhost:3000/sound/25
```

**Respuestas:**
- 200: Archivo de audio WAV del Pokémon
- 404: Si el sonido no se encuentra

## Ejemplos

### Usando cURL

```bash
curl -X GET "http://localhost:3000/sound/25" --output pikachu.wav
```

### Usando JavaScript (fetch)

```javascript
fetch('http://localhost:3000/sound/25')
  .then(response => {
    if (!response.ok) throw new Error('Sonido no encontrado');
    return response.blob();
  })
  .then(blob => {
    const audio = new Audio(URL.createObjectURL(blob));
    audio.play();
  })
  .catch(error => console.error('Error:', error));
```

## Estructura del proyecto

```
.
├── Poke-Sounds/     # Archivos de sonido de los Pokémon
├── index.js         # Punto de entrada de la aplicación
├── package.json     # Configuración del proyecto y dependencias
└── README.md       # Este archivo
```

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
