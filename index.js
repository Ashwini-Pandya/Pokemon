const res = document.getElementById('main');

function getdata() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=32')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            pokemondetails(pokemon.url);
        }); 
    })
}

function pokemondetails(url) {
    fetch(url)
    .then(response => response.json())
    .then(pokemon => displaydata(pokemon))
}

function displaydata(pokemon) {
    const card = document.createElement('div');
    card.className = 'card'; // Use className, not classname
    const name = document.createElement('h3');
    name.textContent = pokemon.name; // Set the name of the Pokemon
    const sidebox = document.getElementById('side-box')
    card.addEventListener('click', () => {
        // Create a template for displaying detailed data
        const details = `
            <h4>${pokemon.name}</h4>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Base Experience: ${pokemon.base_experience}</p>
        `;
        sidebox.innerHTML = details;
    });
        
    card.appendChild(name);
    res.appendChild(card);
        }

getdata();

