var btnTranslated = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#output");
var log = console.log;

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getServerTranslation(input){

    return serverURL + "?" + "text=" + input;
}

function errorHandler(){
    log("Something error", error);
    alert("Something broke Please try it later");
}

function clickHandler() {

var inputYoda = inputText.value;


   fetch(getServerTranslation(inputYoda))
     .then(response => response.json())
     .then(json => {
         var converted = json.contents.translated;
         outputText.innerText = converted;
    })
    .catch(errorHandler)
   

};
btnTranslated.addEventListener("click", clickHandler)