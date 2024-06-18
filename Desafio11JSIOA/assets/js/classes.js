class Animal {
    constructor(nombre, img, sonido) {
      this._nombre = nombre;
      this._edad = "";
      this._img = img;
      this._comentarios = "";
      this._sonido = sonido;
    }
    getNombre() {
      return this._nombre;
    }
    getEdad() {
      return this._edad;
    }
    getImg() {
      return this._img;
    }
    setComentarios(new_comentario) {
      this._comentarios = new_comentario;
    }
    getSonido() {
      return this._sonido;
    }
  }
  
  export class Leon extends Animal {
    constructor(nombre, img, sonido) {
      super(nombre, img, sonido);
    }
    rugir() {
      return this._sonido;
    }
  }
  
  export class Lobo extends Animal {
    constructor(nombre, img, sonido) {
      super(nombre, img, sonido);
    }
    aullar() {
      return this._sonido;
    }
  }
  
  export class Oso extends Animal {
    constructor(nombre, img, sonido) {
      super(nombre, img, sonido);
    }
    gruñir() {
      return this._sonido;
    }
  }
  
  export class Serpiente extends Animal {
    constructor(nombre, img, sonido) {
      super(nombre, img, sonido);
    }
    sisear() {
      return this._sonido;
    }
  }
  
  export class Aguila extends Animal {
    constructor(nombre, img, sonido) {
      super(nombre, img, sonido);
    }
    chillar() {
      return this._sonido;
    }
  }
  

  
  