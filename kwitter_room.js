//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyAGZ6jbigmmZkQSHKRE9Y3qxvtFlh2XaLU",
      authDomain: "red-social-cbe6f.firebaseapp.com",
      databaseURL: "https://red-social-cbe6f-default-rtdb.firebaseio.com",
      projectId: "red-social-cbe6f",
      storageBucket: "red-social-cbe6f.appspot.com",
      messagingSenderId: "377123867247",
      appId: "1:377123867247:web:6b992b407c9411a2db5b9a"
    };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      
      document.getElementById("user_name").innerHTML= "Hola " + user_name ;
      
      function addRoom (){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
      purpose:"adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
      }
      
      function getRoom() {
      firebase.database().ref("/").on('value', function (snapshot)
      {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot)
      {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Inicia el código
      console.log ("Room_name - " + Room_names);
      row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" +
      Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //Finaliza el código
      });
      });
      }
      
      //Cambiar Get Data por Get Room
      getRoom();
function redirectToRoomName(Room_names) {
      console.log(Room_names);
      localStorage.setItem( "room_name", Room_names );
      window.location = "kwitter_page.html" ;
}