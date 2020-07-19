// api pokemon
import {fetchPokemon} from '../module/pokeApi.js'
// test colors
import {badges} from '../module/badges.js'
// test search
import {search} from '../module/search.js'
// test sidebar
import {openNav} from '../module/sidebar.js'
import {closeNav} from '../module/sidebar.js'
// test menu smartphone
import {openNavSmartphone} from '../module/navSmartphone.js'
import {closeNavSmartphone} from '../module/navSmartphone.js'
// test views system
import {views} from '../module/views.js'
// test exp bar
import {expBarTest} from '../module/expBarTest.js'

// test
// import {action} from '../module/test.js'
// import {action2} from '../module/test.js'

fetchPokemon();
search();
badges();
openNav();
closeNav();
openNavSmartphone();
closeNavSmartphone();
views();
expBarTest();

// action();
// action2();