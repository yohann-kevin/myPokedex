import {colors} from './assets/colors.js'
import {getPokemon} from './assets/pokemon.js'
import {newTest} from './assets/pokemon.js'
import {backgroundColor} from './assets/backgroundColor.js'

export function test() {
    getPokemon();
    newTest();
}


const pokemon = document.getElementById('pokemon');
const pageSingle = document.getElementById('id01');
const singleDiv = document.getElementById('container');

var pokeTab = [];

export function fetchPokemon() {
    for (let i = 1; i < 20; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            let arrayPoke = [];
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let test = document.createElement('p');
            div.classList.add('poke');
            
            let pName = document.createElement('a');
            pName.classList.add('pokeName');
            pName.textContent = json.name;
            pName.style.color = 'white';
            test.textContent = json.id;
            test.style.color = 'white';
            test.style.display = 'none';
            let pImg = document.createElement('img');
            pImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + i + ".png";

            arrayPoke.push(json)
            pokemon.appendChild(div);
            div.appendChild(pImg);
            div.appendChild(pName);
            div.appendChild(test);

            div.style.backgroundColor = backgroundColor(json.types[0].type.name);

            div.style.borderRadius = '15px';
            div.style.marginBottom = "40px";

            div.onmouseover = div.style.cursor = 'pointer';
            div.addEventListener("click", function() {
                let newImg = document.createElement('img');
                newImg.srcset =  "https://pokeres.bastionbot.org/images/pokemon/" + i + ".png";
                test.style.display = 'initial';
                pageSingle.style.display='block';
                singleDiv.style.backgroundColor = backgroundColor(json.types[0].type.name);
                singleDiv.appendChild(newImg);
            })
        });
    }
}

export function fetchPoke() {

}

// export function typePoke() {
//     // console.log(pokeName)
//     return pokeType
// }

// export var poke = {
//     id: pokeId,
//     name: pokeName
// }
