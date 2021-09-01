var inputButton = document.querySelector("#translate-btn");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#translate-text");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error){
    console.log("Error occured", error);
}

function clickEventHandler(){
    var textInput = inputText.value;

    fetch(translationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}

inputButton.addEventListener("click", clickEventHandler);