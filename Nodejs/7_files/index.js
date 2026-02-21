const fs = require('fs')
//synch
// fs.writeFileSync('./test.txt',"ok world")


//async
// fs.writeFile('./test.txt',"hello world",()=>{})


///reading file synchronusly
console.log("before reading a file.....")
const data = fs.readFileSync('./test.txt','utf-8')
console.log(data)
console.log("after reading file...")



//reading file async
console.log("before reading a file.....")
fs.readFile('./test.txt','utf-8',(err, data)=>{
    if(err){
        console.log("something went wrong please try again")
    }
    else{
        console.log(data)
    }
})

console.log("after reading file...")



//append file asyn
fs.appendFile('test.txt','\nthis is my new line in file by append mode',()=>{})


// fs.copyFileSync('./test.txt','./newfile.txt')

// fs.unlinkSync('./newfile.txt')

fs.mkdirSync('./images')