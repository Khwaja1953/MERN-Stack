function outer(){

    let num = 0;
    return function inner(){
        num++
        return num;
    }
}

let count = outer();
console.log(count());
console.log(count());


function Bank(acc, amount){
let balance = amount;
return {
    acc,
    deposite(amount){
        balance += amount;
    },
    withdraw(amount){
        balance -= amount
    },
    info(){
        return `the balance for user ${this.acc} is ${balance}`
    }
}
}

let user1 = Bank(1234,1000);
console.log(user1.info());
user1.withdraw(500)
console.log(user1.info());
user1.deposite(1000);
console.log(user1.info());
// console.log(user1.balance)
// user1.balance = 5000;
console.log(user1.info());



function marks(name,section,marks){
    let score = marks;
    return {
        name: name,
        section: section,
        info (){
            console.log(`the marks for student ${this.name} is ${score} `)
        },
        updateMarks(marks){
            score = marks
        }
    }
}

let std1 = marks("saijdeep","A",80);
std1.info();
std1.updateMarks(90);
std1.info();
console.log(std1.marks,std1.score)