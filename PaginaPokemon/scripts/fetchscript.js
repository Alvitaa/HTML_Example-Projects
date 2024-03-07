let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
fetch(url)
    .then(response => response.json())
    .then(data => showPokemon(data.results))
    .catch(error => console.log(error))

const showPokemon = (data) => {
    let body = ""
    console.log(body);
    for(let i = 0; i<data.length; i++){
        body += `<tr><td>${i+1}</td> <td>${data[i].name}</td> <td><a href=${data[i].url}>Link del pokemon</a></td></tr>`
    }
    
    document.getElementById('data').innerHTML = body;
}