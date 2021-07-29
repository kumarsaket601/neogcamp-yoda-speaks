var btnTranslated = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getServerTranslation(input){

    return serverURL + "?" + "text=" + input
};

function errorHandler(error){
    log("Something error", error);
    alert("Something broke Please try it later");
}

function clickHandler() {

    var inputYoda = textInput.value;


   fetch(getServerTranslation(inputYoda))
         .then(response => response.json())
         .then(json => {
         var convertedText = json.contents.translated;
         outputText.innerText = convertedText;
    })
    .catch(errorHandler)
   

};
btnTranslated.addEventListener("click",clickHandler)