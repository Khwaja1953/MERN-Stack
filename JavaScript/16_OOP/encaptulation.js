class Bank{
    #balance
    #account
    constructor(name,account,balance){
        this.name = name
        this.#account = account
        this.#balance = balance
    }
    info(){
        console.log(`customer name is ${this.name} and his balance is ${this.#balance} with account number ${this.#account}`)
    }
    update(balance){
        this.#balance += balance
    }
    withdraw(balance){
        this.#balance -= balance
    }
    #updateAccount(account){
        this.#account = account
    }
    updateDetails(name,account,newAccount){
        if (this.#account == account){
            this.#updateAccount(newAccount)
        }
    }
}

c1 = new Bank("muzamil",1234,1000)
c1.info()
c1.balance = 5000
c1.info()
c1.update(4000)
c1.info()
c1.withdraw(3000)
c1.info()
c1.updateDetails("muzamil",1234,10000)
c1.info()
// console.log(c1.name,c1.account,c1.balance)
// c1.#balance = 4000
// console.log(c1.#balance)