let btnPokemon = document.getElementById('testPokemon');
let btnTestBadge = document.getElementById('testBadge');

let pokemonViews = document.getElementById('pokeSection');
let testBadgeViews = document.getElementById('testColor');

export function views() {
    pokemon();
    btnPokemon.addEventListener("click", pokemon);
    btnTestBadge.addEventListener("click", badge);
}

function pokemon() {
    openPage(pokemonViews,btnPokemon);
}

function badge() {
    openPage(testBadgeViews,btnTestBadge);
}

function openPage(pageName,link) {
    var i, tabcontent,tablinks;
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