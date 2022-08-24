import {sortData} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

sortData(arrayPokemon, "atk")

console.log(arrayPokemon)
window.addEventListener("load", ()=>printMelhores(arrayPokemon))



function printMelhores(array) {
    document.querySelector(".atk").innerHTML = array.map((key) =>
        `
            <p class="registro" >${key.num}</p>
            <h1>${key.name}</h1>
            <img class="imgCard" src="${key.img}" alt="${key.name}">
            <p>${key.stats['base-attack']}</p>
            
        `
    ).join("")
}
