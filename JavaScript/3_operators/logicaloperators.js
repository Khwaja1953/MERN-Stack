//logical and
let a = 5;
let b = 3;
let c = 2;
console.log(a>b && b>c);
console.log(a<b && b<c)
console.log(a>b && c>b);
console.log(b>a && b>c);

//logical or
console.log(a>b || b>c);
console.log(a<b || b<c);
console.log(a>b || b<c);
console.log(a<b || b>c);


//logical not
console.log(!(a>b));

a= 3;
b=23;
c=1;
console.log(!(!((a>b && b >c)) || (b<c || a>=b) ))


//bitwise operators 
//bitwise and
a = 5;
b = 4;
c = 2;
console.log(a&b);

//bitwise or
console.log(a|b)
// bitwise not
console.log(~a);

console.log((a&b)&&(b|c));