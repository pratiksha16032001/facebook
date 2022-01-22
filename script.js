 
 
 var settingsmenu = document.querySelector(".setting-menu");
var darkbtn = document.getElementById("dark-btn");


 function settingsMenuToggle(){
   settingsmenu.classList.toggle("setting-menu-height");
 }
 darkbtn.onclick = function(){
     darkbtn.classList.toggle("dark-btn-on");
     document.body.classList.toggle("dark-theme");

    if(localStorage.setItem("theme","light")== "light")
    {
    localStorage.setItem("theme","dark");
     }
 else
 {
    localStorage.setItem("theme","light");
 }
}



 
 if(localStorage.getItem("theme")=="light")
 {
     darkbtn.classList.remove("dark-btn-on");
     darkbtn.body.classList.remove("dark-theme");
 }
 else if(localStorage.getItem("theme")=="dark")
 {
    darkbtn.classList.add("dark-btn-on");
    darkbtn.body.classList.add("dark-theme");
 }
else
{
 localStorage.setItem("theme","light");
}
