const preguntas = [
    {
        pregunta: "¿Quién es el protagonista principal de Dragon Ball?",
        opciones: ["Vegeta", "Goku", "Piccolo", "Gohan"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Como se llamaba el objeto que usaba para volar Goku de niño?",
        opciones: ["Nube Voladora", "Chunchunmaru", "Helicoptero", "Avion"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Quién entrena a Goku en su infancia?",
        opciones: ["Maestro Roshi", "Krillin", "Piccolo", "Kami-sama"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del hermano de Goku?",
        opciones: ["Turles", "Broly", "Raditz", "Nappa"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué raza alienígena es Goku?",
        opciones: ["Namekiano", "Humano", "Saiyajin", "Androide"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es el nombre del hijo mayor de Goku?",
        opciones: ["Goten", "Trunks", "Gohan", "Pan"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es el príncipe de los Saiyajin?",
        opciones: ["Goku", "Vegeta", "Nappa", "Bardock"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cómo se llama la técnica donde Goku desaparece en un instante?",
        opciones: ["Kamehameha", "Kaioken", "Teletransportación", "Kanasin"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es el eterno rival y amigo de Goku?",
        opciones: ["Piccolo", "Krillin", "Vegeta", "Yamcha"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es el nombre del creador de Dragon Ball?",
        opciones: ["Masashi Kishimoto", "Eiichiro Oda", "Akira Toriyama", "Yuki Tabata"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuántos deseos cumple Shenlong al ser invocado?",
        opciones: ["Uno", "Dos", "Tres", "Cuatro"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del planeta natal de los Saiyajin?",
        opciones: ["Tierra", "Namek", "Vegeta", "Freezer"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es el Dios de la Destrucción en Dragon Ball Super?",
        opciones: ["Whis", "Bills", "Zeno-Zama", "Champa"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el nombre de la transformación de pelo azul de Goku?",
        opciones: ["Super Saiyajin Dios", "Super Saiyajin Blue", "Ultra Instinto", "Super Saiyajin 3"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién es el padre de Gohan y Goten?",
        opciones: ["Vegeta", "Piccolo", "Goku", "Krillin"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es el nombre de la técnica de fusión que utilizan Goku y Vegeta?",
        opciones: ["Metamorfosis", "Potara", "Namekusei", "Kaio-ken"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién es el padre de Goku?",
        opciones: ["Bardock", "Raditz", "Rey Vegeta", "Paragus"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del planeta donde Freezer destruyó a los Saiyajin?",
        opciones: ["Namek", "Tierra", "Vegeta", "Yardrat"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién entrenó a Gohan durante la saga de los Saiyajin?",
        opciones: ["Goku", "Vegeta", "Piccolo", "Krillin"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es el nombre de la esposa de Vegeta?",
        opciones: ["Bulma", "Milk", "Android 18", "Videl"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué personaje se fusiona con Kami-sama?",
        opciones: ["Goku", "Piccolo", "Gohan", "Trunks"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el nombre del hijo de Gohan y Videl?",
        opciones: ["Goten", "Trunks", "Pan", "Bulma"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es el creador de los Androides?",
        opciones: ["Dr. Gero", "Dr. Brief", "Babidi", "Pilaf"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del planeta de origen de Freezer?",
        opciones: ["Freezer", "Cold", "Cooler", "Frost"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién es el rival de Yamcha en el 21º Torneo de Artes Marciales?",
        opciones: ["Krillin", "Goku", "Tien Shinhan", "Jackie Chun"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es el nombre del ataque característico de Vegeta?",
        opciones: ["Kamehameha", "Masenko", "Galick Gun", "Special Beam Cannon"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es el Supremo Kaio-sama del Universo 7?",
        opciones: ["Shin", "Kibito", "Old Kai", "Grand Kai"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del padre de Bulma?",
        opciones: ["Dr. Gero", "Dr. Brief", "Mr. Satan", "Ox-King"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién es el primer Super Saiyajin Dios?",
        opciones: ["Goku", "Vegeta", "Yamoshi", "Broly"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cómo murió Goku la primera vez?",
        opciones: ["Infarto", "Por Piccolo", "Sacrificándose contra Raditz", "Por Broly"],
        respuestaCorrecta: 2
    }
];

let preguntasActuales = [];
let indicePreguntaActual = 0;
let puntuacion = 0;
let temporizador;
let powerLevel = 0;

const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaReglas = document.getElementById('pantalla-reglas');
const pantallaExamen = document.getElementById('pantalla-examen');
const pantallaResultados = document.getElementById('pantalla-resultados');
const btnIniciar = document.getElementById('btn-iniciar');
const btnComenzarExamen = document.getElementById('btn-comenzar-examen');
const contenedorPregunta = document.getElementById('contenedor-pregunta');
const btnSiguiente = document.getElementById('btn-siguiente');
const elementoTemporizador = document.getElementById('temporizador');
const numeroPregunta = document.getElementById('numero-pregunta');
const btnReintentar = document.getElementById('btn-reintentar');
const btnSalir = document.getElementById('btn-salir');
const powerMeter = document.getElementById('power-meter');
const powerBar = document.querySelector('.power-bar');

btnIniciar.addEventListener('click', mostrarReglas);
btnComenzarExamen.addEventListener('click', iniciarExamen);
btnSiguiente.addEventListener('click', siguientePregunta);
btnReintentar.addEventListener('click', iniciarExamen);
btnSalir.addEventListener('click', mostrarPantallaInicio);

function mostrarReglas() {
    pantallaInicio.style.display = 'none';
    pantallaReglas.style.display = 'block';
}

function iniciarExamen() {
    pantallaReglas.style.display = 'none';
    pantallaResultados.style.display = 'none';
    pantallaExamen.style.display = 'block';
    preguntasActuales = obtenerPreguntasAleatorias(10);  
    indicePreguntaActual = 0;
    puntuacion = 0;
    powerLevel = 0;
    actualizarPowerMeter();
    mostrarPregunta();
}

function obtenerPreguntasAleatorias(num) {
    const mezcladas = [...preguntas].sort(() => 0.5 - Math.random());
    return mezcladas.slice(0, num);
}

function mostrarPregunta() {
    const pregunta = preguntasActuales[indicePreguntaActual];
    numeroPregunta.textContent = `${indicePreguntaActual + 1} / ${preguntasActuales.length}`;
    contenedorPregunta.innerHTML = `
        <h3 class="mb-4">${pregunta.pregunta}</h3>
        <div class="opciones">
            ${pregunta.opciones.map((opcion, index) => `
                <div class="opcion mb-2 p-2 border rounded" data-index="${index}">
                    ${opcion}
                    <span class="icono-resultado"></span>
                </div>
            `).join('')}
        </div>
    `;

    const opciones = contenedorPregunta.querySelectorAll('.opcion');
    opciones.forEach(opcion => {
        opcion.addEventListener('click', seleccionarOpcion);
    });

    btnSiguiente.style.display = 'none';
    iniciarTemporizador();
}

function seleccionarOpcion(e) {
    clearInterval(temporizador);
    const opcionSeleccionada = e.currentTarget;
    const respuestaSeleccionada = parseInt(opcionSeleccionada.dataset.index);
    const pregunta = preguntasActuales[indicePreguntaActual];

    const opciones = contenedorPregunta.querySelectorAll('.opcion');
    opciones.forEach(opcion => {
        opcion.removeEventListener('click', seleccionarOpcion);
        opcion.classList.remove('seleccionada');
    });

    opcionSeleccionada.classList.add('seleccionada');

    if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
        opcionSeleccionada.classList.add('correcta');
        opcionSeleccionada.querySelector('.icono-resultado').innerHTML = '<i class="fas fa-check"></i>';
        puntuacion++;
        powerLevel += 10;
        actualizarPowerMeter();
    } else {
        opcionSeleccionada.classList.add('incorrecta');
        opcionSeleccionada.querySelector('.icono-resultado').innerHTML = '<i class="fas fa-times"></i>';
        opciones[pregunta.respuestaCorrecta].classList.add('correcta');
        opciones[pregunta.respuestaCorrecta].querySelector('.icono-resultado').innerHTML = '<i class="fas fa-check"></i>';
    }

    btnSiguiente.style.display = 'block';
}

function iniciarTemporizador() {
    let tiempoRestante = 15;
    elementoTemporizador.textContent = tiempoRestante;

    temporizador = setInterval(() => {
        tiempoRestante--;
        elementoTemporizador.textContent = tiempoRestante;

        if (tiempoRestante === 0) {
            clearInterval(temporizador);
            const opciones = contenedorPregunta.querySelectorAll('.opcion');
            const pregunta = preguntasActuales[indicePreguntaActual];
            opciones.forEach(opcion => {
                opcion.removeEventListener('click', seleccionarOpcion);
                opcion.classList.add('no-respondida');
            });

            const mensajeNoRespondida = document.createElement('div');
            mensajeNoRespondida.textContent = 'Tiempo agotado. Pregunta no respondida.';
            mensajeNoRespondida.classList.add('mensaje-no-respondida');
            contenedorPregunta.appendChild(mensajeNoRespondida);

            opciones[pregunta.respuestaCorrecta].classList.add('correcta');
            opciones[pregunta.respuestaCorrecta].querySelector('.icono-resultado').innerHTML = '<i class="fas fa-check"></i>';
            btnSiguiente.style.display = 'block';
        }
    }, 1000);
}

function siguientePregunta() {
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntasActuales.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}
//aqui es donde deben de ir los gifs en vez de las imagenes para que se vea mejor ya que no me gusto que este estatico quiero movimniento de imagen le meti muchas animaciones xd
function mostrarResultados() {
    pantallaExamen.style.display = 'none';
    pantallaResultados.style.display = 'block';
    
    const mensajePuntuacion = document.getElementById('mensaje-puntuacion');
    const puntuacionElement = document.getElementById('puntuacion');
    const emojiResultado = document.getElementById('emoji-resultado');
    const resultadoImagen = document.getElementById('resultado-imagen');
    
    puntuacionElement.textContent = `Tu puntuación: ${puntuacion} de ${preguntasActuales.length}`;
    
    let mensaje, emoji, imagenSrc;
    if (puntuacion === 10) {
        imagenSrc = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnc0YmgyZXFlb2pnam45Y29qYWp1OHk4eGFvbG5vYTFmdTV5amV2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SIuI7syOPvm1HAd5GF/giphy.webp';
        mensaje = '¡Ultra Instinto Dominado! Eres un verdadero Dios de la Destrucción. 🔥';
        emoji = '👑';

    } else if (puntuacion >= 8) {
        imagenSrc = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtjMWF4dmowd3Y3ajhtYTkwejhqbmQxZXZ6YWVhNDcxZjR0aGh1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WNAHuqi0ZyXi1sXlZG/giphy.webp';
        mensaje = '¡Super Saiyajin Blue! Tu poder es impresionante. 💪';
        emoji = '🔵';
    } else if (puntuacion >= 6) {
        imagenSrc = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBlczkwdndhY2hhbWtyc3F2c3k1c2pscTV3aWI3eG14dHZzNDJheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XBimpYAR7OKRAqKD7P/giphy.webp';
        mensaje = '¡Super Saiyajin God! Estás cerca de alcanzar el siguiente nivel. 🌟';
        emoji = '🔴';

    } else if (puntuacion >= 4) {
        imagenSrc = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm9kM296MHk2ZXlleHA1anRqaGJ4MDRieXpkdTQwanZrdDc5ZGplNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tz7oXvXRRYSgU/giphy.webp';
        mensaje = '¡Super Saiyajin 3! Tu conocimiento es formidable. 🐉';
        emoji = '⚡';
    } else if (puntuacion >= 2) {
        imagenSrc = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHphZmdzdHA0eDI5Nml5dWpod2UxdjNlaDdpMTd3ajAwd3V0bGluaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nuz7SX3jKh8Uo/giphy.webp';
        mensaje = '¡Super Saiyajin 2! Buen intento, sigue entrenando. 💥';
        emoji = '⚡';
    } else if (puntuacion >= 1) {
        imagenSrc = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2tjanExYXJoc3ZtZHk0bmltb2QzMHQ5enI4dWxrYzRudDltZThvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UBB6f0hKhlShy/giphy.webp';
        mensaje = '¡Super Saiyajin! Hay espacio para mejorar. 🔥';
        emoji = '🔥';
    } else {
        imagenSrc = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hhZjEydmJiMmo0MXd1b3d4YWt3djUzbHl6eTd5d25meHFmeWpjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNd9Ljg37yeVcCHyE/giphy.webp';
        mensaje = 'Nivel Saiyajin base. ¡No te rindas, sigue entrenando! 💪';
        emoji = '🏋️';
    }

    resultadoImagen.style.display = 'block';
    mensajePuntuacion.textContent = mensaje;
    emojiResultado.textContent = emoji;
    resultadoImagen.src = imagenSrc;
    resultadoImagen.style.display = 'block';
}




function mostrarPantallaInicio() {
    pantallaResultados.style.display = 'none';
    pantallaInicio.style.display = 'block';
    resetearPowerMeter();
}

function actualizarPowerMeter() {
    powerBar.style.width = `${powerLevel}%`;
    if (powerLevel >= 100) {
        powerBar.classList.add('max-power');
    } else {
        powerBar.classList.remove('max-power');
    }
}

function resetearPowerMeter() {
    powerLevel = 0;
    actualizarPowerMeter();
}

// Animación del titulo principal
const titulo = document.querySelector('.card-title');
titulo.innerHTML = titulo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.card-title .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.card-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Estos son efectos de particulas para que se vea muy bien xdxdxd no lo quites
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});