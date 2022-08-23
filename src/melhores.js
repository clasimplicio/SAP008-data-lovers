import {melhores} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

window.addEventListener("load", ()=>printCards(arrayPokemon))

/* ordenar:function(){

}*/


/*function printCards(array) {
    document.querySelector("#cards").innerHTML = array.map((key) =>
        `
        <div class="cardPokemon">
        <p class="registro" >${key.num}</p>
        <h1>${key.name}</h1>
        <img class="imgCard" src="${key.img}" alt="${key.name}">
        <p class="tipo" >${key.type.join(" ")}</p>
        </div>
        `
    ).join("")
}
*/