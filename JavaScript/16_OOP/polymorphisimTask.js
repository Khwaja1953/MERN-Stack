class Circle{
    
    area(radius){
        return 22/7*radius**2
    }
}
class Square extends Circle {
    
    area(side){
        return side**2
    }
}
let c = new Circle();
let s = new Square();
console.log(c.area(4));
console.log(s.area(4));

let arr = [1,2,3];
let str = "Hello";
console.log(arr.length)
console.log(str.length)