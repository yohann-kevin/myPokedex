import {backgroundColor} from './backgroundColor.js'
import {pokeId} from './pokeId.js'
import {weightPoke} from './weightPoke.js'
import {heightPoke} from './heightPoke.js'

let namePokemon = document.createElement('h1');
let newId = document.createElement('h2');
let pokeWeight = document.createElement('h2');
let pokeHeight = document.createElement('h2');
let type = document.createElement('h2');
let type2 = document.createElement('h2');
let divInfo = document.createElement('div');

let whyType2 = false;

export function singlePokemon(page, div, name, data) {
    let newImg = document.createElement('img');
    let id = data[0];
    newImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    let finalId = pokeId(id,newId);
    page.style.display = 'block';
    namePokemon.textContent = data[1];
    namePokemon.classList.add('namePokemon');
    pokeWeight.textContent = weightPoke(data[3]);
    pokeHeight.textContent = heightPoke(data[4]);

    newImg.classList.add('imgSinglePokemon');
    div.classList.add('divPoke');
    // newId.classList.add('pokeId');
    div.appendChild(newImg);
    div.appendChild(divInfo);
    div.appendChild(finalId);
    div.appendChild(namePokemon);
    div.appendChild(pokeWeight);
    div.appendChild(pokeHeight);

    if (typeof data[2] === 'object') {
        type.textContent = data[2][0];
        type2.textContent = data[2][1];
        type.style.backgroundColor = backgroundColor(data[2][0]);
        type2.style.backgroundColor = backgroundColor(data[2][1]);
        newImg.style.backgroundColor = backgroundColor(data[2][0]);
        type.style.height = "35px";
        type.style.padding = "5px";
        type.style.borderRadius = "5px";
        type2.style.height = "35px";
        type2.style.padding = "5px";
        type2.style.borderRadius = "5px";
        div.appendChild(type);
        div.appendChild(type2);
        whyType2 = true;
    } else if (typeof data[2] === 'string') {
        if (whyType2) type2.remove();
        type.textContent = data[2];
        type.style.backgroundColor = backgroundColor(data[2]);
        type.style.height = "35px";
        type.style.padding = "5px";
        type.style.borderRadius = "5px";
        newImg.style.backgroundColor = backgroundColor(data[2]);
        div.appendChild(type);
    }
}
