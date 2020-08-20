import {openPage} from './assets/openPage.js'

let btnHome = document.getElementById('btnHome');
let btnHomeSmart = document.getElementById('homeSmart');

let btnPokemon = document.getElementById('testPokemon');
let btnPokemonSmart = document.getElementById('testPokemonSmart');

let btnTestBadge = document.getElementById('testBadge');
let btnTestBadgeSmart = document.getElementById('testBadgeSmart');

let btnAbout = document.getElementById('btnAbout');
let btnAboutSmart = document.getElementById('aboutSmart');

let btnContact = document.getElementById('btnContact');
let btnContactSmart = document.getElementById('contactSmart');

let btnLoader = document.getElementById('loaderTest');
let btnLoaderSmart = document.getElementById('loaderSmart')

let homeViews = document.getElementById('home');
let pokemonViews = document.getElementById('pokeSection');
let testBadgeViews = document.getElementById('testColor');
let aboutViews = document.getElementById('about');
let contactViews = document.getElementById('contact');
let loaderTest = document.getElementById('loader');

export function views() {
    if (window.screen.width <= 760) {
        pokemonSmart();
        pageSmart();
    } else {
        pokemon();
        page();
    }
}

function page() {
    event(btnHome, home);
    event(btnPokemon, pokemon);
    event(btnTestBadge, badge);
    event(btnAbout, about);
    event(btnContact, contact);
    event(btnLoader, loader);
}

function pageSmart() {
    btnHomeSmart.addEventListener("click", homeSmart);
    btnPokemonSmart.addEventListener("click", pokemonSmart);
    btnTestBadgeSmart.addEventListener("click", badgeSmart);
    btnAboutSmart.addEventListener("click", aboutSmart);
    btnContactSmart.addEventListener("click", contactSmart);
    btnLoaderSmart.addEventListener("click", loaderSmart);
}

function home() {
    openPage(homeViews, btnHome);
}

function homeSmart() {
    openPage(homeViews, btnHomeSmart);
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

function loader() {
    openPage(loaderTest, btnLoader);
}

function loaderSmart() {
    openPage(loaderTest, btnLoaderSmart);
}

function event(btn, page) {
    btn.addEventListener("click", page);
}