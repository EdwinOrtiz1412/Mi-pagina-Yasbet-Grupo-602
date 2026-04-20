function mostrarMensaje (){
    let mensaje=document.getElementById("mensaje1");
    mensaje.innerHTML ="🐾Cuida y proteje a los animales";
    mensaje.style.display = "black";

 setTimeout (() => {
    mensaje.style.opacity = "1";
    mensaje.style.transform = "transformateY/(0)";
  }, 50);
}
 

function mostrar_mensaje (){
    let mensaje=document.getElementById("mensaje2");
    mensaje.innerHTML ="🐾Cuida,proteje a los animales";
    mensaje.style.display = "black";

 setTimeout (() => {
    mensaje.style.opacity = "1";
    mensaje.style.transform = "transformateY/(0)";
 }, 50);
}
 