class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    aullar() {
      return `assets/sounds/Chillido.mp3`;
    }
  }