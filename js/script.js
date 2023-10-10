const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
/* Script for login and sign up buttons*/

let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };

      function openForm(formType) {
        if (formType === "animation") {
          window.open("animation.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "gaming") {
          window.open("gaming.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "businessincubation") {
          window.open("businessincubation.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "codingandprogramming") {
          window.open("codingandprogramming.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "umbocoder") {
          window.open("umbocoder.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "droneeconomy") {
          window.open("droneeconomy.html", "Sign-up Form", "width=500,height=500");
        } else if (formType === "registration", "Sign-up Form") {
          window.open("registration.html");
        } else {
          alert("Invalid form type.");
        }
      }
    
