const pokemon = document.getElementById('pokemon');
const imgPoke = document.getElementById('imgPoke');

for (let i = 1; i < 152; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
        return response.json()
    }).then(function (json) {
        let pDiv = document.createElement('div')
        pDiv.classList.add('poke')
        let pName = document.createElement('a');
        pName.textContent = json.name;
        let pImg = document.createElement('img');
        pImg.src = json.sprites.front_shiny;

        pokemon.appendChild(pDiv)
        pDiv.appendChild(pName)
        pDiv.appendChild(pImg)
    });
}


function myFunction() {
    console.log('plop')
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toLowerCase();
    ul = document.getElementById('ul');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}