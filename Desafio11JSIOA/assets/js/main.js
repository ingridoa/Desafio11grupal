import { Leon, Lobo, Oso, Aguila, Serpiente } from "./classes.js";

let animales = [];


(async () => {
  try {
    const resp = await fetch("animales.json");
    const data = await resp.json();
    data.animales.forEach((elem) => {
      switch (elem.name) {
        case "Leon":
          animales.push(new Leon(elem.name, elem.imagen, elem.sonido));
          break;
        case "Lobo":
          animales.push(new Lobo(elem.name, elem.imagen, elem.sonido));
          break;
        case "Oso":
          animales.push(new Oso(elem.name, elem.imagen, elem.sonido));
          break;
        case "Serpiente":
          animales.push(new Serpiente(elem.name, elem.imagen, elem.sonido));
          break;
        case "Aguila":
          animales.push(new Aguila(elem.name, elem.imagen, elem.sonido));
          break;
      }
    });
  } catch (error) {
    console.log(error);
  }
})();


document.getElementById("animal").addEventListener("change", () => {
  let seleccion = document.getElementById("animal").value;
  let seleccionIndex = animales.findIndex(
    (elem) => elem.getNombre() == seleccion
  );
  document.querySelector(
    "#preview"
  ).innerHTML = `<img src="assets/imgs/${animales[
    seleccionIndex
  ].getImg()}" style="height:200px" class="mx-auto d-block" >`;
  
});

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let alimalito = document.getElementById("animal").value;
  let alimalitoIndex = animales.findIndex(
    (elem) => elem.getNombre() == alimalito
  );
  if (
    document.getElementById("edad").value == "Seleccione un rango de años" ||
    document.getElementById("comentarios").value == "" ||
    document.getElementById("animal").value == "Seleccione un animal"
  ) {
    alert("Debe completar todos los campos");
  } else if (animales[alimalitoIndex]._comentarios == "") {
    animales[alimalitoIndex]._edad = document.getElementById("edad").value;
    animales[alimalitoIndex]._comentarios =
      document.getElementById("comentarios").value;
    document.querySelector(
      "#Animales"
    ).innerHTML += `<img id="modalClick" src="assets/imgs/${animales[
      alimalitoIndex
    ].getImg()}" style="height:200px" class="${alimalito} mx-auto d-block" data-toggle="modal" data-target="#exampleModal" >`;
  } else {
    alert("Animal ya registrado");
  }
});


document.getElementById("Animales").addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.id === "modalClick") {
    cargarModal(event);
  }
});

const cargarModal = (event) => {
  const clickedImage = event.target;
  const animalClass = clickedImage.classList[0];
  const animalIndex = animales.findIndex(
    (elem) => elem.getNombre() === animalClass
  );
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<img src="assets/imgs/${animales[
    animalIndex
  ].getImg()}" style="height:200px" class="mx-auto d-block">
  <p class="text-white text-center">${animales[animalIndex].getEdad()}</p>
  <p class="text-white text-center">Comentarios</p>
  <p class="text-white text-center">${animales[animalIndex]._comentarios}</p>`;
  document.querySelector("audio").src = `assets/sounds/${animales[
    animalIndex
  ].getSonido()}`;
  document.querySelector("audio").play();
};