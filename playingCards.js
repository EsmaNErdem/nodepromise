const apiURL = "https://deckofcardsapi.com/api/deck"
const div = document.querySelector("div")
const button = document.querySelector("button")


// 1
axios.get(`${apiURL}/new/draw/`)
    .then(res =>{
        let {suit, value} = res.data.cards[0];
        console.log(`${value} ${suit}`);
    })
    .catch(err => console.log(err))
// 2
    axios.get(`${apiURL}/new/draw/`)
    .then(res =>{
        let {suit, value} = res.data.cards[0];
        console.log(`${value} ${suit}`);
        console.log(res.data);
    return axios.get(`${apiURL}/${res.data.deck_id}/draw/`) 
    })
    .then ( res => {
        let {suit, value} = res.data.cards[0];
        console.log(`${value} ${suit}`);
        console.log(res.data.deck_id);
    }        
    )
    .catch(err => console.log(err))

// 3
axios.get(`${apiURL}/new/`)
    .then(res => {
        deckId = res.data.deck_id
        button.classList.remove("hidden")
    })
button.addEventListener("click", function(){
    axios.get(`${apiURL}/${deckId}/draw/`) 
        .then ( res => {
            let imgSrc = res.data.cards[0].image
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
            div.appendChild(img);
            if ( res.data.remaning === 0 ){
                button.classList.add("hidden")
            }
        })
        .catch(err => console.log(err))
})