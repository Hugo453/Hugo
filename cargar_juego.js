function addUser() {
    nombre_jugador1=document.getElementById("entrada_nombre_jugador1").value;
    nombre_jugador2=document.getElementById("entrada_nombre_jugador2").value;
    
    localStorage.setItem("nombre_jugador1",nombre_jugador1);
    localStorage.setItem("nombre_jugador2",nombre_jugador2);
    
    window.location="juego.html";
}
