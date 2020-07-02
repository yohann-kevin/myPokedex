let btnPokemon = document.getElementById('testPokemon');
let btnPokemonSmart = document.getElementById('testPokemonSmart');
let btnTestBadge = document.getElementById('testBadge');
let btnTestBadgeSmart = document.getElementById('testBadgeSmart');

let pokemonViews = document.getElementById('pokeSection');
let testBadgeViews = document.getElementById('testColor');

export function views() {
    if (window.screen.width <= 760) {
        pokemonSmart();
        btnPokemonSmart.addEventListener("click", pokemonSmart);
        btnTestBadgeSmart.addEventListener("click", badgeSmart);
    } else {
        pokemon();
        btnPokemon.addEventListener("click", pokemon);
        btnTestBadge.addEventListener("click", badge);
    }
}

function pokemon() {
    openPage(pokemonViews, btnPokemon);
}

function pokemonSmart() {
    openPage(pokemonViews, btnPokemonSmart);
}

function badge() {
    openPage(testBadgeViews, btnTestBadge);
}

function badgeSmart() {
    openPage(testBadgeViews, btnTestBadgeSmart);
}

function openPage(pageName, link) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "";
    }

    pageName.style.display = "block";
    link.style.color = "white";
}
