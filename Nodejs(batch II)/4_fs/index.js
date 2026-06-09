// const fs = require("fs");
const fs = require("fs").promises;


// fs.readFile("./data.txt","utf-8",(err,data)=>{
//     console.log(data)
//     fs.appendFile("./data.txt","\nthis is new line",()=>{

//         fs.readFile("./data.txt","utf-8",(err,data)=>{
//             console.log(data)
//         });
//     });
// })


// const data = fs.readFile("./data.txt","utf-8");
// data.then(data=>{console.log(data)})
// .catch(err=>{console.log(err)});

// fs.appendFile("./data.txt","this is another line using promises");

// fs.readFile("./data.txt","utf-8").then(data=>{console.log(data)});

async function reading() {
    const data = await fs.readFile("./data.txt","utf-8");
    console.log(data);
    await fs.appendFile("./data.txt","this is await method");
    console.log("file appended successfully..");
    const data1 = await fs.readFile("./data.txt","utf-8");
    console.log(data1)
}
reading();