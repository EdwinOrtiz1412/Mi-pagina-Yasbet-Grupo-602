function mostrarMensaje (){
    let mensaje = document.getElementById("mensaje1");
    mensaje.innerHTML = "🐾 Cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

function mostrar_mensaje (){
    let mensaje = document.getElementById("mensaje2");
    mensaje.innerHTML = "🐾 Mensaje prueba";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}