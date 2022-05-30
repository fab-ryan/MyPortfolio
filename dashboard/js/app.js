const toggle = document.getElementById("toggle");
toggle.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});
const card = document.getElementById("add-card");
const close_card = document.getElementById("close-card");
const show_portfolio = document.getElementById("show-portfolio");
const main_p = document.getElementById("main-p");
card.addEventListener("click", () => {
  show_portfolio.style.display = "block";
  main_p.classList.toggle("blure");
});
close_card.addEventListener("click", () => {
  show_portfolio.style.display = "none";
  main_p.classList.remove("blure");
});

const firebaseConfig = {
  apiKey: "AIzaSyDeyrDywWMBo75D3LUsrTLstkuyeTrMNpE",
  authDomain: "myportfolio-90895.firebaseapp.com",
  databaseURL: "https://myportfolio-90895-default-rtdb.firebaseio.com",
  projectId: "myportfolio-90895",
  storageBucket: "myportfolio-90895.appspot.com",
  messagingSenderId: "1006837952433",
  appId: "1:1006837952433:web:d2efb1206e7c46df821790",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
let shows = false;
const drop = document.getElementById("drop");
const dropdown_card = document.getElementById("dropdown_card");

drop.addEventListener("click", (e) => {
  shows = !shows;
  if (shows == true) {
    dropdown_card.style.display = "block";
  } else {
    dropdown_card.style.display = "none";
  }
});
const logoutElement = document.getElementById("logout_dash");
logoutElement.addEventListener("click", (e) => {
  e.preventDefault;
  swal({
    title: "Log out",
    text: "Are you sure?",
    icon: "warning",
    buttons: true,

    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      app
        .auth()
        .signOut()
        .then(() => {
          location.href = "../index.html";
        })
        .catch((error) => {
          location.reload();
        });
    }
  });
});

app.auth().onAuthStateChanged((user) => {
  if (user == null) {
    history.back();
  }
});
