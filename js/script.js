const boton = document.getElementById("hamburguesa"); 
const menu = document.getElementById("nav-links"); 

boton.addEventListener("click", function() {
    menu.classList.toggle("activo")
});  