const num = 53;
let isPrime = true

for (let i = 2;i<=num/2  ;i++){
    if (num%i === 0){
        isPrime = false
        break
    }
}

if (isPrime === true){
    console.log(num," is prime number")
}
else{
    console.log(num," is not  a prime number")
}
