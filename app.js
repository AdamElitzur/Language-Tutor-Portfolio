const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
const li = document.querySelectorAll(".nav-element");
const body = document.querySelector("body");
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

console.log(li);
hamburger.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
  body.toggleAttribute("data-visible");
});

li.forEach(function (elem) {
  elem.addEventListener("click", function () {
    nav.toggleAttribute("data-visible");
    body.toggleAttribute("data-visible");
  });
});

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);


$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});