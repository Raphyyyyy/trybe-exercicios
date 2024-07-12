const form = document.querySelector('form');
const pokeImg = document.querySelector('#poke-img');
const pokeName = document.querySelector('#poke-name');
const inputName = document.querySelector('#name-input');


const fetchPokemon = async (value) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+value);//pega a data do api e espera a resposta
    const data = await res.json();//converte a resposta em json esperando a resposta
    return data;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário
    const value = inputName.value.toLowerCase(); // Obtém o valor da entrada e converte para minúsculas
    try {
        const pokemon = await fetchPokemon(value);
        pokeName.textContent = pokemon.name;
        pokeImg.src = pokemon.sprites.front_default; // Atualiza a imagem do Pokémon
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        pokeName.textContent = 'Não encontrado';
        pokeImg.src = './img/poke-not-found'; // Limpa a imagem do Pokémon
    }
});