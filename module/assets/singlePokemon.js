import {backgroundColor} from './backgroundColor.js'
let namePokemon = document.createElement('h1');

export function singlePokemon(page,div,id,name,type) {
    let newImg = document.createElement('img');
    newImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    page.style.display = 'block';
    namePokemon.textContent = name;
    namePokemon.classList.add('namePokemon');
    newImg.style.backgroundColor = backgroundColor(type);
    newImg.classList.add('imgSinglePokemon');
    div.appendChild(newImg);
    div.appendChild(namePokemon);
}
