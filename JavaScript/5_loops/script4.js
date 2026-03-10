//for loop
for (let i = 0;i <= 10; i++){
    console.log("Hello world ",i);
}


//while loop
let num = 10;
while(num >= 0){
    console.log(num);
    num--;
    
}
num = 5;
while(num--){
    console.log("hello world",num);
}


num = 0;
while(num != 0){
    console.log("hello");
}

//do while loop
num = 0;
do{
    console.log("hello do while loop");

}while(num != 0);

//for in loop
fullName = "muzamil";
// console.log(fullName[0]);
// for (let i = 0; i<fullName.length;i++){
//     console.log(fullName[i]);
// }

for (let i in fullName){
    console.log(fullName[i]);
}

//for of loop
console.log("for of loop");
for (let i of fullName){
    console.log(i);
}