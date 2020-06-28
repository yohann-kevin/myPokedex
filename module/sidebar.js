// test sidebar

export function openNav() {
    let btnOpen = document.getElementById('openNav');
    btnOpen.addEventListener("click", event => {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    })
}

export function closeNav() {
    let btnClose = document.getElementById('closeBtn');
    btnClose.addEventListener("click", event => {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    })
}