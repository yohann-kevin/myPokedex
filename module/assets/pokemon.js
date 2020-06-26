

export function getPokemon() {
    for (let i = 1; i < 15; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log(json)
        })
    }
}