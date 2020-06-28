// test sidebar

export function openNav() {
    let btnOpen = document.getElementById('openNav');
    btnOpen.addEventListener("click", event => {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        document.getElementById("header").style.marginRight = "250px";
        document.getElementById("footer").style.marginRight = "250px";
    })
}

export function closeNav() {
    let btnClose = document.getElementById('closeBtn');
    btnClose.addEventListener("click", event => {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("header").style.marginRight = "0";
        document.getElementById("footer").style.marginRight = "0";
    })
}