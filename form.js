 function validform(){
   //user name//
 {let number=document.getElementById('username').value;
 let p=/[a-zA-Z]/;
 if(number==""){
    document.getElementById('user').innerHTML ="please enter name"
 }
 else if(!p.test(number)){
    document.getElementById('user').innerHTML ="please enter valid name"
 }
else{
    document.getElementById('user').innerHTML ="correct"
}}
//password//
{let pa=document.getElementById('password').value;
let pas= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(pa==""){
   document.getElementById('pass').innerHTML ="please enter password"
}
else if(!pas.test(pa)){
   document.getElementById('pass').innerHTML ="please enter valid password"
}
else{
   document.getElementById('pass').innerHTML ="correct"
}}

// confirm password//
{let cpa=document.getElementById('cpassword').value;
let pa=document.getElementById('password').value;
if(cpa==""){
   document.getElementById('pass1').innerHTML ="please enter password"
}
else if(pa!=cpa){
   document.getElementById('pass1').innerHTML ="please enter valid password"
}
else{
   document.getElementById('pass1').innerHTML ="correct"
}}

//email//
{
   let mail=document.getElementById('email').value;
   let ma = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(mail==""){
      document.getElementById('mail').innerHTML ="please enter mail"
   }
   else if(!ma.test(mail)){
      document.getElementById('mail').innerHTML ="please enter valid mail"
   }
  else{
      document.getElementById('mail').innerHTML ="correct"
}
}
//mobile number//
{
   let phone=document.getElementById('mobile').value;
   let ph =  /^\d{10}/;
   if(phone==""){
      document.getElementById('mnumber').innerHTML ="please enter mobile number"
   }
   else if(!ph.test(phone)){
      document.getElementById('mnumber').innerHTML ="please enter valid mobile number"
   }
  else{
      document.getElementById('mnumber').innerHTML ="correct"
}
}

//gender//
{
   let mgender=document.getElementById('mgender');
   let fgender=document.getElementById('fgender');
   if(!mgender.checked && !fgender.checked){
   
      document.getElementById('radioerr').innerHTML ="wrong"
   }
  else{ document.getElementById('radioerr').innerHTML =""}

}

//address//
{
   let phone=document.getElementById('address').value;
   let ph =  /^[a-zA-Z0-9\s\,\''\-]*$/;
   if(phone==""){
      document.getElementById('add').innerHTML ="please enter address"
   }
   else if(!ph.test(phone)){
      document.getElementById('add').innerHTML ="please enter valid address"
   }
  else{
      document.getElementById('add').innerHTML ="correct"
}
}
//select country//

{
   let select=document.getElementById('sel').value;
   if(select=="select"){
   document.getElementById('dropdown err').innerHTML ="please select country"}
   else{
      document.getElementById('dropdown err').innerHTML =""
   }
}
//select state//
{
   let select=document.getElementById('drop').value;
   if(select=="select"){
   document.getElementById('dropdown').innerHTML ="please select state"}
else{ document.getElementById('dropdown').innerHTML =""}
} 
//check box//
let check=document.getElementById("check")
if(!check.checked){
   document.getElementById('box').innerHTML ="please select"
}
else{
document.getElementById('box').innerHTML =""}

}


    