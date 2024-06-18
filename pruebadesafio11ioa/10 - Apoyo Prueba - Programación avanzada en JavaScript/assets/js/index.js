
document.getElementById('btnRegistrar').addEventListener('click', function() {
  // Obtener los valores de los campos
  const animal = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  // Validar que todos los campos estén completos
  if (animal === 'Seleccione un animal' || edad === 'Seleccione un rango de años' || comentarios.trim() === '') {
      alert('Por favor, complete todos los campos antes de agregar el animal.');
      return;
  }

  // Si todos los campos están completos, agregar el animal a la tabla
  // Aquí podrías añadir el código para agregar el animal a la tabla
  agregarAnimalATabla(animal, edad, comentarios);
});

function agregarAnimalATabla(animal, edad, comentarios) {
  // Código para agregar el animal a la tabla
  const tabla = document.getElementById('Animales');
  const nuevoAnimal = document.createElement('div');
  nuevoAnimal.classList.add('animal-item', 'bg-light', 'text-dark', 'p-2', 'my-2', 'w-100');
  nuevoAnimal.innerHTML = `
      <h5>${animal}</h5>
      <p>Edad: ${edad}</p>
      <p>Comentarios: ${comentarios}</p>
  `;
  tabla.appendChild(nuevoAnimal);

  // Limpiar los campos después de agregar el animal
  document.getElementById('animal').value = 'Seleccione un animal';
  document.getElementById('edad').value = 'Seleccione un rango de años';
  document.getElementById('comentarios').value = '';
}


// Importamos las clases de los animales desde los módulos
import { Animal } from './Animal.js';

// Función autoejecutable IIFE
(function() {
  // Lógica de tu aplicación aquí

  // Obtener elementos del DOM
  const btnRegistrar = document.getElementById('btnRegistrar');
  const animalesContainer = document.getElementById('Animales');

  // Evento para el botón de registrar
  btnRegistrar.addEventListener('click', () => {
    // Obtener datos del formulario
    const nombre = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    // Crear instancia del animal según la selección del usuario
    let animal;
    switch (nombre) {
      case 'Leon':
        animal = new Mamifero(nombre, edad, comentarios);
        break;
      case 'Lobo':
        animal = new Mamifero(nombre, edad, comentarios);
        break;
      case 'Oso':
        animal = new Mamifero(nombre, edad, comentarios);
        break;
      case 'Serpiente':
        animal = new Reptil(nombre, edad, comentarios);
        break;
      case 'Aguila':
        animal = new Ave(nombre, edad, comentarios);
        break;
      default:
        console.error('Animal no reconocido');
        return;
    }

    // Agregar el animal a la tabla
    agregarAnimalTabla(animal);
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
    modalBody.textContent = `Nombre: ${animal.nombre}\nEdad: ${animal.edad}\nComentarios: ${animal.comentarios}`;

    // Mostrar la ventana modal
    $('#exampleModal').modal('show');
  }
})();
