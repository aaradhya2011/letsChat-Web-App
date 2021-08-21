
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
