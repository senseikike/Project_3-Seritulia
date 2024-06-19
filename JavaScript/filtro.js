let $botonTodo = document.querySelector("#todos");
let $botonHbo = document.getElementById("hbo")
let $botonNetflix = document.getElementById("netflix")
let $botonFilmin = document.getElementById("filmin")
let $botonPrime = document.getElementById("prime")
let $botonDisney = document.getElementById("disney")

console.log($botonTodo);

let plataforma = document.getElementsByClassName("stream");
console.log(plataforma);

$botonTodo.addEventListener("click", () => filtrarSerie("todos"));
$botonHbo.addEventListener("click", () => filtrarSerie("hbo"));
$botonNetflix.addEventListener("click", () => filtrarSerie("netflix"));
$botonFilmin.addEventListener("click", () => filtrarSerie("filmin"));
$botonPrime.addEventListener("click", () => filtrarSerie("prime"));
$botonDisney.addEventListener("click", () => filtrarSerie("disney"));

function filtrarSerie(title){
    for (let i = 0; i < plataforma.length; i++){
        let series = plataforma[i];

        let titleK = series.getAttribute("title");
        console.log(titleK);

        if (title == "todos" || titleK === title) {
            series.classList.remove("ocultar")
        } else {
            series.classList.add("ocultar")
        }
    }
}


