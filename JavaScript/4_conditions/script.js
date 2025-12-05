let age = 17;
if (age >= 18) {
    console.log("you can vote....")
}
else {
    console.log("you can not vote...")

}

let num = 5;
if (num % 2 === 0) {
    console.log("number is even");
}
else {
    console.log("number is odd");
}

age = 1;
// ladder if
if (age >= 18 && age <= 60){
    console.log("you can drive car...")
}
else if (age >= 12 && age <18){
    console.log("you can drive bike")
}
else if (age >= 5 && age < 12){
    console.log("you can drive cycle...")
}
else{
    console.log("you can not drive ...")
}


age = 20;
//nested and ladder if
if (age >= 18){
    if(age <= 60){
        console.log("you can drive car....");
       
    }
    else{
        console.log("you can not drive car because you are over age ")
    }
}
else if (age >= 12){
    console.log("you can drive bike")
}
else if (age >= 5){
    console.log("you can drive cycle....")
}
else{
    if(age > 0){
        console.log("you can not drive ")
    }
    else{
        console.log("you have entered wrong age")
    }
}


//task create a program which will assign a grde to a 
// student based on his marks e.g. >95 A++ >90 A+
// 85 A 80 B+ 75 B  70 C+ 60 C 50 D < 40 fails
num = 11;
if (num%2){
    console.log("num is odd")
}
else{
    console.log("num is even")
}



//create a program that will tell me what can i drive 
//e.g if my age is 20 it should tell me you can drive car you can dirve bike you can drive cycle
// if my age is 16 it should tell me you can drive bike  you can drive cycle
// if my age is 8 it shoul tell me you can drive cycle 

if (age > 18){
    console.log("you can drive car")
}
if(age > 16){
    console.log("you can drive bike")
}

age = 23;
switch (age){
    case 22:
        console.log("you can drive bus");
        break;
    case 18: 
        console.log("you can drive car");
        break;
    case 16:
        console.log("you can drive bike");
        break;
    default:
        console.log("you can not drive");
}

