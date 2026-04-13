class Animal {
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(`${this.name} makes sound....`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed
    }
    sound(){
        console.log(`${this.name} makes sound.....which is of breed ${this.breed}`)
        super.sound()
    }
}

let a = new Animal("Dog1");
let d = new Dog("Dog2","germen");
d.sound()
a.sound()
// d.sound()
// d.color()
// a.color()
// let name = 'saijdeep'
// let name = "muzamil"