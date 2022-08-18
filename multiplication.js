const double = document.getElementById('double');
double.addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    const clickDouble = inputFieldValue * 2;
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = clickDouble;





})
const triple = document.getElementById('triple');
triple.addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    const clickTriple = inputFieldValue * 3;
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = clickTriple;



})
const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = '';
})


