
let x=document.getElementById("time")

function reload() {
    let Y= new Date();
    x.innerHTML="<h1>"+Y+"</h1>"; 
}

setInterval(reload,1000)






