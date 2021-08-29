
var firebaseConfig = {
      apiKey: "AIzaSyDVgBCRQH7w77Ed-hS34IVZQXYJUgplfgM",
      authDomain: "kwitter-ed7ba.firebaseapp.com",
      databaseURL: "https://kwitter-ed7ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-ed7ba",
      storageBucket: "kwitter-ed7ba.appspot.com",
      messagingSenderId: "995313733322",
      appId: "1:995313733322:web:0fd9058d8242caaf4f6e33",
      measurementId: "G-ZZXZ9L50JR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          localStorage.setItem("room_name", room_name);
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name") ;
      window.location="index.html";
}
