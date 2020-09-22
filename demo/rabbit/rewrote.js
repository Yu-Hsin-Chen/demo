function check()
{
   var a = document.getElementById("answer").value;
   if(a=="25341"){
    location.href='./6.htm'
    alert("答對！");
    return;
   }

  else{
  alert("您答錯囉！");
  window.location.reload();  
   } 
}