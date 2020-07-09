import {backgroundColor} from './backgroundColor.js'
let namePokemon = document.createElement('h1');
let pokeWeight = document.createElement('h2');
let pokeHeight = document.createElement('h2');

export function singlePokemon(page,div,id,name,type,data) {
    let newImg = document.createElement('img');
    newImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    page.style.display = 'block';
    namePokemon.textContent = data[1];
    namePokemon.classList.add('namePokemon');
    pokeWeight.textContent = data[3];
    pokeHeight.textContent = data[4];
    newImg.style.backgroundColor = backgroundColor(type);
    newImg.classList.add('imgSinglePokemon');
    div.appendChild(newImg);
    div.appendChild(namePokemon);
    div.appendChild(pokeWeight);
    div.appendChild(pokeHeight);
    console.log(data);
}
