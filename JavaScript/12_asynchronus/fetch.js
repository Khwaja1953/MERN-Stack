function getData(){
    fetch("http://localhost:5000/api",{
        method: "GET"
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
getData()
const name = "ishfaq"
async function sendData(name){
    const data = {name:"ishfaq"}
     const response = await fetch("http://localhost:5000/api",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
     });
     const result = await response.json()
     console.log(result)
     
}

sendData("ishfaq")

function updateData(){
    fetch("http://localhost:5000/api",
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: "farhan"})
        }
    ).then(response => response.json()).then(response => console.log(response))
}
updateData()

function deleteData(){
    fetch("http://localhost:5000/api",{
        method: "DELETE",
         headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: "farhan"})
    })
    .then(response => response.json()).then(response => console.log(response))
}
deleteData()