!function(){"use strict";!function t(){var e,n,r,a,i;for(e=document.getElementsByTagName("*"),n=0;n<e.length;n++)if(a=(r=e[n]).getAttribute("include-html"))return(i=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(r.innerHTML=this.responseText),404==this.status&&(r.innerHTML="Page not found."),r.removeAttribute("include-html"),t())},i.open("GET",a,!0),void i.send()}(),function(){var t=document.getElementById("btn-mobile");function e(t){"touchstart"===t.type&&t.preventDefault();var e=document.getElementById("nav");e.classList.toggle("active");var n=e.classList.contains("active");t.currentTarget.setAttribute("aria-expanded",n),n?t.currentTarget.setAttribute("aria-label","Fechar Menu"):t.currentTarget.setAttribute("aria-label","Abrir Menu")}t.addEventListener("click",e),t.addEventListener("touchstart",e)}()}();