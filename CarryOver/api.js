class Api {
//     constructor(name) {
//         this.name = name

  async function getApi() {

    const response = await fetch("https://api.tvmaze.com/search/people?q=Laurent%20Van%20Wetter")
      
    const obj = await response.json()
    
  return obj;
}

(async() => {
let x = await getApi();
console.log(x);
})()



// module.exports = Actor;