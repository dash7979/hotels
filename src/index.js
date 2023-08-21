
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
const inputPrice = document.querySelector(".val");
const dateIn = document.querySelector(".dateIn");
const dateOut = document.querySelector(".dateOut");

    const response = await consultarHoteles()
    const data = await response.json();

const showHotels = async (hoteles) => {

    main.innerHTML = "";

    hoteles.forEach((hotel) => {
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

        const country = document.createElement("p");
        country.innerHTML = hotel.country;
        country.className = "hotelCountry";
        cardHotel.appendChild(country);
    });
};

showHotels(data);

const filterPrice = () =>{
    let precioHotel = data.filter(hotel => hotel.price == inputPrice.value)
    showHotels(precioHotel);
} 

const datesFilter = () =>{
    const inputsDisponibles = new Date(dateOut.value).getTime() - new Date(dateIn.value).getTime();
    let filtroDias = data.filter(hotel => {
        const diasDisponibles = hotel.availabilityTo - hotel.availabilityFrom
        return inputsDisponibles <= diasDisponibles;

    })
    if(filtroDias.length > 0){
        showHotels(filtroDias);
    } else{
        main.innerHTML = "No se encuentran hoteles, utilice otro filtro"
    }
}

inputPrice.addEventListener("change" , filterPrice);

dateIn.addEventListener("change" , datesFilter);
dateOut.addEventListener("change" , datesFilter);

