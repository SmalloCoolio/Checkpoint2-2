const search_input = document.getElementById('search-bar');
const names = document.querySelector(".name");
const id = document.querySelector(".id");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const order = document.querySelector(".order");


const pokemonImage = document.querySelector(".pokeball");

const fetchApi = async (pkmnName) => {
    pkmnNameApi = pkmnName.split(' ').join('-');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnNameApi);
    
    if (response.status === 200) {
        const pkmnData = await response.json();
        return pkmnData;
    } 

    return false;
}

search_input.addEventListener('change', async (event) => {
    const pkmnData  = await fetchApi(event.target.value);



    if(!pkmnData) {
        alert('Pokémon does not exist.');
        return;
    }

    console.log(pkmnData);

    pokemonImage.src = pkmnData.sprites.other.home.front_default;

    names.innerHTML = pkmnData.name
    height.innerHTML = pkmnData.height
    weight.innerHTML = pkmnData.weight
    id.innerHTML = pkmnData.id
    order.innerHTML = pkmnData.order


});

