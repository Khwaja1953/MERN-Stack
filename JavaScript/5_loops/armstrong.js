let num = 1634;

let original = num;
let len = String(original).length;

let armstrong = 0;
while(num > 0){
    d = num%10
    armstrong = armstrong + d**len;
    num = parseInt(num/10);
}

if (original == armstrong){
    console.log("This is armstrong number");
}
else{
    console.log("This is not armstrong number");
}