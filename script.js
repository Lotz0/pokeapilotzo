const pokeResult = document.querySelector('[data-poke-result]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeType = document.querySelector('[data-poke-types]');
const pokeStats1 = document.querySelector('[data-poke-stats-1]');
const pokeStats2 = document.querySelector('[data-poke-stats-2]');


const buscarPokemon = event => {
    event.preventDefault();
    var idIngresado = document.getElementById('pokeIntro').value;
    if(idIngresado == '', idIngresado == 0){
        pokeName.textContent =`Ingresar un numero valido` ;
    } else if (idIngresado < 0){
        pokeName.textContent= `ingresar un numero mayor a 0`;
    }
   



    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
}



const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { types } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `id: ${data.id}`;
    renderPokeTypes(types);
    pokeStats1.textContent =`peso de kg: ${data.weight}` ;
    pokeStats2.textContent =`altura en Metros : ${data.height}`;
}

const renderPokeTypes = types => {
    pokeType.innerHTML ='';
    types.forEach(type => {
        const typeTextElement = document.createElement('div');
        typeTextElement.textContent = type.type.name;
        pokeType.appendChild(typeTextElement);
    });
}


