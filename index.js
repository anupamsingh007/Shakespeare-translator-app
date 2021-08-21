var input = document.querySelector('#input');
var btn = document.querySelector('#translate');
var output = document.querySelector('#output');
var url = "https://api.funtranslations.com/translate/shakespeare.json"


btn.addEventListener('click', clickHandler)

function clickHandler(event) {
    var typedInput = input.value;
    fetch(getUrl(typedInput)).then(response => response.json()).then(json => {
            var translatedText = json.contents.translated
            output.innerText = translatedText;
        })
        .catch(errorHandler)
};


function getUrl(input) {
    return url + "?" + "text=" + input;
}

function errorHandler(error) {
    alert("server not responding. Try again later")
}