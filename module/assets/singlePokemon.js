import {backgroundColor} from './backgroundColor.js'

export function singlePokemon(page,div,id,type) {
    let newImg = document.createElement('img');
    newImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    page.style.display = 'block';
    div.style.backgroundColor = backgroundColor(type);
    div.appendChild(newImg);
}
