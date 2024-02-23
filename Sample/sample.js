var heading = document.createElement("h1");

function create(){
    heading.innerHTML = "Hello Shivin";
    heading.style.color ="red";
    document.body.appendChild(heading);
}

function remove (){
    heading.remove();
}