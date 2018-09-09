/* let janaseena=[]
let peoplepartylist=(...people)=>{
    let newlist=people
    console.log(newlist)
    janaseena=janaseena.concat(newlist)
    console.log(janaseena)
    return janaseena



}
peoplepartylist("a","b","c") */
//peoplepartylist("d","e","f")



//spread paramaters
/*here in rest paramaters csv(camma separeted values) n no of inputs and 
we are converting into array and in the case of 
spread parametes the idea is totally opposie it converts array passed as values
comma separeted values */
/* function mul(x,y,z){
  console.log(x)
  console.log(y)
  console.log(z)
  return x+y+z
}
const numbers=[1,2,3]
console.log((mul(...numbers))) */


//another examp
/* let a=[23,42]
let b=[66,98]
let c=[...a,...b]
console.log(c) */
//FUNCTIONS WITHIN OBJECTS
/* let actualPrice=50000
let discountPer=10
let priceofProduct={
  actualPrice,
  discountPer,
  calFinalPrice(){
  return actualPrice-(actualPrice*discountPer)/100

}
}
console.log(actualPrice)
console.log(priceofProduct.calFinalPrice()) */

//playing with key-value

/* let key="somekey"
let value="somevalue"
let finalvalue={ 
  [key]:value
}
console.log(finalvalue) */
// replace the key [] in finalvalue array and observe changes in behaviour of key

/*  let firstname="Akhil"
let lastname="raghav"
function finalvalue(){
  return(firstname+" "+lastname)

}
console.log(finalvalue()) */

/* 
TEMPLATE LITERAL
/ let a=`A paragraph (from the Ancient Greek παράγραφος paragraphos,
  to write beside or written beside) is a self-contained unit of a
 discourse in writing dealing with a particular point or idea. 
 A paragraph consists of one or more sentences.[1] 
 Though not required by the syntax of any language, 
 paragraphs are usu
 ally an expected part of formal writing, used to 
 organize longer prose.` */console.log(a) */ */
/* let b =`this is me`
let c=`this is also me`
let d=`${b} and ${c}`
console.log(d) */
/* function emailmessage(firstname,lastname,message){
  let generateemail=`hi ${firstname+""+lastname} we are here to invite you for ${message} 
  copyright@edwisor2018`
  return generateemail
}
let finalmessage=emailmessage("Akhil","raghav" ,"live training")
console.log(finalmessage) */
/* function emailmessage(number,numbers){
  let generateemail=`hi ${number} we are here to invite you for ${numbers} 
  copyright@edwisor2018`
  return generateemail
}
let finalmessage=emailmessage(25 ,405)
console.log(finalmessage) */
// for of loop
/* var customers=[{
  cstname:"Akhil",
  cstid:001
},{
  cstname:"Raghav",
  cstid:  002
}
]
for(x in customers)
console.log(customers[x]) */
//for of loop doesnt require any index as before we used like[x]
var customers=[{
  cstname:"Akhil",
  cstid:001
},{
  cstname:"Raghav",
  cstid:  002
}
]
for(x of customers)
console.log(x) //its in the case of arrays
 //now we can see in objects 
 //1st in case of for in loops
  let username={
   name:"akhil",
   lastname:"raghav",
   email:"akhil@gm.com"
 }
 for(x in username){
   console.log(x)
   console.log(username[x])
 } 
 //using for of loop 
/*  we cant use for of loops in objects that are highly recomended */