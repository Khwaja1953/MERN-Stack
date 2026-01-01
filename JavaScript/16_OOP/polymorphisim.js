class Animal{
    speak(name){
        console.log("Animal speaks")
    }
    walk(){
        console.log("animal walks")
    }
}
a = new Animal()
// a.speak()
// a.walk()

class Dog extends Animal{
    speak(){
        console.log("dog barks")
    }
    // speak(name){
    //     console.log(name," barks")
    // }

}
d = new Dog()
d.speak("tommy")