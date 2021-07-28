var btnTranslated = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#output");
var log = console.log;



function clickHandler(){

outputText.innerText = "Welcome!!  " + inputText.value;
    
   

};
btnTranslated.addEventListener("click", clickHandler)