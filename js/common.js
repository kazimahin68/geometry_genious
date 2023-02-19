
const elements = document.querySelectorAll('.ga-background-color');

function changeColor(event) {
  event.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

elements.forEach(element => {
  element.addEventListener('mouseenter', changeColor);
});

function getInputValueById(inputFieldId) {
    const element = document.getElementById(inputFieldId);
    const elementValueString = element.value;
    const value = parseFloat(elementValueString);
    element.value = '';
    return value;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}