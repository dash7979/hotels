
//const titulo = document.createElement("h1");
//const head = document.querySelector("header");
//titulo.setAttribute("class" , "nombrePagina");
//titulo.innerText = "Book it!"
//head.appendChild(titulo);

//const filters = document.createElement("section");
//const info = document.querySelector("header");
//filters.setAttribute("id" , "filt")
//filters.innerHTML = "<div class='inputs'><input type='date' class='date'/><input type='date' class='date2'/></div>";
//const separar = document.createElement("div");
//const nombreDiv = document.getElementById("filt");

//nombreDiv.appendChild(separar);
//info.appendChild(filters);

import { consultarHoteles } from "./hoteles.js";

const buttonConsulta = document.getElementById("limp");
const main = document.querySelector("#bodyPage");

const showHotels = async () => {
    const response = await consultarHoteles()
    const data = await response.json();
    console.log(data)


    data.forEach((hotel) => {
        const cardHotel = document.createElement("div");
        cardHotel.className = "card";
        main.appendChild(cardHotel);
    
        const imagenHotel = document.createElement("img");
        imagenHotel.setAttribute("src", hotel.photo);
        imagenHotel.setAttribute("alt", hotel.name);
        imagenHotel.setAttribute("class", "hotel-image");
        cardHotel.appendChild(imagenHotel);
    
        const nombreHotel = document.createElement("h2");
        nombreHotel.innerText = hotel.name;
        nombreHotel.className = "hotel-names"
        cardHotel.appendChild(nombreHotel);
    });
};

showHotels();




