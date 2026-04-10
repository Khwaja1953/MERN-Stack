class Student{
    institute = "ils"
    constructor(name, address){
        this.fullName = name;
        this.address = address;
    }
    info(){//getter
        console.log(`my name is ${this.fullName} and i live at ${this.address} and i studey at ${this.institute}`)
    }
    setDetails(name, address){//setter
        this.fullName = name;
        this.address = address;
    }

}
let fullName = "muzamil"
function info(){
    console.log("my name is ",fullName);
}

let std1 = new Student();
std1.setDetails("saijdeep kour","srinagar");
console.log(std1.fullName);
console.log(std1.address);
std1.info()
let std2 = new Student();
std2.setDetails("muzamil","handwara");
std2.info()

let std3 = new Student("khwaja","srinagar");
std3.info()