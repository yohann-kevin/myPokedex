import {colors} from './assets/colors.js'

const pokemon = document.getElementById('pokemon');
const imgPoke = document.getElementById('imgPoke');

var pokeTab = [];

let pokeId = [];
let pokeName = [];
let pokeType = [];
let pokeWeight = [];
let pokeHeight = [];

let pokeAbilitiesOne = [];
let pokeAbilitiesTwo = [];
let pokeExpBased = [];

let pokeHp = [];
let pokeAtck = [];
let pokeDef = [];
let pokeAtckSpe = [];
let pokeDefSpe = [];
let pokeSpeed = [];

export function fetchPokemon() {
    for (let i = 1; i < 15; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            let arrayPoke = [];
            let div = document.createElement('div');
            div.classList.add('poke');

            let pName = document.createElement('a');
            pName.classList.add('pokeName');
            pName.textContent = json.name;
            pName.style.color = colors.red;
            // pName.href = "https://pokeapi.co/api/v2/pokemon/" + i
            pName.href = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"

            let pImg = document.createElement('img');
            pImg.srcset = "https://pokeres.bastionbot.org/images/pokemon/" + i + ".png";

            arrayPoke.push(json)
            pokemon.appendChild(div);
            div.appendChild(pImg);
            div.appendChild(pName);

            div.style.backgroundColor = 'red';
            div.style.borderRadius = '15px';
            div.style.margin = "5px";
        });
    }
}

export function fetchPoke() {
    for (let i = 1; i < 10; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {

            get(pokeId, json.id);
            get(pokeName, json.name);
            get(pokeType, json.types[0].type.name);
            get(pokeWeight, json.weight);
            get(pokeHeight, json.height);
            get(pokeAbilitiesOne, json.abilities[0].ability.name);
            get(pokeAbilitiesTwo, json.abilities[1].ability.name);
            get(pokeExpBased, json.base_experience);

            get(pokeHp, json.stats[0].base_stat);
            get(pokeAtck, json.stats[1].base_stat);
            get(pokeDef, json.stats[2].base_stat);
            get(pokeAtckSpe, json.stats[3].base_stat);
            get(pokeDefSpe, json.stats[4].base_stat);
            get(pokeSpeed, json.stats[5].base_stat);
        });
    }
    pokeTab.push(pokeId,pokeName,pokeType,pokeWeight,pokeHeight,pokeAbilitiesOne,pokeAbilitiesTwo,pokeExpBased,pokeHp,pokeAtck,pokeDef,pokeAtckSpe,pokeDefSpe,pokeSpeed);
    return pokeTab
}

export function typePoke() {
    // console.log(pokeName)
    return pokeType
}

export var poke = {
    id: pokeId,
    name: pokeName
}


//function push for factorisation
function get(tab, value) {
    tab.push(value);
}