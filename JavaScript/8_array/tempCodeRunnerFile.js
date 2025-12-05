console.log("Nested array")
let items = ["apple","banana",56,["cat",'rat','bat'],"orange",["srinagar","delhi",]]
for (let item of items){
    if (typeof(item) == 'object'){
        for (let inneritem of item){
            console.log(inneritem)
        }
    }
    else{

        console.log(item)
    }
    
}