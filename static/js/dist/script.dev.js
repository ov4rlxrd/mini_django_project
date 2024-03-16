'use strict';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

var difGreetings = ['Welcome!', 'Добро пожаловать!', 'Accueillir!', '¡Bienvenidos!', '어서 오십시오!', '歡迎', 'Tervetuloa!', 'いらっしゃいませ！', 'Willkommen zurück!', 'Velkommen!', 'Vítejte!', 'Bem-vindo!', 'أهلا وسهلا!', 'Καλως ΗΡΘΑΤΕ!'];
var greet = document.querySelector('.greetings');

for (var i = 0; i <= difGreetings.length; i++) {
  smoothly(greet, 'textContent', difGreetings[i]);
}

var time = document.querySelector('.time');

function currTime() {
  window.requestAnimationFrame(currTime);
  time.innerHTML = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
}

currTime();