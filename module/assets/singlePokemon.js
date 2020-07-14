import {backgroundColor} from './backgroundColor.js'
import {pokeId} from './pokeId.js'

let namePokemon = document.createElement('h1');
let newId = document.createElement('h2');
let pokeWeight = document.createElement('h2');
let pokeHeight = document.createElement('h2');
let type = document.createElement('h2');

export function singlePokemon(page, div, name, data) {
    let newImg = document.createElement('img');
    let id = data[0];
    newImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    pokeId(id,newId);
    page.style.display = 'block';
    namePokemon.textContent = data[1];
    namePokemon.classList.add('namePokemon');
    pokeWeight.textContent = data[3];
    pokeHeight.textContent = data[4];
    type.textContent = data[2];
    newImg.style.backgroundColor = backgroundColor(type.textContent);
    newImg.classList.add('imgSinglePokemon');
    div.classList.add('divPoke');
    div.appendChild(newImg);
    div.appendChild(namePokemon);
    div.appendChild(pokeWeight);
    div.appendChild(pokeHeight);
    div.appendChild(type);
    div.appendChild(newId);
}
