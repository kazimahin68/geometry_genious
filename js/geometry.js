
let count = 0;

document.getElementById('triangle-btn').addEventListener('click', function () {
    const name = 'Triangle';
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaDisplay = triangleArea;
    count +=1;
    displayArea(count, name, triangleAreaDisplay);
});
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const name = 'Rectangle';
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaDisplay = rectangleArea;
    count +=1;
    displayArea(count, name, rectangleAreaDisplay);
});

function displayArea(serialNo, name, totalArea) {

    const displayRow = document.getElementById('area-display');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serialNo}. </td>
        <td>${name}</td>
        <td>${totalArea} cm<sup>2</sup></td>
        <td><button class="btn btn-primary">
        Convert to m<sup>2</sup></button></td>
    
    `
    displayRow.appendChild(tr);
}
