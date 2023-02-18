
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
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const name = 'Parallelogram';
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    const parallelogramDisplayArea = parallelogramArea;
    count +=1;
    displayArea(count, name, parallelogramDisplayArea);
});
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const name = 'Rhombus';
    const rhombusDiagonalsOne = getInputValueById('rhombus-diagonals-one');
    const rhombusDiagonalsTwo = getInputValueById('rhombus-diagonals-two');
    const rhombusArea = 0.5 * rhombusDiagonalsOne * rhombusDiagonalsTwo;
    const rhombusAreaDisplay = rhombusArea;
    count +=1;
    displayArea(count, name, rhombusAreaDisplay);
});
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const name = 'Pentagon';
    const pentagonSide = getInputValueById('pentagon-side');
    const pentagonApothem = getInputValueById('pentagon-apothem');
    const pentagonArea = 0.5 * pentagonSide * pentagonApothem;
    const pentagonAreaDisplay = pentagonArea;
    count +=1;
    displayArea(count, name, pentagonAreaDisplay);
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
