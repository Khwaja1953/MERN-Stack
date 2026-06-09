class Student{
    constructor(name,address, phone){
        this.fullName = name;
        this.address = address;
        this.contact = phone
    }
    info(){
        console.log(`the name of this student is ${this.fullName} and his/her address is ${this.address} and his/her contact is ${this.contact}`)
    }
}
let std1 = new Student("ishfaq","srg",123);
let std2 = new Student("rabia","bandipora",234);
std2.info();
std1.info();
std2.fullName = "rabia syed"
console.log(std2.fullName)