/* var car=200000
console.log(car) */
/* console.log(car)
var car=200000 */
/* console.log(car)  //block quote examples
let car=20000 */
/*  var x=1
for(var x=0;x<10;x++){
    console.log(x)
}
console.log("x= "+x)  */

/* var x=1;
for(let x=1;x<10;x++){
    console.log(x)
}
console.log("x= "+x) 
 */
//block quote is used to retain its value after loop completion using let key word


//CONST KEYWORD
/* const discount=10
let discount=20
console.log(discount) */
 
 /* let olduser=true
const discount=10
 if(olduser==true){
     const discount=20
     console.log("olduser discount ="+discount)
 }
 console.log("discount ="+discount)  */



 //Arrow functions
 let multiply=(x,y)=>{
    return x*y;
}
console.log(multiply(4,8))   
/*  let generateemail=(name,message)=>{
     let emailmessage="hi"+" "+ +name+  "\n"+ "hello i am new to coding"+message+ "raghav"
     return(emailmessage)
 }
 console.log(generateemail("akhil","namaste")) */


 //Default parameters
 function multiply(x,y){
     console.log(x)
     console.log(y)
     return(x*y)
 }
 console.log(multiply(4,8))
 //es6 modification
 /*  let multiply=(x,y)=>{
     console.log(x)
     console.log(y)
     return x*y;
 } 
 console.log(multiply(4,8)) */