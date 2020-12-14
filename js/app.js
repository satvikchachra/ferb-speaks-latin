const btnTranslate = document.querySelector('#btn-translate');
const txtareaInput = document.querySelector('#txt-input');
const txtOutput = document.querySelector('#txt-output');
const txtDialog = document.querySelector('#dialog-container');

const serverURL = 'https://api.funtranslations.com/translate/ferb-latin.json';

const getTranslationURL = inputText => serverURL + '?' + 'text=' + inputText;

const errorHandler = err => {
    txtDialog.innerHTML = `Oops! An error occured!<br>I do not remember the translation. Try again later.`
    console.log('Error: ', err);
};

const successHandler = () => {
    txtDialog.innerHTML = `Here you go! I translated it for you.<br> Thank me later.`
};

const translateHandler = () => {
    const ipText = txtareaInput.value;

    fetch(getTranslationURL(ipText))
        .then(response => response.json())
        .then(data => {
            const translatedText = data.contents.translated;
            txtOutput.innerText = translatedText;
            successHandler();
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener('click', translateHandler);