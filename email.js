/* var generateEmail=function(name,message){
  var emailx="hi"+name+ "\n"+"welcome to edwisor.com"
  return emailx
}
var someEmail=generateEmail("Akhil","how are you")
alert(someEmail) */



var users=[{
    "name":"akhil",
    "emailid":"akhil@gmail.com",
    "password":"1234"
},{
    "name":"raghav",
    "emailid":"raghav@gmail.com",
    "password":"5678"
},{
    "name":"guptha",
    "emailid":"guptha@gmail.com",
    "password":"9012"
}
]
let checklogin=function(email,password,allusers){
  let  Userfound=false
  let isPassword=false
  //for-each loop
  const Message={                 //Creating Template Literal which gives output if user successed in login  
	MessageForUser(){
		return `Hello ! \n
		You are successfully logged with ${email} email Id  `
	}
}

  for(currentuser in allusers){
      console.log(allusers[currentuser])
      if(allusers[currentuser]["emailid"]== email){
          console.log(email)
      if(allusers[currentuser]["password"]== password){
        console.log(password)
          Userfound=true
          isPassword=true
          break

      }else{//1stif
          Userfound=true
          isPassword=false
          break
        }

    }else{
          Userfound=false
        
        }
       
}
 
     
    if(Userfound==true && isPassword==true){
        alert("you're logged in ")
    }
    else if(Userfound==true && isPassword==false){
        alert("password incorrect ")
    }
    else
        alert("user not found")


}

let email = prompt("enter your email")
let password=prompt("enter your password")
checklogin(email,password,users)