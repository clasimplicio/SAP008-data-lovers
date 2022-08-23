//let params = new URLSearchParams(window.location.search.substring(1));
//const getInfo = params.get("info")
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

/* const url = window.location.href
let arr = url.split("=")
let pokeSelected = arrayPokemon.filter((key) => key.num.includes(arr[1]))

console.log(arr)
console.log(arr[1])
console.log(pokeSelected) */

const params = new URLSearchParams(location.search)
const info = params.get("info")

console.log(params)
console.log(info)