const flatArray = (arr)=>{
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            flatArray(arr[i]);
        }
        else{
            flattedArray.push(arr[i]);
        }
    }
}

const arr = [1,2,[3,4,[5,7,8,[6,2]],5],3,4];
var flattedArray = [];
flatArray(arr);
console.log(flattedArray);
