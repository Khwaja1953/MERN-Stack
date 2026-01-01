async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
  console.log("middle")
  const res = new Promise(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(resp => resp.json()).then(resp => console.log(resp));
    console.log("end")
  })
}

fetchData();
console.log("hello world")


const data = async ()=>{
    return "hello world"
}
data().then(data => console.log(data))
console.log("ending..")