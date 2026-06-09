const fs = require('fs');
const newFile = fs.writeFileSync("./test.txt","Hello world");

// fs.writeFile("./data.txt","this is async file method",(err)=>{
// if (err){
//     console.log(err)
// }
// else{
//     console.log("file written successfully...")
// }
// })

// fs.writeFileSync("./data.txt","this is overwritten by write methods")


const data = fs.readFileSync('./test.txt','utf-8');
console.log(data);

fs.readFile('./data.txt','utf-8',(err, data)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log(data);
    }
});


fs.appendFile("./info1.txt","\nName: Saijdeep",(err)=>{
if(err){
    console.log(err)
}
else{
    console.log("file appended successfully")
}
})

fs.unlink('./info1.txt',(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("file deleted successfully")
    }
})

// fs.unlinkSync('./info1.txt')
// console.log("file deleted successfully")

fs.copyFile("./info.txt","./new.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("copy success")
    }
})

fs.copyFileSync("./test.txt","test1.txt");


fs.mkdir("./newFolder/images",{recursive: true},(err)=>{
    console.log(err)
})

fs.mkdirSync("./videos")

console.log("End of program...")

