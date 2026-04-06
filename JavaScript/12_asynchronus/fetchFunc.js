fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: "saijdeep"})
    
})
.then(res => res.json())
.then(res => {console.log(res)})
.catch(err => {console.log(err)})


async function fetchData(url) {
    let res = await fetch(url,{
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok){
        res = await res.json();
        console.log(res[0]);
    }
    else{
        console.log("something went wrong...")
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts")