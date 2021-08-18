var inputText=document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn");
var outputDiv = document.querySelector("#output-txt");

var serverURL = ""

function getTranlationURL(input) {
    return serverURL + "?" + "text=" + input

}

function errorHandler(error){
console.log("Error Ocuured", error);
alert("Something went wrong plaese try again later")
}

function clickHandler() { 
var txtInput= inputText.value;

fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.tranlated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler);