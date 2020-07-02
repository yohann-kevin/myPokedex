let allPokemon = [];
let pokeTab = [];

let pokeId = [];
let pokeName = [];
let pokeType = [];
let pokeWeight = [];
let pokeHeight = [];

let pokeAbilitiesOne = [];
let pokeAbilitiesTwo = [];
let pokeExpBased = [];
let tab = [];
let pokeHp = [];
let pokeAtck = [];
let pokeDef = [];
let pokeAtckSpe = [];
let pokeDefSpe = [];
let pokeSpeed = [];
let arrayPoke = [];

export function getPokemon() {
  for (let i = 1; i < 10; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
      return response.json()
    }).then(function (json) {
      
      tab.push(json.name)
      
      //   arrayPoke.push(json.name,json.id)
      //   tab.push(i)
    });
  }
return tab
}

export function newTest() {
  console.log(tab);
}

// export function getPokemon() {
//   for (let i = 1; i < 10; i++) {
//     fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(function (response) {
//       return response.json()
//     }).then(function (json) {

//         arrayPoke.push(json.id);
//         pokeId.push(json.id);
//     //   get(pokeId, json.id);
//       get(pokeName, json.name);
//       get(pokeType, json.types[0].type.name);
//       get(pokeWeight, json.weight);
//       get(pokeHeight, json.height);
//       get(pokeAbilitiesOne, json.abilities[0].ability.name);
//       get(pokeAbilitiesTwo, json.abilities[1].ability.name);
//       get(pokeExpBased, json.base_experience);

//       get(pokeHp, json.stats[0].base_stat);
//       get(pokeAtck, json.stats[1].base_stat);
//       get(pokeDef, json.stats[2].base_stat);
//       get(pokeAtckSpe, json.stats[3].base_stat);
//       get(pokeDefSpe, json.stats[4].base_stat);
//       get(pokeSpeed, json.stats[5].base_stat);
//     //   console.log(json.id[i])
//       //console.log(pokeId[i]);

//     });

//     // console.log(pokeId[i],pokeName[i],pokeType[i],pokeWeight[i],pokeHeight[i],pokeAbilitiesOne[i],pokeAbilitiesTwo[i],pokeExpBased[i],pokeHp[i],pokeAtck[i],pokeDef[i],pokeAtckSpe[i],pokeDefSpe[i],pokeSpeed[i]);
//   }
//   return arrayPoke

// }

//function push for factorisation
function get(tab, value) {
  tab.push(value);
}
