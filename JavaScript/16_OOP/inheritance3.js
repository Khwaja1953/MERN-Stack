//multi level inheritance
class A{
    constructor(name){
        this.name = name;
    }
    info(){
        console.log(`${name} method is called`);
    }
}
class B extends A {
    constructor(name,address){
        super(name);
        this.address = address;
    }
    info(){
        console.log(`${this.name} method is called an address is ${this.address}`);
    }
}
class C extends A {
    constructor(name,age){
        super(name);
        this.age = age;
    }
    info(){
console.log(`${this.name} method is called and age is ${this.age}`);    }
}

let c = new C('abc',20);
let b = new B("xyz", "sgr");
c.info();
b.info();

//class Person(name,phone,age) , Employee(...,designation,salary);