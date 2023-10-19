// alert("Hi there my chocolate bar!");

let mybutton = document.getElementById("go-to-top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");
function showBuyTickets() {
  modal.classList.add("open");
}
function closeBuyTickets() {
  modal.classList.remove("open");
}
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", closeBuyTickets);
modal.addEventListener("click", closeBuyTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
// JavaScript code to show the "SUCCESS" message and dim the background
document.getElementById("pay-tickets").addEventListener("click", function () {
  // Show the overlay and success message
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".success-modal").style.display = "block";

  // Automatically close the message and remove the overlay after 3 seconds
  setTimeout(function () {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".success-modal").style.display = "none";
  }, 1500); // seconds
});

$(document).ready(function () {
  $(".auto-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
  });
});
