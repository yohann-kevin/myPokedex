import {pokeName} from './assets/pokeName.js'
import {backgroundColor} from './assets/backgroundColor.js'

let container = document.getElementById('randomPoke');

export function randomPoke() {
    let index = randomNum();
    for (let i = (index - 1); i < index; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            let div = document.createElement('div');
            div.classList.add('poke');
            
            let pName = document.createElement('a');
            pokeName(pName,json.name,'white','pokeName');
            let pImg = document.createElement('img');
            pImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + i + ".png";
            pImg.alt = json.name;

            container.appendChild(div);
            div.appendChild(pName);
            div.appendChild(pImg);  
            
            div.style.backgroundColor = backgroundColor(json.types[0].type.name);
            div.style.borderRadius = '15px';
            div.style.marginBottom = "40px";
        });
    }
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * Math.floor(400));
    return randomNumber;
}