const pokemon = document.getElementById('pokemon');
const imgPoke = document.getElementById('imgPoke');

let pokeId = [];
let pokeName = [];
let pokeType = [];
let pokeWeight = [];
let PokeHeight = [];

let pokeAbilitiesOne = [];
let pokeAbilititesTwo = [];
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
            let pDiv = document.createElement('div');
            pDiv.classList.add('poke');
            let pName = document.createElement('a');
            pName.classList.add('pokeName');
            pName.textContent = json.name;
            // pName.href = "https://pokeapi.co/api/v2/pokemon/" + i
            pName.href = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
            let pImg = document.createElement('img');
            pImg.src = json.sprites.front_shiny;
            arrayPoke.push(json)
            pokemon.appendChild(pDiv);
            pDiv.appendChild(pImg);
            pDiv.appendChild(pName);
            // console.log(arrayPoke)
            // return arrayPoke
        });
    }
}

export function fetchPoke() {
    for (let i = 1; i < 2; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            get(pokeId,json.id);
            get(pokeName,json.name);
            get(pokeType,json.types[0].type.name);
            get(pokeWeight,json.weight);
            get(PokeHeight,json.height);
            get(pokeAbilitiesOne,json.abilities[0].ability.name);
            get(pokeAbilititesTwo,json.abilities[1].ability.name);
            get(pokeExpBased,json.base_experience);

            get(pokeHp,json.stats[0].base_stat);
            get(pokeAtck,json.stats[1].base_stat);
            get(pokeDef,json.stats[2].base_stat);
            get(pokeAtckSpe,json.stats[3].base_stat);
            get(pokeDefSpe,json.stats[4].base_stat);
            get(pokeSpeed,json.stats[5].base_stat);

            // console.log(pokeId + "-" + pokeName + "-" + pokeType + "-" + pokeWeight + "-" + PokeHeight);
            // console.log('abilities : ' + pokeAbilitiesOne + "-" + pokeAbilititesTwo);
            // console.log('based exp : ' + pokeExpBased);
            // console.log('HP : ' + pokeHp + " ATTACK : " + pokeAtck + " Defense : " + pokeDef + " attack spe : " + pokeAtckSpe + " Defense spe : " + pokeDefSpe + " speed : " + pokeSpeed);
        });
    }
}

//function push for factorisation
function get(tab,value) {
    tab.push(value);
}