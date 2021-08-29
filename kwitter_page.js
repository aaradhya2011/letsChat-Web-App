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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
      {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });
        document.getElementById("msg").value="";
      }
     
      function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name") ;
      window.location="index.html";
}