// http://numbersapi.com/56?json for JSON
const apiURL = "http://numbersapi.com"


let favNumFact = axios.get(`${apiURL}/36?json`)
favNumFact
.then(resp => {    
    console.log(resp.data.text); 
    return resp
})
.catch(err => console.log(err))


const randomNum = [20, 29, 34]
let numFacts = axios.get(`${apiURL}/${randomNum}?json`)
numFacts
.then(resp => {
    console.log(resp.data, "Random nums"); 
})
.catch(err => console.log(err))

let promises = []
Array.from({ length: 4 }, () => {
   promises.push(axios.get(`${apiURL}/5?json`));
})
Promise.all(promises)
.then(data => 
    data.forEach(fact => console.log(fact.data.text)))



