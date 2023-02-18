function getInputValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const value = parseFloat(elementValueString);
    element.value = '';
    return value;
}


function buttonCommon() {
    const displayRow = document.getElementById('area-display');
    const button = document.createElement("button");
    button.innerText = 'Convert to m2';
    button.classList.add('btn-primary');
    button.classList.add('btn');
    displayRow.appendChild(button);
    return button;
}