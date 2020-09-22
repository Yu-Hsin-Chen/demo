function check()
{
   var a = document.getElementsByName("select");
   for (var i=0; i<a.length; i++)
   {
       if(a[i].checked&&a[i]==a[2]){ 
	   location.href='./7.htm'
	   alert("答對！");
	   return;
	   }
   }
   alert("您選錯囉！");
   window.location.reload();   
}