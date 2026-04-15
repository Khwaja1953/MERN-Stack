class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    info(){
        return `the name of this person is ${this.name} and his/her age is ${this.age}`;
    }
    tax(income){
        let tax = income*18/100;
        return `you have to pay ${tax} amount of tax on income of ${income}`
    }
}

let p = new Person("saijdeep",20);
console.log(p.info())
console.log(p.tax(2000));

class Payment{
    pay(amount){
        if (amount < 1000){
            this._payWithUPI()
        }
        else{
            this._payWithCard()
        }

    }
    _payWithUPI(){
        console.log("processing amount with upi")
    }
    _payWithCard(){
        console.log("processing amount with card")
    }
}
let pay =new Payment();
pay.pay(150);