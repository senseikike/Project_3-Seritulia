// export async function exportarInvitados(){

// 	try{
// 		//Espera a cargar los datos de JSON
// 		let answer = await fetch("json/invitados.js");
// 		//Espera a leer el contenido del JSON
// 		//Luego, haz un PARSE a esa STRING a datos que sean iterables por JavaScript -> OBJETOS / ARRAY
// 		let datos = await answer.json();

// 		//Con return devuelvo fuera de la FUNCION, en otro fichero JS
// 		return datos;

// 	} catch(error){
// 		console.log(error);
// 	}

// }

export async function exportarInvitados() {

	console.log("fetch");
	try{
		let answer = await fetch("json/invitados.json");
		let datos = await answer.json();
		console.log(answer)

		return datos;
	} catch(error){
		console.log(error);
	}
}