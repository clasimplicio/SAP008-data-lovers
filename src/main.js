import {sortData, filterGeneration, filterType} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;
//-----------------CHAMANDO A FUNÇÃO PRINTCARDS QUANDO RECARREGAR A PÁGINA----------- 
window.addEventListener("load", ()=>printCards(arrayPokemon));  
//----------------CHAMANDO A FUNÇÃO SEARCHPOKEMON QUANDO DIGITAR ALGO NO INPUT ID SEARCH----------------
document.querySelector("#search").addEventListener("keyup", ()=>{
    const searchFor=document.querySelector("#search").value.toLowerCase()
    printCards(arrayPokemon.filter((key) => key.name.includes(searchFor)))
}
);
// -------------------CHAMANDO FUNÇÃO FILTERTYPE---------------------
document.querySelector(".typePoke").addEventListener("change", ()=>{
    const getValue= document.querySelector(".typePoke").value
    if(getValue==="todos"){
        printCards(arrayPokemon)
    }else{
        printCards(filterType(arrayPokemon, getValue))
    }
})
//---------------------------CHAMANDO FUNÇÃO FILTERGENERATION--------------------
document.querySelector(".generationPoke").addEventListener("change", ()=>{
    const getValue= document.querySelector(".generationPoke").value
    if(getValue=="todos"){
        printCards(arrayPokemon)
    }else{
        printCards(filterGeneration(arrayPokemon, getValue))
    }
})

document.querySelector(".sort").addEventListener("change", ()=>{
    const getValue= document.querySelector(".sort").value
    printCards(sortData(arrayPokemon,getValue))
})


// -------------------CHAMANDO FUNÇÃO FILTERS NO CLICK-----------------------
//document.querySelector("filtertype").addEventListener("change",()=>printCards(filterTyper(arrayPokemon, document.querySelector(".typePoke").value, "type")));
//document.querySelector("filtergeneration").addEventListener("click",()=>printCards(filterGeneration(arrayPokemon, document.getElementById("filtergeneration").value )));

//------------------------------PRINT DE CARDS NA DIV CARDS----------------------------------
function printCards(array) {
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

