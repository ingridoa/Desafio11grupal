// Definición de las clases

class Animal {
    constructor(nombre, edad, comentarios) {
      this.nombre = nombre;
      this.edad = edad;
      this.comentarios = comentarios;
      this.imagen = this.obtenerImagen();
    }
  
    obtenerImagen() {
      // Método para obtener la ruta de la imagen según el nombre del animal
      switch (this.nombre) {
        case 'Leon':
          return './assets/imgs/Leon.png';
        case 'Lobo':
          return './assets/imgs/Lobo.jpg';
        case 'Oso':
          return './assets/imgs/Oso.jpg';
        case 'Serpiente':
          return './assets/imgs/Serpiente.jpg';
        case 'Aguila':
          return './assets/imgs/Aguila.png';
        default:
          return '';
      }
    }
  }
  
  class Oso extends Animal {
    constructor(nombre, edad, comentarios) {
      super(nombre, edad, comentarios);
    }
  }
  
  class Serpiente extends Animal {
    constructor(nombre, edad, comentarios) {
      super(nombre, edad, comentarios);
    }
  }
  
  class Aguila extends Animal {
    constructor(nombre, edad, comentarios) {
      super(nombre, edad, comentarios);
    }
  }
  
  // Función autoejecutable IIFE
  (() => {
    // Obtener elementos del DOM
    const btnRegistrar = document.getElementById('btnRegistrar');
    const animalesContainer = document.getElementById('Animales');
    const animalSelect = document.getElementById('animal');
    const edadSelect = document.getElementById('edad');
    const comentariosInput = document.getElementById('comentarios');
  
    // Evento para el botón de registrar
    btnRegistrar.addEventListener('click', () => {
      // Obtener datos del formulario
      const nombre = animalSelect.value;
      const edad = edadSelect.value;
      const comentarios = comentariosInput.value;
  
      // Validar que todos los campos estén completos
      if (nombre === 'Seleccione un animal' || edad === 'Seleccione un rango de años' || comentarios.trim() === '') {
        alert('Por favor, complete todos los campos antes de agregar el animal.');
        return;
      }
  
      // Crear instancia del animal según la selección del usuario
      let animal;
      switch (nombre) {
        case 'Leon':
        case 'Lobo':
        case 'Oso':
          animal = new Oso(nombre, edad, comentarios);
          break;
        case 'Serpiente':
          animal = new Serpiente(nombre, edad, comentarios);
          break;
        case 'Aguila':
          animal = new Aguila(nombre, edad, comentarios);
          break;
        default:
          console.error('Animal no reconocido');
          return;
      }
  
      // Agregar el animal a la tabla
      agregarAnimalTabla(animal);
      resetFormulario();
    });
  
    // Función para agregar el animal a la tabla
    function agregarAnimalTabla(animal) {
      // Crear elementos HTML para mostrar el animal en la tabla
      const divAnimal = document.createElement('div');
      divAnimal.classList.add('animal-card', 'm-2');
  
      const img = document.createElement('img');
      img.src = animal.imagen;
      img.alt = animal.nombre;
      img.classList.add('animal-img');
      img.addEventListener('click', () => mostrarDetalle(animal));
  
      const nombre = document.createElement('h5');
      nombre.textContent = animal.nombre;
  
      divAnimal.appendChild(img);
      divAnimal.appendChild(nombre);
  
      animalesContainer.appendChild(divAnimal);
    }
  
    // Función para mostrar el detalle del animal en una ventana modal
    function mostrarDetalle(animal) {
      // Lógica para mostrar la ventana modal con el detalle del animal
      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = `
        <p><strong>Nombre:</strong> ${animal.nombre}</p>
        <p><strong>Edad:</strong> ${animal.edad}</p>
        <p><strong>Comentarios:</strong> ${animal.comentarios}</p>
      `;
  
      // Mostrar la ventana modal
      $('#exampleModal').modal('show');
    }
  
    // Función para limpiar los campos del formulario después de agregar un animal
    function resetFormulario() {
      animalSelect.selectedIndex = 0;
      edadSelect.selectedIndex = 0;
      comentariosInput.value = '';
    }
  })();
  