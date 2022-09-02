import {sortData} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

sortData(arrayPokemon, "atk")

console.log(arrayPokemon)
window.addEventListener("load", ()=>printMelhores(arrayPokemon))

function printMelhores(array) {
    let tbody = document.querySelector(".colunasatk")
    array.map((key) =>{
      let tr = tbody.insertRow();

      let td_ataque = tr.insertCell()
      let td_nome = tr.insertCell()
      let td_imgtabela= tr.insertCell()

      td_ataque.innerHTML = key.stats['base-attack']
      td_nome.innerHTML = key.name
      td_imgtabela.innerHTML = `<img class="imgTab" src="${key.img}" alt="${key.name}">`


    }).join("")
}

