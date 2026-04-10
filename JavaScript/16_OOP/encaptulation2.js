class Bank{
    #account;
    #amount;
    constructor(account,amount){
        this.#account = account;
        this.#amount = amount;
    }

    withdraw(amount){
        this.#amount -= amount
    }
    deposite(amount){
        this.#amount += amount;
    }
    info(){
        console.log(`your account number is ${this.#account} and your amount is ${this.#amount}`)
    }
}

let acc1 = new Bank(123,1000);
console.log(acc1.amount);
// acc1.amount = 2000;
// console.log(acc1.amount)
acc1.info()
acc1.deposite(500);
acc1.info()
acc1.withdraw(1000);
acc1.info()