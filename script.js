let css = document.querySelector("h3")
let input1  = document.querySelector("[data-dom=input1]");
let input2  = document.querySelector("[data-dom=input2]");
let body = document.querySelector("[data-dom=gradient]");

function setGradient(){
    body.style.background =
    "linear-gradient(to right," 
    +input1.value
    +","
    +input2.value 
    +")";
}

input1.addEventListener("input", setGradient)

input2.addEventListener("input", setGradient)
   