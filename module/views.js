let btnPokemon = document.getElementById('testPokemon');
let btnPokemonSmart = document.getElementById('testPokemonSmart');

let btnTestBadge = document.getElementById('testBadge');
let btnTestBadgeSmart = document.getElementById('testBadgeSmart');

let btnAbout = document.getElementById('btnAbout');
let btnAboutSmart = document.getElementById('aboutSmart');

let btnContact = document.getElementById('btnContact');
let btnContactSmart = document.getElementById('contactSmart');

let pokemonViews = document.getElementById('pokeSection');
let testBadgeViews = document.getElementById('testColor');
let aboutViews = document.getElementById('about');
let contactViews = document.getElementById('contact');

export function views() {
    if (window.screen.width <= 760) {
        pokemonSmart();
        btnPokemonSmart.addEventListener("click", pokemonSmart);
        btnTestBadgeSmart.addEventListener("click", badgeSmart);
        btnAboutSmart.addEventListener("click", aboutSmart);
        btnContactSmart.addEventListener("click", contactSmart);
    } else {
        pokemon();
        btnPokemon.addEventListener("click", pokemon);
        btnTestBadge.addEventListener("click", badge);
        btnAbout.addEventListener("click", about);
        btnContact.addEventListener("click", contact);
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

function about() {
    openPage(aboutViews, btnAbout);
}

function aboutSmart() {
    openPage(aboutViews, btnAboutSmart);
}

function contact() {
    openPage(contactViews, btnContact);
}

function contactSmart() {
    openPage(contactViews, btnContactSmart);
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
