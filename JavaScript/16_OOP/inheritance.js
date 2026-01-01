class Animal{
    speak(name){
        console.log(name," speaks")
    }
    walk(){
        console.log('Animal walks')
    }
}
a1 = new Animal()
// a1.speak()
// a1.walk()
class Dog extends Animal{
    bark(){
        console.log("dog barks")
    }
}
d1 = new Dog()
d1.speak('dog')
d1.walk()
d1.bark()
// a1.bark()