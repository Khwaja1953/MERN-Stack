// greet()
// function greet(){
//     console.log("Hello world");
// }
// let x = 10;
// console.log(x)
// function greet(){
//     console.log("Hi world")
// }
// x = 15
// console.log(x)
// greet()
class Animal{
    sound(){
        console.log("Animal makes sound...")
    }
}
class Dog extends Animal{
    sound(){
        console.log("Dog barks")
    }
}
class Lion extends  Animal{
    sound(){
        console.log("Lions roars")
    }    
}
let a = new Animal();
a.sound()
let d = new Dog();
d.sound()
let l = new Lion();
l.sound()