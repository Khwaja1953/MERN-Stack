let num = 23;
let isPrime = true;
for (let i = 2; i <= parseInt(num/2); i++){
    if (num%i==0){
        isPrime = false;
        break;
    }
}

if( isPrime){
    console.log("this number is prime");

}else{
    console.log("this number is not prime");
}