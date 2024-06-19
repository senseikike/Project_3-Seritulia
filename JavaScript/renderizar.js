
// // export async function exportarInvitados(){

// // }

// // import { leerFichero } from "./fetch-try-catch.js";

// //Crear las tarjetas con los datos obtenidos del fetch()
// import { exportarInvitados } from "./card_fetch.js";

// export async function exportarCard(){

//     //Invoca a la función y almacena los datos de la misma
//     let data = await exportarInvitados();

//     //¿Dónde voy a pintar?
//     let convidatsContainer = document.querySelector("#card");

//     data.convidats.forEach(valor => {

//         //Recorre la ARRAY y genera los elementos
//         let card = document.createElement("article");
//         let nomConvidat = document.createElement("h3");
//         let apellidos = document.createElement("h3");
//         let descripcioConvidat = document.createElement("p");
//         let pictureConvidat = document.createElement("picture");
//         let sourceConvidat = document.createElement("source");
//         let imgConvidat = document.createElement("img");
//         let enlaceModal = document.createElement("a");

//         nomConvidat.textContent = valor.nombre;

//         apellidos.textContent = valor.apellidos;

//         descripcioConvidat.textContent = valor.descripcion;

//         enlaceModal.textContent = valor.modal;

//         sourceConvidat.srcset = valor.img.srcset;
     
//         imgConvidat.src = valor.img.src;

//         imgConvidat.alt = valor.img.alt;

//         card.appendChild(pictureConvidat);
       
//         pictureConvidat.appendChild(sourceConvidat);
//         pictureConvidat.appendChild(imgConvidat);

//         card.appendChild(nomConvidat);
//         card.appendChild(apellidos);

//         card.appendChild(descripcioConvidat);
       
//         card.appendChild(enlaceModal);
        
//         convidatsContainer.appendChild(card);
       
//     });


// }

import { exportarInvitados } from "./card_fetch.js";

export async function exportarCard(){

    //Invoca a la función y almacena los datos de la misma
    let data = await exportarInvitados();
    console.log(data)
    console.log("render");
    //¿Dónde voy a pintar?
    let invitadosContainer = document.querySelector("#card");
    console.log(invitadosContainer)

    data.invitados.forEach(valor => {

        //Recorre la ARRAY y genera los elementos
        let card = document.createElement("article");
        let nomInvitados = document.createElement("h3");
        let apellidosInvitados = document.createElement("h3");
        let descripcioInvitado = document.createElement("p");
        let pictureInvitado = document.createElement("picture");
        let sourceInvitado = document.createElement("source");
        let imgInvitado = document.createElement("img");
        let enlaceModal = document.createElement("button");

        nomInvitados.textContent = valor.nombre;
        apellidosInvitados.textContent = valor.apellidos;
        descripcioInvitado.textContent = valor.descripcion;
        enlaceModal.textContent = valor.modal;
        sourceInvitado.srcset = valor.img.srcset;
        imgInvitado.src = valor.img.src;
        imgInvitado.alt = valor.img.alt;

        // APPENDCHILD
        card.appendChild(pictureInvitado);
        pictureInvitado.appendChild(sourceInvitado);
        pictureInvitado.appendChild(imgInvitado);
        card.appendChild(nomInvitados);
        card.appendChild(apellidosInvitados);
        card.appendChild(descripcioInvitado);
        // card.appendChild(descripcioInvitado);
        // card.appendChild(descripcioInvitado);
        card.appendChild(enlaceModal);

        // CONTENEDOR
        invitadosContainer.appendChild(card);
    })
};

// nomConvidat.textContent = valor.nombre;

//         apellidos.textContent = valor.apellidos;

//         descripcioConvidat.textContent = valor.descripcion;

//         enlaceModal.textContent = valor.modal;

//         sourceConvidat.srcset = valor.img.srcset;
     
//         imgConvidat.src = valor.img.src;

//         imgConvidat.alt = valor.img.alt;

//         card.appendChild(pictureConvidat);
       
//         pictureConvidat.appendChild(sourceConvidat);
//         pictureConvidat.appendChild(imgConvidat);

//         card.appendChild(nomConvidat);
//         card.appendChild(apellidos);

//         card.appendChild(descripcioConvidat);
       
//         card.appendChild(enlaceModal);
        
//         convidatsContainer.appendChild(card);
