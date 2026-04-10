class Animal {
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(`${this.name} makes sound.....`)
    }
}

class Dog extends Animal{
    constructor(name){
        super().name = name
    }
    color(){
        console.log("dogs are red")
    }
    
}

let a = new Animal("Dog1");
let d = new Dog("Dog2");
a.sound()
d.sound()
d.color()
// a.color()