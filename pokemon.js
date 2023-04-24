const apiURL = "https://pokeapi.co/api/v2/";
const div = document.querySelector("div");
const button = document.querySelector("#pokemon");


// 1
axios.get(`${apiURL}pokemon/?limit=1000`)
    .then(res =>{
        let pokemon = []
        // picking random 3
        Array.from({ length: 3 }, () => {
            let randomIndex = Math.floor(Math.random()*res.data.results.length);
            pokemon.push(axios.get(res.data.results[randomIndex].url))
        })
        // requesting response data of these 3 specific pokemon
        return Promise.all(pokemon)
    })
    .then(data => {
        // printing each name
        data.forEach(resp => console.log(resp.data.name))
        // requesting next response to get species specifics
        return Promise.all(data.map(resp => axios.get(resp.data.species.url)))
    })
    .then(data => {
        //rendering request response
        data.forEach(resp => console.log(`${resp.data.name}: ${resp.data.flavor_text_entries[0].flavor_text}`))
    })
    .catch(err => console.log(err))

