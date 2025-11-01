let fruits1 ={
    f1: "apple",
    "f 2": "banana",
    //function add(num1,num2){
    //    return num1+num2;
    //}
    fun : () =>{
        return "hello";
    }
}
let fruits2 ={
    f1: "pineapple",
    "f 2": "orage",
    fun : () =>{
        return "hello";
    }
}

let arr = [fruits1, fruits2]
console.log(arr[1].f1)

console.log(fruits2["f 2"])