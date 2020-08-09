import {pokeName} from './assets/pokeName.js'
import {backgroundColor} from './assets/backgroundColor.js'
import {verifyType} from './assets/verifyType.js'
import {singlePokemon} from './assets/singlePokemon.js'
import {closePoke} from './assets/closeSinglePoke.js'

let container = document.getElementById('randomPoke');
const pageSingle = document.getElementById('id01');
const singleDiv = document.getElementById('container');

export function randomPoke() {
    let index = randomNum();
    for (let i = (index - 1); i < index; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            let arrayPoke = [];
            let div = document.createElement('div');
            div.classList.add('poke');

            if (json.types.length === 2) {
                arrayPoke.push(json.id,json.name,verifyType(json.types[0].type.name,json.types[1].type.name),json.weight,json.height,);
            } else {
                arrayPoke.push(json.id,json.name,json.types[0].type.name,json.weight,json.height,);
            }
            
            let pName = document.createElement('a');
            pokeName(pName,json.name,'white','pokeName');
            let pImg = document.createElement('img');
            pImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + i + ".png";
            pImg.alt = json.name;

            container.appendChild(div);
            div.appendChild(pImg);  
            div.appendChild(pName);
            
            div.style.backgroundColor = backgroundColor(json.types[0].type.name);
            div.style.borderRadius = '15px';
            div.style.marginBottom = "40px";
            div.onmouseover = div.style.cursor = 'pointer';

            div.addEventListener("click", function () {
                singlePokemon(pageSingle,singleDiv,json.name,arrayPoke);
                closePoke(singleDiv);
            })
        });
    }
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * Math.floor(400));
    return randomNumber;
}