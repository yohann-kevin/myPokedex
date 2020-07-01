let nav = document.getElementById("myNav");
let open = document.getElementById("openNav2");
let close = document.getElementById("closeBtnSmart");

export function openNavSmartphone() {
    open.addEventListener("click", openNav);
}

export function closeNavSmartphone() {
    close.addEventListener("click", closeNav);
}

function openNav() {
  nav.style.width = "100%";
}

function closeNav() {
  nav.style.width = "0%";
}
