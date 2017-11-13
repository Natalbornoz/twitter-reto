//fucnion para llamar en el onclick
function add() {
  //para llamar a los elementos con los que voy a trabajar
  var textarea = document.getElementById('post').value;//-->con value obtengo el texto del textarea
  document.getElementById('post').value = "";//para vaciar el textarea (placeholder en html)

  var count = document.getElementById('count')
  var button = document.getElementById('tweet')//para llamar al boton
  var contComments = document.getElementById('comment')

  //crear elementos dinamicos "son como los papis"
  var contenedorComentario = document.createElement('div')//contiene a un comentario
  var paragraph = document.createElement('p')//contiene el comentario en si, el contenido (texto)

  //creamos las guaguas
  var nodeText = document.createTextNode(textarea);

  //entrego la guagua al papa (primero llamo al papa y entrego la guagua con appendChild)
  paragraph.appendChild(nodeText);

  //asignar los hijos al papá del papá (al contendor de los comentarios)
  contenedorComentario.appendChild(paragraph);

  contComments.insertBefore(contenedorComentario, contComments.children[0]);
}

//-----------------------------------------

function charactLimit(){

  var button = document.getElementById('tweet');//para llamar al boton
  var contador = document.getElementById('count');//para llamar al contador
  var charMax = 140; //varianle para definir la cantidad maxima de caracteres
  var textarea = document.getElementById('post').value;//para llamar al area de texto

    //INTENTO DE DESHABILITAR BOTON TWEET
    // if (contador <= 0) {
    //   button.disabled = true;

  contador.innerHTML = charMax-textarea.length;
  // document.getElementById("myH2").style.color = "#ff0000";


  //INTENTO DE CAMBIAR COLOR 
  // if (contador.length > 120 && < 130)
  //   contador ="green";
  //
  // else if (contador.length > 131 && < 140)
  //     contador ="blue";
  //
  // else {
  //   contador = "navy";
  // }


//-----------------------------------------

// Si pasa los 140 caracteres, deshabilitar el botón.
// Si pasa los 120 caracteres, mostrar el contador con OTRO color.
// Si pasa los 130 caracteres, mostrar el contador con OTRO color.
// Si pasa los 140 caracteres, mostrar el contador en negativo.

// function changeColor() {
//
//   var textarea = document.getElementById('post')
//   var contador = document.getElementById('count').value;//declaro variable
//   var charMax = 140;

  // if (contador.length > 120 && < 130)
  //   contador ="green";
  //
  // else if (contador.length > 131 && < 140)
  //     contador ="blue";
  //
  // else {
  //   contador = "navy";
  // }

		// if(caracteres >= 120 && caracteres < 130){
		// 	conta.style.color = "green";
		// }
		// else if (caracteres >130) {
		// 	conta.style.color = "red";
		// }
		// else{
		// 	conta.style.color = "black";
		// }
    //

}

//-----------------------------------------
