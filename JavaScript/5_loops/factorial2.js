// 5! = 5 x 4 x 3 x 2 x 1

const num = 6;
let fact = 1;
for (let i = num; i > 0; i--){
    fact = fact *  i;

}
console.log(fact);

//armstrong number
//153 = 1**3 + 5**3 + 3**3
console.log(String(153).length)