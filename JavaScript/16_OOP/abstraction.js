class Abc{
    #factorial(n){
        if (n<=1){
            return 1
        }
        return n *this.#factorial(n-1)
    }
    info(n){
        return this.#factorial(n)
    }
}

obj1 = new Abc()
x = obj1.info(5)
console.log(x)


// create a student class which accepts details at run time then create methods to show details 