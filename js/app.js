

const buscar = document.getElementById("search");
const textbusqueda = document.getElementById("texto_de_busqueda");

let buscarf = function(){
    let busqueda = textbusqueda.value;
    window.open('https://www.google.com/search?q='+busqueda);
};


