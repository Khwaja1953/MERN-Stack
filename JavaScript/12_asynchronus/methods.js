function fetchData(){
    fetch("http://localhost:5000?age=25&name=saijdeep",{
        method: "get",
        headers: {"Content-Type":"application/json"}
    })
    .then(res => res.json())
    .then(res =>{console.log(res.message)})
    .catch(err =>{console.log(err)});
}
fetchData();

function saveData(name,address){
    fetch("http://localhost:5000",{
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name,address})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
    .catch(err=>{console.error(err)})
}

saveData("saijdeep","srinagar");

function changeData(name, newAddress){
     fetch("http://localhost:5000",{
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name,address:newAddress})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
    .catch(err=>{console.error(err)})
}

changeData("saijdeep","mehjoor nagar")


const deleteData = (url,name)=>{
    fetch(url,{
        method: "delete",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

deleteData("http://localhost:5000/","saijdeep")


const sendingFile = (url,name,profile)=>{
    const data = new FormData();
    data.append("name",name);
    data.append("profile",profile)

    fetch(url,{
        method: "post",
        body: data
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

}

sendingFile("http://localhost:5000/user","saijdeep","./pexels-ishahidsultan-31088463.jpg")