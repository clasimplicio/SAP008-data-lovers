import {calCp} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

window.addEventListener("load", ()=>printCp(arrayPokemon));  

function printCp(array){
    document.querySelector("#select").innerHTML=`
        
            <option id="teste" selectd disableb value="">---SEU POKÉMON---</option>
            ${
                array.map((key)=>`
                    <option class="options" >${key.name}</option>
                `)
            }
    `
}

document.querySelector("#btnCalCp").addEventListener('click',() => {
    const cpDigitado = document.querySelector("#cpCapturado").value 
    const pokeSelecionado = document.querySelector("#select")
    const indice = pokeSelecionado.selectedIndex    
    if(indice==0){
        document.querySelector("#resultado").innerHTML = "Escolha um pokémon"
    }
    const cpCalculado = calCp(arrayPokemon,indice-1,cpDigitado)
    document.querySelector("#resultado").innerHTML = "Faltam "+ cpCalculado + " pro seu " + arrayPokemon[indice-1].name + " chegar ao CP máximo da espécie"
})

document.querySelector("#select").addEventListener('change',() => {
    const pokeSelecionado = document.querySelector("#select")
    const indice = pokeSelecionado.selectedIndex
    if(indice==0){
        document.querySelector("#imgCp").innerHTML =""
    }
    document.querySelector("#imgCp").innerHTML =`
    <img class="img" id="teste" src="${arrayPokemon[indice-1].img}">
    `
})


