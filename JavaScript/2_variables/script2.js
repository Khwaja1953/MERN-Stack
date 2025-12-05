//primitive datatypes
//primitive contains 7 types of data
//number
let num = 5;
console.log(num);
console.log("the type of num variable is ",typeof num);
num = 5.5;
console.log("the type of num variable is ",typeof num);


//string
let str = "sofia";
let str2 = 'sofia';
// let str3 = "sofia';
console.log("the type of str variable is: ",typeof str);

//boolean
let bol = false;
console.log("The type of variable bol is",typeof bol);

//undefined
let un;
console.log("The type of variable un is : ",typeof un);
un = 53;
console.log("The type of variable un is : ",typeof un);

//test
let number = '45';
console.log("The type of number is :",typeof number);
let x = "";
console.log("The type of x is : ",typeof x, " and value is ",x);
let y = "true"


x = "hi";
y = "hi";
console.log(x==y);


//symbol
let a = Symbol("hi");
let b = Symbol("hi");
console.log(a==b);

//null
let  abc = null;
console.log("THe type of abc variable is ",typeof abc);


//bigint
let xyz = 1249345454;
console.log("The type of variable xyz is:",typeof xyz);

//non primitive datatypes
//objects
const obj = {
    name: "sofia",
    address: "srinagar",
    marks: 5,
    live: false,
}
console.log("The type of variable obj is:",typeof obj);
console.log("My name is",obj.name," and i live in",obj.address);