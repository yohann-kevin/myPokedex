import {colors} from './assets/colors.js'

const badge = document.getElementsByClassName('testColor');

export function badges() {
    for (let i = 0; i < badge.length; i++) {
        badge[i].style.colors = 'white';
        colorBadge(badge[i]);
    }
}

// function colorBadge(badge) {
//     if (badge.textContent === "Acier") {
//         badge.style.backgroundColor = colors.acier;
//     } else if (badge.textContent === "Dragon") {
//         badge.style.backgroundColor = colors.dragon;
//     } else if (badge.textContent === "Electrik") {
//         badge.style.backgroundColor = colors.electrik;
//     } else if (badge.textContent === "Feu") {
//         badge.style.backgroundColor = colors.feu;
//     } else if (badge.textContent === "Insecte") {
//         badge.style.backgroundColor = colors.insecte;
//     } else if (badge.textContent === "Plante") {
//         badge.style.backgroundColor = colors.plante;
//     } else if (badge.textContent === "Psy") {
//         badge.style.backgroundColor = colors.psy;
//     } else if (badge.textContent === "Sol") {
//         badge.style.backgroundColor = colors.sol;
//     } else if (badge.textContent === "Ténèbre") {
//         badge.style.backgroundColor = colors.tenebre;
//     } else if (badge.textContent === "Combat") {
//         badge.style.backgroundColor = colors.combat;
//     } else if (badge.textContent === "Eau") {
//         badge.style.backgroundColor = colors.eau;
//     } else if (badge.textContent === "Fée") {
//         badge.style.backgroundColor = colors.fee;
//     } else if (badge.textContent === "Glace") {
//         badge.style.backgroundColor = colors.glace;
//     } else if (badge.textContent === "Normal") {
//         badge.style.backgroundColor = colors.normal;
//     } else if (badge.textContent === "Poison") {
//         badge.style.backgroundColor = colors.poison;
//     } else if (badge.textContent === "Roche") {
//         badge.style.backgroundColor = colors.roche;
//     } else if (badge.textContent === "Spectre") {
//         badge.style.backgroundColor = colors.spectre;
//     } else if (badge.textContent === "Vol") {
//         badge.style.backgroundColor = colors.vol;
//     } else if (badge.textContent === "Inconnu") {
//         badge.style.backgroundColor = colors.inconnu;
//     } else if (badge.textContent === "Obscur") {
//         badge.style.backgroundColor = colors.obscur;
//     }
// }