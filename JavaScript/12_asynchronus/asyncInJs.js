console.log("starting program......")
let data;
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(res => {data = res[0]})
.catch(err => {console.log(err)});

console.log(data);
console.log("after fetch.then method")

async function fetchDataAsync(url) {

    try {
   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    console.log(response[0])
        
    } catch (error) {
        console.log(error)
    }
    
}
fetchDataAsync();
// console.log(data);
console.log("after async function");

function fetchDataSync(url) {

   let response =  fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
        
    
    
}

fetchDataSync()
console.log("after sync function")