function checkEven(x){
    let num = x;
    if (num % 2 == 0){
        return ()=>{
            num = num**2;
            return num;
        }
    }
    return ()=>{
        return `${num} is not even number...`
    }
}
// let fun1 = checkEven(10);
// console.log(fun1());
// console.log(fun1());
// let fun2 = checkEven(5);
// console.log(fun2());
// console.log(fun2())

function dataHiding(x){
    let salary = x;
    return {
        info(){
            console.log(`the salary of this person is ${salary}`);
        }
    }
}

let data = dataHiding(1000);
data.info();
console.log(data.salary);
data.salary = 2000;
console.log(data.salary)
data.info();