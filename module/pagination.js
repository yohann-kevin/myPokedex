import {fetchPokemon} from './pokeApi.js'
// import { registerCounter } from './assets/registerCounter.js';

const pokemon = document.getElementById('pokemon');
let child = pokemon.children;
let more = document.getElementById('more');
let less = document.getElementById('less');
let counter = 25;

export function pagination(lastCount) {
    more.addEventListener("click", function() {
        counter = lastCount + counter;
        console.log(lastCount);
        // test.push(pokemon.children);
        for (let i = 0; i < child.length; i++) {
            child[i].remove();
        }
        // test.remove();
        fetchPokemon();
        return counter;
    });

    less.addEventListener("click", function() {
        counter = lastCount - counter;
        for (let i = 0; i < child.length; i++) {
            child[i].remove();
        }
        fetchPokemon();
        return counter;
    });

    return counter;
}