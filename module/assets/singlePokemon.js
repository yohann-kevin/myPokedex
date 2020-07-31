import {backgroundColor} from './backgroundColor.js'
import {pokeId} from './pokeId.js'

let namePokemon = document.createElement('h1');
let newId = document.createElement('h2');
let pokeWeight = document.createElement('h2');
let pokeHeight = document.createElement('h2');
let type = document.createElement('h2');
let divInfo = document.createElement('div');

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
    
    if (typeof data[2] === 'object') {
        type.textContent = data[2][0] + " " + data[2][1];
        newImg.style.backgroundColor = backgroundColor(data[2][0]);
    } else if (typeof data[2] === 'string') {
        type.textContent = data[2];
        newImg.style.backgroundColor = backgroundColor(data[2]);
    }

    newImg.classList.add('imgSinglePokemon');
    div.classList.add('divPoke');
    // newId.classList.add('pokeId');
    // div.appendChild(newId);
    div.appendChild(newImg);
    div.appendChild(divInfo);
    div.appendChild(namePokemon);
    div.appendChild(pokeWeight);
    div.appendChild(pokeHeight);
    div.appendChild(type);
}
