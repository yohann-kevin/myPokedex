let bar = document.getElementById('barTest');
let elec = document.getElementsByClassName('elec');

export function expBarTest() {
    let num = randomNum();
    elec[0].style.width = num + "%";
    bar.textContent = num + "%";
}

function randomNum() {
    return Math.floor(Math.random() * Math.floor(100));
}