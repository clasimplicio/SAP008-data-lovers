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
    <div class="bloco">
        <div class="res-fra">
            <p class="titulo-res-fra">${pokeSelected.type.join(" - ")}</p>
            <div class="fra-res">
                <div class="res">
                    <table >
                        <thead>
                        <tr>
                            <th >RESISTÊNCIA</th>
                        </tr>
                        </thead>
                        <tbody class="colunasres">
                        </tbody>  
                    </table>
                </div>
                <div class="fra">    
                    <table >
                        <thead>
                            <tr>
                                <th>FRAQUEZAS</th>
                            </tr>
                        </thead>
                        <tbody class="colunasfra">
                        </tbody>  
                    </table>
                </div>
            </div>
            <p class="titulo-info">ATRIBUTOS BASE</p>
            <div class="stats">
                <table class="table-stats">
                    <tr class="tr-stats">
                        <th  >ATAQUE</th>
                        <td id="stats-atk"></td>
                    </tr>
                    <tr>
                        <th  >DEFESA</th>
                        <td id="stats-def"></td>
                    </tr>
                    <tr>
                        <th >STAMINA</th>
                        <td id="stats-stamina" ></td>
                    </tr>
                    <tr>
                        <th >CP MÁXIMO</th>
                        <td id="stats-cp"></td>
                    </tr>
                    <tr>
                        <th >HP MÁXIMO</th>
                        <td id="stats-hp"></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="ataques">
            <p class="titulo-info">ATAQUES NORMAIS</p>
            <div class="atk-g" id="atk-normal"></div>
            <p class="titulo-info">ATAQUES ESPECIAIS</p>
            <div class="atk-g" id="atk-especial"></div>
        </div>
    </div>
    
        
`
window.addEventListener("load", ()=>printRes(pokeSelected.resistant))
window.addEventListener("load", ()=>printFra(pokeSelected.weaknesses))
window.addEventListener("load", ()=>printStats(pokeSelected))
window.addEventListener("load", ()=>printAtaques(pokeSelected))


function printRes(array) {
    let tbody = document.querySelector(".colunasres")
    array.map((key) =>{
      let tr = tbody.insertRow();
      let td_res = tr.insertCell()
      td_res.innerHTML = key;
    }).join("")
}

function printFra(array) {
    let tbody = document.querySelector(".colunasfra")
    array.map((key) =>{
      let tr = tbody.insertRow();
      let td_res = tr.insertCell()
      td_res.innerHTML = key;
    }).join("")
}

function printStats(array) {
    document.querySelector("#stats-atk").innerHTML = array.stats['base-attack']
    document.querySelector("#stats-def").innerHTML = array.stats['base-defense']
    document.querySelector("#stats-stamina").innerHTML = array.stats['base-stamina']
    document.querySelector("#stats-cp").innerHTML = array.stats['max-cp']
    document.querySelector("#stats-hp").innerHTML = array.stats['max-hp'] 
}

function printAtaques(array){
    document.querySelector("#atk-normal").innerHTML = array['quick-move'].map((key) =>
        `
            <div class="table-atk">
                <table>
                    <caption> ${key.name} - ${key.type}</caption>
                    <tr>
                        <th scope="row"> DAMAGE: </th>
                        <td>${key['base-damage']}</td>
                    </tr>
                    <tr>
                        <th scope="row"> ENERGIA: </th>
                        <td>${key.energy}</td>
                    </tr>
                    <tr>
                        <th scope="row"> DURAÇÃO(S): </th>
                        <td>${key['move-duration-seg']}</td>
                    </tr>
                </table>
            </div>

        `
    ).join("")

    document.querySelector("#atk-especial").innerHTML = array['special-attack'].map((key) =>
        `
            <div class="table-atk">
                <table>
                    <caption> ${key.name} - ${key.type}</caption>
                    <tr>
                        <th scope="row"> DAMAGE: </th>
                        <td>${key['base-damage']}</td>
                    </tr>
                    <tr>
                        <th scope="row"> ENERGIA: </th>
                        <td>${key.energy}</td>
                    </tr>
                    <tr>
                        <th scope="row"> DURAÇÃO(S): </th>
                        <td>${key['move-duration-seg']}</td>
                    </tr>
                </table>
            </div>

        `
    ).join("")
}




