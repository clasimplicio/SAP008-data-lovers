import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

const params = new URLSearchParams(location.search)
const info = params.get("info")
let pokeSelected = arrayPokemon.filter((key) => key.num === info)[0]

// (pokeSelected) ? console.log(pokeSelected.name) : console.log("Pokémon não existe")

document.querySelector(".container").innerHTML=
`
    <div class="geralInfo">
        <img class="img-info" src="${pokeSelected.img}" alt="${pokeSelected.name}">
        <div class="titulos-info">
            <p class="id-info">#${pokeSelected.num}</p>
            <h1 class="nome-info" >${pokeSelected.name}</h1>
            <p class="rarity-info">${pokeSelected['pokemon-rarity']}</p>
        </div>
    </div>

    <div class="res-fra">
        <p class="titulo-res-fra">${pokeSelected.type.join(" ")}</p>
        <div class="res">
            <p class="titulo-info">RESISTÊNCIAS</p>
            <p>${pokeSelected.resistant.join(" ")}</p>
        </div>
        <div class="fra">    
            <p class="titulo-info">FRAQUEZAS<p>
            <p>${pokeSelected.weaknesses.join(" ")}</p>
        </div>
    </div>
    <div class="stats">
        <p class="titulo-info">ATRIBUTOS BASE</p>
        <p>ATAQUE: ${pokeSelected.stats['base-attack']}</p>
        <p>DEFESA: ${pokeSelected.stats['base-defense']}</p>
        <p>STAMINA: ${pokeSelected.stats['base-stamina']}</p>
        <p>CP MÁXIMO: ${pokeSelected.stats['max-cp']}</p>
        <p>HP MÁXIMO: ${pokeSelected.stats['max-hp']}</p>
    </div>
    <div class="ataques">
        ${pokeSelected['quick-move'].map((key) =>
            `
                <p>${key.name}</p>
                <p>${key.type}</p>
                <p>DAMAGE: ${key['base-damage']}</p>
                <p>ENERGIA: ${key.energy}</p>
                <p>DURAÇÃO(S): ${key['move-duration-seg']}</p>
                  
            `
            ).join("/")
        }
    </div>
    <div class="ataques-especiais">
        ${pokeSelected['special-attack'].map((key) =>
            `
                <p>${key.name}</p>
                <p>${key.type}</p>
                <p>DAMAGE: ${key['base-damage']}</p>
                <p>ENERGIA: ${key.energy}</p>
                <p>DURAÇÃO(S): ${key['move-duration-seg']}</p>
            `
            ).join("/")
        }
    </div>
    <div class="evolution">
    
    </div>
        
`