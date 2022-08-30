import {sortData} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

sortData(arrayPokemon, "def")

console.log(arrayPokemon)
window.addEventListener("load", ()=>printMelhores(arrayPokemon))

function printMelhores(array) {
    let tbody = document.querySelector(".colunasdef")
    array.map((key) =>{
      let tr = tbody.insertRow();

      let td_defesa = tr.insertCell()
      let td_nome = tr.insertCell()
      let td_imgtabela= tr.insertCell()

      td_defesa.innerHTML = key.stats['base-defense']
      td_nome.innerHTML = key.name
      td_imgtabela.innerHTML = `<img class="imgTab" src="${key.img}" alt="${key.name}">`


    }).join("")
}