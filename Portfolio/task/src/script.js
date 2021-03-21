let modal1 = document.getElementById('modal1');
let modal2 = document.getElementById('modal2');
let openButton1 = document.getElementById('open1');
let openButton2 = document.getElementById('open2');
let closeButton1 = document.getElementById('close1');
let closeButton2 = document.getElementById('close2');
let openBurger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let navA1 = document.getElementById('a1');
let navA2 = document.getElementById('a2');
let navA3 = document.getElementById('a3');

openButton1.onclick = function () {
    modal1.style.display = 'flex';
};
openButton2.onclick = function () {
    modal2.style.display = 'flex';
};
closeButton1.onclick = function () {
    modal1.style.display= 'none';
};
closeButton2.onclick = function () {
    modal2.style.display= 'none';
};
window.onclick = function (event) {
    if (event.target === modal1) {modal1.style.display = 'none';
    }
    if (event.target === modal2) {modal2.style.display = 'none';
    }
}
openBurger.onclick = function () {
    openBurger.classList.toggle('active')
    nav.classList.toggle('active')
}
navA1.onclick = function () {
    nav.classList.remove('active')
    openBurger.classList.toggle('active')
}
navA2.onclick = function () {
    nav.classList.remove('active')
    openBurger.classList.toggle('active')
}
navA3.onclick = function () {
    nav.classList.remove('active')
    openBurger.classList.toggle('active')
}