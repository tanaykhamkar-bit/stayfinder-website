// 🔥 REPLACE WITH YOUR OWN FIREBASE CONFIG
var firebaseConfig = {
  apiKey: "AIzaSyB_iQkaFi6xl6oLi-GINVminASsNwVRzo8",
  authDomain: "stayfinder-app-36712.firebaseapp.com",
  projectId: "stayfinder-app-36712",
  storageBucket: "stayfinder-app-36712.firebasestorage.app",
  messagingSenderId: "988731098368",
  appId: "1:988731098368:web:6df395ebf4a5127c3a9fe5"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.firestore();


// 🔐 Simple Anonymous Login (no signup needed)
auth.signInAnonymously()
  .then(() => {
    console.log("User logged in anonymously");
  })
  .catch((error) => {
    console.log(error);
  });


// 💳 Fake Payment + Save Booking
function startPayment(hostelName, price) {

  alert("Processing payment of ₹" + price);

  setTimeout(function () {

    alert("Payment Successful!");

    var user = auth.currentUser;

    db.collection("bookings").add({
      hostelName: hostelName,
      price: price,
      userId: user.uid,
      date: new Date()
    }).then(function () {
      alert("Booking Confirmed!");
    });

  }, 2000);
}