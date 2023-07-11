nombre_jugador1 = localStorage.getItem("nombre_jugador1");
nombre_jugador2= localStorage.getItem("nombre_jugador2");
    
    puntos_jugador1 = 0;
    puntos_jugador2= 0;

document.getElementById("nombre_jugador1").innerHTML = nombre_jugador1 + " : ";
document.getElementById("nombre_jugador2").innerHTML = nombre_jugador2 + " : ";

document.getElementById("puntos_jugador1").innerHTML = puntos_jugador1;
document.getElementById("puntos_jugador2").innerHTML = puntos_jugador2;
document.getElementById("jugador_pregunta").innerHTML = "Turno para preguntar - " + nombre_jugador1 ;
document.getElementById("jugador_respuesta").innerHTML = "Turno para responder - " + nombre_jugador2;

function send() {

       get_word = document.getElementById("palabra").value;
  
     word= get_word.toLowerCase();
    
    
    console.log("Palabra en minúsculas = " + word);
    
    
    charAt1 = word.charAt(1);
    console.log(charAt1);
    
    
    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);
    
    
    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
    console.log(charAt3);
    
       remove_charAt1 = word.replace(charAt1, "_");
   
       remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    
       remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    
       question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
   
       input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    
       check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
   
    row =  question_word + input_box + check_button ; 
  
     document.getElementById("output").innerHTML = row;

    document.getElementById("palabra").value = "";
}

turno_pregunta="jugador1";
turno_pregunta="jugador2";

function check ()
{
   get_answer=document.getElementById("input_check_box").value;
respuesta=get_answer.toLowerCase();
console.log("Respuesta en minusculas = "+respuesta);
if (respuesta==word)
{
   if (turno_respuesta=="jugador1")
   {
      puntos_jugador1=puntos_jugador1+1;
      document.getElementById("puntos_jugador1").innerHTML=puntos_jugador1;
   }
   else
   {
      puntos_jugador2=puntos_jugador2+1;
      document.getElementById("puntos_jugador2").innerHTML=puntos_jugador2;
   }
}

}