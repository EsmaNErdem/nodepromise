// http://numbersapi.com/56?json for JSON
const apiURL = "http://numbersapi.com"
// -----------PROMISE-----------------
// 1
let favNumFact = axios.get(`${apiURL}/36?json`)
favNumFact
.then(resp => {    
    console.log(resp.data.text); 
    return resp
})
.catch(err => console.log(err))

// 2
const randomNum = [20, 29, 34]
let numFacts = axios.get(`${apiURL}/${randomNum}?json`)
numFacts
.then(resp => {
    console.log(resp.data, "Random nums"); 
})
.catch(err => console.log(err))

// 3
Promise.all(Array.from({ length: 4 }, () => {
    return axios.get(`${apiURL}/5?json`)
    })
    )
.then(data => {
    data.forEach(fact => console.log(fact.data.text))
})

// -----------------ASYNC/AWAIT----------
// 1
async function oneLuckyNum(){
    const resp = await axios.get(`${apiURL}/36?json`)
    console.log(resp.data)
}
// 2
async function luckyNums(){
const randomNum = [20, 29, 34]
    const resp = await axios.get(`${apiURL}/${randomNum}?json`)
    console.log(resp.data)
}
// 3
async function fourTimesLucky(){
    const facts = await Promise.all(Array.from({ length: 4 }, () => {
        return axios.get(`${apiURL}/5?json`)
        })
        )
        facts.forEach(fact => console.log(fact.data.text))
    }

oneLuckyNum()
luckyNums()
fourTimesLucky()