import {sortData, filters} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

//-----------------CHAMANDO A FUNÇÃO PRINTCARDS QUANDO RECARREGAR A PÁGINA----------- 
window.addEventListener("load", ()=>printCards(arrayPokemon))

//----------------CHAMANDO A FUNÇÃO SEARCHPOKEMON QUANDO DIGITAR ALGO NO INPUT ID SEARCH----------------
document.querySelector("#search").addEventListener("keyup", ()=>{
    const searchFor=document.querySelector("#search").value.toLowerCase()
    printCards(arrayPokemon.filter((key) => key.name.includes(searchFor)))
})

// -------------------CHAMANDO FUNÇÃO FILTERS A CADA TROCA DE SELECT---------------------
document.querySelector(".typePoke").addEventListener("change", ()=>{
    const getValue= document.querySelector(".typePoke").value
    if(getValue==="todos"){
        printCards(arrayPokemon)
    }else{
        printCards(filters(arrayPokemon, getValue, "type"))
    }
})
document.querySelector(".generationPoke").addEventListener("change", ()=>{
    const getValue= document.querySelector(".generationPoke").value
    if(getValue=="todos"){
        printCards(arrayPokemon)
    }else{
        printCards(filters(arrayPokemon, getValue, "generation"))
    }
})

//----------------------------CHAMANDO A FUNÇÃO SORTDATA A CADA TROCA DE SELECT---------------------------
document.querySelector(".sort").addEventListener("change", ()=>{
    const getValue= document.querySelector(".sort").value
    printCards(sortData(arrayPokemon,getValue))
})

//------------------------------PRINT DE CARDS NA DIV CARDS----------------------------------
function printCards(array) {
    document.querySelector(".card").innerHTML = array.map((key) =>
        `
            <a href="info.html?info=${key.num}">
                <div class="cardPokemon">
                    <p class="registro" >${key.num}</p>
                    <h1>${key.name}</h1>
                    <img class="imgCard" src="${key.img}" alt="${key.name}">
                    <p class="tipo" >${key.type.join(" ")}</p>
                </div>
            </a>
        `
    ).join("")
}