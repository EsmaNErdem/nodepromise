const apiURL = "https://deckofcardsapi.com/api/deck"
const div = document.querySelector("div")
const button = document.querySelector("button")

// ------------PROMISE-----------------
// 1
axios.get(`${apiURL}/new/draw/`)
    .then(res =>{
        const {suit, value} = res.data.cards[0];
        console.log(`${value} ${suit}`);
    })
    .catch(err => console.log(err))
// 2
axios.get(`${apiURL}/new/draw/`)
.then(res =>{
    const {suit, value} = res.data.cards[0];
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
// axios.get(`${apiURL}/new/`)
//     .then(res => {
//         deckId = res.data.deck_id
//         button.classList.remove("hidden")
//     })
// button.addEventListener("click", function(){
//     axios.get(`${apiURL}/${deckId}/draw/`) 
//         .then ( res => {
//             let imgSrc = res.data.cards[0].image
//             let angle = Math.random() * 90 - 45;
//             let randomX = Math.random() * 40 - 20;
//             let randomY = Math.random() * 40 - 20;
//             const img = document.createElement('img');
//             img.src = imgSrc;
//             img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
//             div.appendChild(img);
//             if ( res.data.remaning === 0 ){
//                 button.classList.add("hidden")
//             }
//         })
//         .catch(err => console.log(err))
// })

// -----------------ASYNC/AWAIT----------
// 1
async function getOneCard() {
    const res = await axios.get(`${apiURL}/new/draw/`)
    const {suit, value} = res.data.cards[0];
    console.log(`${value} ${suit}`);  
    return {suit, value};       
}

async function getTwoCard() {
    const res = await axios.get(`${apiURL}/new/draw/`)
    const {suit, value} = res.data.cards[0];
    console.log(`first card: ${value} ${suit}`); 
    const res2 = await axios.get(`${apiURL}/${res.data.deck_id}/draw/`)
    console.log(`second card: ${res2.data.cards[0].value} ${res2.data.cards[0].suit}`); 
}

async function putACard() {
    const deck = await axios.get(`${apiURL}/new/`)
    button.addEventListener("click", async function(){
        console.log("WHATUP!")
        const res = await axios.get(`${apiURL}/${deck.data.deck_id}/draw/`)
        const imgSrc = res.data.cards[0].image
        const angle = Math.random() * 90 - 45;
        const randomX = Math.random() * 40 - 20;
        const randomY = Math.random() * 40 - 20;
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
        div.appendChild(img);
        if ( res.data.remaning === 0 ){
            button.classList.add("hidden")
        }
    })
}
getOneCard()
getTwoCard()
putACard()