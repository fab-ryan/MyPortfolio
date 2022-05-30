//  FireBase confinguration
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
// Nav Bar responsiveness
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close"),
  Main = document.getElementById("main");
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  Main.classList.toggle("blure");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
  Main.classList.remove("blure");
});
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navMenu.classList.remove("show");
  Main.classList.remove("blure");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
const loginElement = document.getElementById("login");
const logoutElement = document.getElementById("logout");
const logout_dash = document.getElementById("logout_dash");

app.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    loginElement.style.display = "none";
    logoutElement.style.display = "initial";
  } else {
    loginElement.style.display = "initial";
    logoutElement.style.display = "none";
  }
});
logout_dash.addEventListener("click", (e) => {
  e.preventDefault;
  swal({
    title: "Log out",
    text: "Are you sure?",
    icon: "warning",
    buttons: true,

    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          login_button.style.display = "block";
          location.href = "../index.html";
        })
        .catch((error) => {
          location.reload();
        });
    }
  });
});
let shows = false;
const dropdown_card = document.getElementById("dropdown_card");

logoutElement.addEventListener("click", (e) => {
  shows = !shows;
  if (shows == true) {
    dropdown_card.style.display = "block";
  } else {
    dropdown_card.style.display = "none";
  }
});