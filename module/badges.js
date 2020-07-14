import {colors} from './assets/colors.js'

const badge = document.getElementsByClassName('testColor');

export function testColors() {
    for (let i = 0; i < badge.length; i++) {
        badge[i].style.colors = 'white';
        if (badge[i].textContent === "Acier") {
            badge[i].style.backgroundColor = colors.acier;
        } else if (badge[i].textContent === "Dragon") {
            badge[i].style.backgroundColor = colors.dragon;
        } else if (badge[i].textContent === "Electrik") {
            badge[i].style.backgroundColor = colors.electrik;
        } else if (badge[i].textContent === "Feu") {
            badge[i].style.backgroundColor = colors.feu;
        } else if (badge[i].textContent === "Insecte") {
            badge[i].style.backgroundColor = colors.insecte;
        } else if (badge[i].textContent === "Plante") {
            badge[i].style.backgroundColor = colors.plante;
        } else if (badge[i].textContent === "Psy") {
            badge[i].style.backgroundColor = colors.psy;
        } else if (badge[i].textContent === "Sol") {
            badge[i].style.backgroundColor = colors.sol;
        } else if (badge[i].textContent === "Ténèbre") {
            badge[i].style.backgroundColor = colors.tenebre;
        } else if (badge[i].textContent === "Combat") {
            badge[i].style.backgroundColor = colors.combat;
        } else if (badge[i].textContent === "Eau") {
            badge[i].style.backgroundColor = colors.eau;
        } else if (badge[i].textContent === "Fée") {
            badge[i].style.backgroundColor = colors.fee;
        } else if (badge[i].textContent === "Glace") {
            badge[i].style.backgroundColor = colors.glace;
        } else if (badge[i].textContent === "Normal") {
            badge[i].style.backgroundColor = colors.normal;
        } else if(badge[i].textContent === "Poison") {
            badge[i].style.backgroundColor = colors.poison;
        } else if (badge[i].textContent === "Roche") {
            badge[i].style.backgroundColor = colors.roche;
        } else if (badge[i].textContent === "Spectre") {
            badge[i].style.backgroundColor = colors.spectre;
        } else if (badge[i].textContent === "Vol") {
            badge[i].style.backgroundColor = colors.vol;
        } else if (badge[i].textContent === "Inconnu") {
            badge[i].style.backgroundColor = colors.inconnu;
        } else if (badge[i].textContent === "Obscur") {
            badge[i].style.backgroundColor = colors.obscur;
        } else if (badge[i].textContent === "Red") {
            badge[i].style.backgroundColor = colors.red;
        } else if (badge[i].textContent === "Background 1") {
            badge[i].style.backgroundColor = colors.bg1;
        } else if (badge[i].textContent === "Background 2") {
            badge[i].style.backgroundColor = colors.bg2;
        }
    }
}