class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    aullar() {
      return `assets/sounds/Siseo.mp3`;
    }
  }