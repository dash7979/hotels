const titulo = document.createElement("h1");
const head = document.querySelector("header");
titulo.setAttribute("class" , "nombrePagina");
titulo.innerText = "Book it!"
head.appendChild(titulo);

const filters = document.createElement("section");
const info = document.querySelector("header");
filters.setAttribute("id" , "filt")
filters.innerHTML = "<div class='inputs'><input type='date' id='date'/><input type='date' id='date2'/></div>";
//const separar = document.createElement("div");
//const nombreDiv = document.getElementById("filt");

//nombreDiv.appendChild(separar);
info.appendChild(filters);


