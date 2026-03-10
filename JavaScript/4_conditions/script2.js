let age = 13;
if (age >=18){
    console.log("You are eligible for driving manual car");
}
else if(age >= 16){
    console.log("you can drive automatic car");
}
else if( age >= 10){
    console.log("you can drive cycle");
}
else if(age >= 5){
    console.log("you can drive toys")
}
else{
    console.log("You are not eligible for driving")
}


//nested if else
if (age >= 18){
    console.log("You are eligible for driving manual car");
}
else{
    if (age >= 16 && age <18){
        console.log("you can drive automatic car");
    }
    else{
        if ( age >= 10){
            console.log("you can drive cycle");
        }
        else{
            if (age >= 5){
                console.log("you can drive toys");
            }
            else{
                console.log("you can not drive car")
            }
        }
    }
}