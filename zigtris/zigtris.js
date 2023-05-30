// Definición del ancho y alto del lienzo
const [width, height] = [100, 200];

// Creación de una memoria de WebAssembly con un tamaño inicial y máximo especificado
const memory = new WebAssembly.Memory({
  initial: 100,
  maximum: 200,
});

// Objeto de importación utilizado para proporcionar funciones y objetos a WebAssembly
const importObject = {
  env: {
    // Función que recibe los FPS calculados del juego
    reportFPS: (fps) => console.log("FPS: ", fps),
    // Objeto de memoria que se pasa a WebAssembly
    memory: memory,
  },
};

// Carga y ejecución del módulo WebAssembly
WebAssembly.instantiateStreaming(fetch("zig-out/lib/zigtris.wasm"), importObject).then((result) => {
  // Creación de una vista de memoria en forma de Uint8Array
  const wasmMemoryArray = new Uint8Array(memory.buffer);


  const game = document.getElementById("game");

  // Obtiene el elemento del lienzo y su contexto 2D
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  // Establece el tamaño del lienzo
  canvas.width = width;
  canvas.height = height;

  // Creación de un objeto ImageData para almacenar los datos de imagen
  const imageData = context.createImageData(width, height);
  const imageDataBuffer = new Uint8Array(imageData.data.buffer);

  // Obtiene el puntero al búfer de lienzo de WebAssembly
  const address = result.instance.exports.getCanvasBufferPointer();
  const len = width * height * 4;

  // Obtiene las funciones de WebAssembly necesarias para el bucle del juego
  const tick = result.instance.exports.tick;
  const draw = result.instance.exports.draw;
  const keyUp = result.instance.exports.keyUp;
  const keyDown = result.instance.exports.keyDown;
  const touchStart = result.instance.exports.touchStart;
  const touchEnd = result.instance.exports.touchEnd;
  const touchMove = result.instance.exports.touchMove;

  // Mapeo de teclas a códigos de WebAssembly
  const KeyMap = {
    'Escape': 1,
    'Enter': 2, ' ': 2,
    'ArrowLeft': 4, 'a': 4, 'A': 4,
    'ArrowRight': 8, 'd': 8, 'D': 8,
    'ArrowUp': 16, 'w': 16, 'W': 16,
    'ArrowDown': 32, 's': 32, 'S': 32,
    'Control': 64, 'z': 64, 'Z': 64,
    'Alt': 128, 'x': 128, 'X': 128,
  }

  // Función para obtener el código de tecla correspondiente a partir de un evento de teclado
  const KeyMask = (e) => { const code = v = KeyMap[e.key]; return code ? code : 0; }

  // Event listeners para los eventos de teclado
  document.addEventListener('keydown', e => { e.preventDefault; const code = KeyMask(e); if (code != 0) keyDown(code); }, false);
  document.addEventListener('keyup', e => { e.preventDefault; const code = KeyMask(e); if (code != 0) keyUp(code); }, false);

  var movin = false;

  const relativePos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const hpnow = performance.now();
    const p= { 
      x: e.pageX - window.pageXOffset - rect.left, 
      y: e.pageY - window.pageYOffset -rect.top,
      w:rect.width, 
      h:rect.height, 
      t:hpnow 
    }
    console.log(p);
    return p;
  }

  const localTouchStart = (e) => {e.preventDefault(); movin = true; const p = relativePos(e, canvas); touchStart(p.x, p.y, p.w, p.h,p.t); }
  const localTouchEnd = (e) => { e.preventDefault(); movin = false; const p = relativePos(e, canvas); touchMove(p.x, p.y, p.w, p.h ,p.t); touchEnd(); }
  const localTouchMove = (e) => { e.preventDefault(); if (movin) { const p = relativePos(e, canvas); touchMove(p.x, p.y, p.w, p.h ,p.t); } }

  game.addEventListener('touchstart', e => localTouchStart(e), false);
  game.addEventListener('touchend', e => localTouchEnd(e), false);
  game.addEventListener('touchmove', e => localTouchMove(e), true);
  game.addEventListener('mousedown', e => localTouchStart(e), false);
  game.addEventListener('mousemove', e => localTouchMove(e), false);

  document.addEventListener('mouseup', e => localTouchEnd(e), false);
  document.addEventListener('touchcancel', e => localTouchEnd(e), false);


  // Bucle del juego
  const gameLoop = () => {
    // Obtiene el tiempo de alto rendimiento actual
    const hpnow = performance.now();

    // Llama a las funciones de WebAssembly para el paso del tiempo y dibujar el lienzo
    tick(hpnow);
    draw(hpnow);

    // Copia los datos de la memoria de WebAssembly al búfer de imagen
    imageDataBuffer.set(wasmMemoryArray.slice(
      address,
      address + len
    ));

    // Dibuja la imagen en el lienzo
    context.putImageData(imageData, 0, 0);

    // Solicita la próxima animación del bucle del juego
    requestAnimationFrame(gameLoop);
  };

  // Inicia el bucle del juego
  gameLoop();
});


