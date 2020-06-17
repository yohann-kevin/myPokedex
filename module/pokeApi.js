const pokemon = document.getElementById('pokemon');
const imgPoke = document.getElementById('imgPoke');

export function fetchPokemon() {
    for (let i = 1; i < 50; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            let pDiv = document.createElement('div')
            pDiv.classList.add('poke');
            let pName = document.createElement('a');
            pName.classList.add('pokeName');
            pName.textContent = json.name;
            // pName.href = "https://pokeapi.co/api/v2/pokemon/" + i
            pName.href = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
            let pImg = document.createElement('img');
            pImg.src = json.sprites.front_shiny;

            pokemon.appendChild(pDiv)
            pDiv.appendChild(pName)
            pDiv.appendChild(pImg)
        });
    }
}