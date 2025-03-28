# 🎮 Quiz App

### Pantalla de Inicio
![Pantalla de Inicio](https://media.discordapp.net/attachments/1057074297555918869/1355004383066198197/image.png?ex=67e759ab&is=67e6082b&hm=0e0a12d923a84bdb527fa73729988804d377f6f33b15d12309b0384b37d4f7d8&=&format=webp&quality=lossless&width=1123&height=544)

Una aplicación interactiva de preguntas y respuestas con diseño moderno, temporizador, sistema de puntuación y más.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Demostración](#demostración)
- [Instalación](#instalación)
- [Cómo Jugar](#cómo-jugar)
- [Personalización](#personalización)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Contacto](#contacto)

## ✨ Características

- **Diseño Moderno y Responsivo**: Interfaz atractiva que funciona en dispositivos móviles y de escritorio
- **15 Preguntas de Cultura General**: Preguntas sobre historia, ciencia, geografía y más
- **Temporizador por Pregunta**: 30 segundos para responder cada pregunta
- **Sistema de Puntuación**: Gana 10 puntos por cada respuesta correcta
- **Feedback Visual**: Las respuestas correctas se marcan en verde y las incorrectas en rojo
- **Tabla de Clasificación**: Guarda y muestra las puntuaciones más altas
- **Animaciones y Efectos Visuales**: Transiciones suaves y efectos interactivos
- **Almacenamiento Local**: Las puntuaciones se guardan en el navegador

## 🎬 Demostración

La pantalla de inicio te da la bienvenida a la aplicación y te permite comenzar el quiz o ver las puntuaciones más altas.

### Pantalla de Preguntas
![Pantalla de Preguntas](https://media.discordapp.net/attachments/1057074297555918869/1355004447625056337/image.png?ex=67e759bb&is=67e6083b&hm=99544955485fd2170970b8b7a4f7fe070070575f17abb9eb25d0388312e9bbe7&=&format=webp&quality=lossless&width=1129&height=544)

Durante el quiz, se muestra una pregunta con cuatro opciones, un temporizador, tu progreso y puntuación actual.

### Respuesta Correcta
![Respuesta Correcta](https://media.discordapp.net/attachments/1057074297555918869/1355004559562637353/image.png?ex=67e759d5&is=67e60855&hm=4e5032a6a13891165f9942ff08bd1c01c2ab1b24c4b00d2c8b55447caa4bd0d5&=&format=webp&quality=lossless&width=1126&height=544)

Cuando seleccionas la respuesta correcta, se marca en verde para darte feedback visual positivo.

### Respuesta Incorrecta
![Respuesta Incorrecta](https://media.discordapp.net/attachments/1057074297555918869/1355004623299153930/image.png?ex=67e759e4&is=67e60864&hm=c26a94650c4daf88edc14cbb09670df407c01307d8fb0d9b0bf1ef88d61a9a8e&=&format=webp&quality=lossless&width=1128&height=544)

Si seleccionas una respuesta incorrecta, se marca en rojo y se muestra la respuesta correcta en verde.

### Pantalla Final
![Pantalla Final](https://media.discordapp.net/attachments/1057074297555918869/1355005983134453790/image.png?ex=67e75b29&is=67e609a9&hm=d2f5f6d295a5cc0e2079aa9e9e063e1e412ef240a975928a3558b19bb41d3a09&=&format=webp&quality=lossless&width=1115&height=544)

Al finalizar el quiz, puedes ver tu puntuación final y guardar tu nombre para la tabla de clasificación.

### Tabla de Puntuaciones
![Tabla de Puntuaciones](https://media.discordapp.net/attachments/1057074297555918869/1355007434774810855/image.png?ex=67e75c83&is=67e60b03&hm=4d7834aa9e153c60fc326bd8075a8fd3420c911fef15ab3b803322d08054f759&=&format=webp&quality=lossless&width=1130&height=544)

La tabla de clasificación muestra las mejores puntuaciones, con un diseño especial para los tres primeros lugares.

## 🚀 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/UnPendejoHola/quiz-game.git
   cd quiz-game
   ```

2. **Abre el archivo index.html en tu navegador**:
   - Haz doble clic en el archivo index.html, o
   - Usa un servidor local como Live Server en VSCode

## 🎮 Cómo Jugar

1. Haz clic en "Comenzar Quiz" en la pantalla de inicio
2. Lee la pregunta y selecciona una de las cuatro opciones
3. Tienes 30 segundos para responder cada pregunta
4. Recibirás feedback inmediato sobre tu respuesta:
   - Respuesta correcta: Se marca en verde
   - Respuesta incorrecta: Se marca en rojo y se muestra la correcta en verde
5. Al finalizar, ingresa tu nombre para guardar tu puntuación
6. ¡Intenta superar tu récord anterior!

## 🔧 Personalización

### Añadir Nuevas Preguntas

Puedes añadir más preguntas editando el array `questions` en el archivo `script.js`:

```javascript
const questions = [
    {
        question: "¿Tu nueva pregunta?",
        choice1: "Opción 1",
        choice2: "Opción 2",
        choice3: "Opción 3",
        choice4: "Opción 4",
        answer: 2  // Número de la respuesta correcta (1-4)
    },
    // Más preguntas...
];
```

### Modificar el Estilo

Personaliza la apariencia editando el archivo `styles.css`. Puedes cambiar colores, fuentes, animaciones y más:

```css
:root {
    /* Cambia los colores principales */
    --primary-color: #4361ee;
    --secondary-color: #7209b7;
    --accent-color: #f72585;
    
    /* Modifica otros aspectos visuales */
    --border-radius-md: 0.5rem;
    --transition-normal: 0.3s ease;
}
```

### Ajustar la Dificultad

- Cambia el tiempo por pregunta modificando el valor inicial de `timeLeft` en `script.js`
- Ajusta la cantidad de preguntas cambiando `MAX_QUESTIONS`
- Modifica los puntos por respuesta correcta en `CORRECT_BONUS`

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos, animaciones y diseño responsivo
- **JavaScript**: Lógica del juego y manipulación del DOM
- **LocalStorage API**: Almacenamiento de puntuaciones

## 📁 Estructura del Proyecto

```
quiz-app/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica de la aplicación
├── README.md           # Documentación
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar esta aplicación:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva función'`)
4. Haz push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme:

- Email: zpanochita@gmail.com

- GitHub: [UnPendejoHola](https://github.com/UnPendejoHola)

- Discord: [unpendejo3](https://discord.com/users/1046488706078482505)

---

Hecho con ❤️ por [zPanochita](https://zpanochita.lat)
