function add(x,y,z){

    return (x+y+z)
}

function sub(x,y){
    return (x-y)
}

x = add(3,4,6);
y = add(2,3,1);
result = sub(x,y)
console.log(result)


function add2(a,b,c=0){
    console.log(a,b,c);
    return( a+b+c)
}

console.log("sum is ",add2(1,2))
console.log("sum is ",add2(1,2,3))



function evenOdd(num){
    if (num%2===0){
        return square(num)
    }
    else{
        return cube(num)
    }
}
function square(num){
    return num**2
}
function cube(num){
    return num**3
}
console.log(evenOdd(6))

function nums(num){
    console.log(num);
    if (num <= 0){
        return 1
    }
    else{
        
        nums(num-1)
    }
}

nums(10)