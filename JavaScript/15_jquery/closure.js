function outer(){
    let abc = "i am outer varialbe";
    function inner(){
        console.log(abc);
        abc = "updated...."
    }
    return inner;
}

func = outer()
console.log(func)
func()
func()

let x = 5;
function printx(){
    console.log(x)
}
function test(){
    let x = 10;
    printx()
}
test()