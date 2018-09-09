let users=[{
    "name":"akhil",
    "emailid":"akhil@gmail.com",
    "password":"1234"
},{
    "name":"raghav",
    "emailid":"raghav@gmail.com",
    "password":"5678"
},{
    "name":"guptha",
    "email":"guptha@gmail.com",
    "password":"9012"
}]
const checklogin=function(email,password,allusers){
 let message={
    messageuser(){
            
        return `hello ${email} found`
    }
 }

   let isUSerfound=false
   let isPassword= false

   for(x in allusers){
       console.log(allusers[x])
     if(allusers[x][`emailid`]==email)  {
     if(allusers[x][`password`]==password)  {
        isUSerfound=true
        isPassword=true
        break
   }
   else  {
    isUSerfound=true
    isPassword=false
    break
   }
}

     
   else {
    
    isPassword
   }
}
   if(isUSerfound==true&&isPassword==true){
       console.log(message.messageuser())
   }
   else if(isUSerfound==true||isPassword==false){
    console.log(`password incorrect`)
   }
   else
    console.log(`username incorrect`)



}

 let email=prompt(`enter the email`)
 let password=prompt(`enter the password`)
 checklogin(email,password,users)
// Arrow function
