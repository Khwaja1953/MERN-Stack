function createBankAccount(name,initbalance){
    let balance = initbalance;
    return {
        name,
        deposite(amount){
            balance += amount
        },
        getBalance(){
            return {name,balance};
        }
    }
}
let account = createBankAccount("khwaja",2000)
account.deposite(1000);
account.deposite(2000);
console.log(account.balance);
console.log(account.getBalance());