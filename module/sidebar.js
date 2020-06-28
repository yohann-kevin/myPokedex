// test sidebar

let sidenav = document.getElementById("sidenav");
let main = document.getElementById("main");
let header = document.getElementById("header");
let footer = document.getElementById("footer");

let btnOpen = document.getElementById('openNav');
let btnClose = document.getElementById('closeBtn');

export function openNav() {
    btnOpen.addEventListener("click", function() {
        sideBar(sidenav,main,header,footer,"250px");
    })
}

export function closeNav() {
    btnClose.addEventListener("click", function() {
        sideBar(sidenav,main,header,footer,"0");
    })
}

function sideBar(elmnt1,elmnt2,elmnt3,elmnt4,value) {
    elmnt1.style.width = value;
    elmnt2.style.marginRight = value;
    elmnt3.style.marginRight = value;
    elmnt4.style.marginRight = value;
}