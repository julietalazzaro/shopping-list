let listado__item = `<div class="listado__item">
  <div class="listado__item-cabecera">
    <i class="fas listado__img"></i>
    <h3 class="listado__titulo">item 1</h3>
    <p>asdasdasdasd</p>
  </div>  
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    <i class="fas fa-info listado__infobtn"></i>
  </button>      
</div > `;

const iconos = [
  "fa-random",
  "fa-hamburger",
  "fa-laugh-beam",
  "fa-apple-alt",
  "fa-seedling",
  "fa-cheese",
  "fa-toilet-paper",
  "fa-tshirt",
  "fa-tv",
];

let sectionEmpty = document.getElementById("empty");
let sectionListado = document.getElementById("listado");
let titulo = document.getElementById("titulo");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let btnGuardarItem = document.getElementById("btnGuardarItem");
let btnCerrarModalGuardado = document.getElementById("btnCerrarModalGuardado");
let btnCruzModalGuardado = document.getElementById("btnCruzModalGuardado");
let alertComplete = document.getElementById("alertComplete");
let modalAgregar = document.getElementById("modalAgregar");
let modalDetalleListado = document.getElementById("modalDetalleListado");
let modalLabel = document.getElementById("modalDetalleListadoLabel");

let tituloDetalle = document.getElementById("tituloDetalle");
let iconoDetalle = document.getElementById("iconoDetalle");
let descripcionDetalle = document.getElementById("descripcionDetalle");

let listado = document.getElementById("listado");

let empty = true;

btnGuardarItem.addEventListener("click", function () {
  // Muestra alerta si no completo el titulo
  if (titulo.value == "") {
    alertComplete.style.display = "block";
  } else {
    alertComplete.style.display = "none";

    // Arma y devuelve el item a agregar al layout
    let listado__item = armarListadoItem();

    //Cargar el item al listado existente
    listado.innerHTML += listado__item;

    //Ocultar ventana de vacio y Mostrar listado
    if (empty) {
      empty = false;
      sectionEmpty.style.display = "none";
      sectionListado.style.display = "flex";
    }

    //Reiniciar el formulario
    titulo.value = "";
    categoria.selectedIndex = 0;
    descripcion.value = "";

    //Cerrar el modal
    btnCerrarModalGuardado.click();
  }
});

listado.addEventListener("click", function (e) {
  if (
    e.target.getAttribute("id") == "infobtn" ||
    e.target.getAttribute("data-itembtn") == "itembtn"
  ) {
    let item = document.getElementById(e.target.getAttribute("data-itemid"));

    modalLabel.innerHTML = "Item " + item.getAttribute("data-itemcabecera");
    tituloDetalle.innerHTML = item.getAttribute("data-itemtitulo");
    let iconClass = "fas iconoDetalle " + item.getAttribute("data-itemimg");
    iconoDetalle.setAttribute("class", iconClass);
    descripcionDetalle.innerHTML = item.getAttribute("data-itemdesc");
  }
});

function armarListadoItem() {
  let listado__item = `<div class="listado__item" id="listado__item${
    listado.childElementCount + 1
  }" data-itemcabecera="${listado.childElementCount + 1}" data-itemtitulo="${
    titulo.value
  }" data-itemimg="${iconos[categoria.value]}" data-itemdesc="${
    descripcion.value
  }">
  <div class="listado__item-cabecera id="listado__item${
    listado.childElementCount + 1
  }-cabecera">
    <i id="listado__item${listado.childElementCount + 1}-img" class="fas ${
    iconos[categoria.value]
  } listado__item-img"></i>    
  <h3 id="listado__item${
    listado.childElementCount + 1
  }-titulo" class="listado__item-titulo">${titulo.value}</h3>
    <p id="listado__item${
      listado.childElementCount + 1
    }-desc" class="listado__item-desc">${descripcion.value}</p>
  </div>  
  <button id="listado__item${
    listado.childElementCount + 1
  }-btn" type="button" class="btn btn-secondary btnDetalleListado" data-itemid="listado__item${
    listado.childElementCount + 1
  }"  data-itembtn="itembtn" data-bs-toggle="modal" data-bs-target="#modalDetalleListado">
    <i class="fas fa-info listado__infobtn"  data-itemid="listado__item${
      listado.childElementCount + 1
    }" id="infobtn"></i>
  </button>      
  </div > `;
  return listado__item;
}

// Media Queries para cambio layout
var mql = window.matchMedia("(min-width: 1024px)");

function screenTest(e) {
  console.log(e);
  if (e.matches) {
    /* Para desktop */
    modalAgregar.setAttribute("class", "modal-dialog modal-fullscreen");
    document.getElementById("btmHomeModal").style.display = "none";
    btnCerrarModalGuardado.click();
    modalAgregar.style.display = "block";
    btnCerrarModalGuardado.style.display = "none";
    btnCruzModalGuardado.style.display = "none";
  } else {
    /* Para mobile */
    modalAgregar.setAttribute("class", " modal fade");
    modalAgregar.style.display = "none";
    document.getElementById("btmHomeModal").style.display = "block";
    btnCerrarModalGuardado.style.display = "block";
    btnCruzModalGuardado.style.display = "block";
  }
}
mql.addListener(screenTest);
screenTest(mql);
