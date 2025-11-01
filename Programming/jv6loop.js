/* for (let i=0; i<7; i++){
    console.log(i);
} */

/* let arr = [10, 20, 30, 40, 50];
for (let num of arr) {           //--when you don't know length of array
    console.log(num);
} */

/* let i=3;
while (i>0){
    console.log(i);
    i--;
} */



/* //let newarr = arr.map(neww => neww+10);   //--map
let newarr = arr.map(function(neww){
    return neww*20;
}); 
console.log(newarr); */

/* function change (i){
    return i+1;
}
 
let a = arr.map(change);
console.log(a); */


/* let filteredarr = arr.filter(num => num>20)   //--filter
console.log(filteredarr); */

let arr = [10, 20, 30, 40, 50];   
console.log(arr);

let redarr = arr.reduce((sum,current) => sum+current, 0);
console.log(redarr);

let redarr1 = arr.reduce((sum,current) => sum+current, 75);
console.log(redarr1);