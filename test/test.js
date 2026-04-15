class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound(name) {
    console.log("Bark");
  }
}

class Cat extends Dog {
  makeSound(name,age) {
    console.log("Meow");
  }
}
let d = new Dog();
d.makeSound("abc","sdf")