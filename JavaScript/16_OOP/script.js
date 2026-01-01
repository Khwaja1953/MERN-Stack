class Student{
    constructor(name,age,address="handwara",phone="1234"){
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone
    }
    // constructor(){
    //     console.log("i am constructor")
    // }
    info(){
        console.log("the name of this student is ",this.name," and his/her address is ",this.address)
    }
    update(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address
    }
}
obj1 = new Student("abc",20,"xyz")
std1 = new Student("sahil",23,"srg")
console.log(std1.name,obj1.address)
obj1.name = "ishfaq"
console.log(obj1.name)
std1.info()
obj1.update("farhan", 20,"srinagar")
obj1.info()

obj2 = new Student("muzamil",24)
obj2.info()
console.log(std1.phone)