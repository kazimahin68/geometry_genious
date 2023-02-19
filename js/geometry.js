document.getElementById('blogs-btn').addEventListener('click', function(){
    window.location.href = 'blogs.html';
});

let count = 0;

document.getElementById('triangle-btn').addEventListener('click', function () {
    const name = 'Triangle';
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');
    if (triangleBase === ' ' || triangleBase === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(triangleBase) || isNaN(triangleHeight)) {
        window.alert("Please Input Number Value");
    }
    else {
        const triangleArea = 0.5 * triangleBase * triangleHeight;
        const triangleAreaDisplay = triangleArea.toFixed(2);
        count += 1;
        displayArea(count, name, triangleAreaDisplay);
    }
});
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const name = 'Rectangle';
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');
    if (rectangleWidth === ' ' || rectangleLength === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
        window.alert("Please Input Number Value");
    }
    else {
        const rectangleArea = rectangleWidth * rectangleLength;
        const rectangleAreaDisplay = rectangleArea.toFixed(2);
        count += 1;
        displayArea(count, name, rectangleAreaDisplay);
    }
});
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const name = 'Parallelogram';
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    if (parallelogramBase === ' ' || parallelogramHeight === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
        window.alert("Please Input Number Value");
    }
    else {
        const parallelogramArea = parallelogramBase * parallelogramHeight;
        const parallelogramDisplayArea = parallelogramArea.toFixed(2);
        count += 1;
        displayArea(count, name, parallelogramDisplayArea);
    }
});
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const name = 'Rhombus';
    const rhombusDiagonalsOne = getInputValueById('rhombus-diagonals-one');
    const rhombusDiagonalsTwo = getInputValueById('rhombus-diagonals-two');
    if (rhombusDiagonalsOne === ' ' || rhombusDiagonalsTwo === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(rhombusDiagonalsOne) || isNaN(rhombusDiagonalsTwo)) {
        window.alert("Please Input Number Value");
    }
    else {
        const rhombusArea = 0.5 * rhombusDiagonalsOne * rhombusDiagonalsTwo;
        const rhombusAreaDisplay = rhombusArea.toFixed(2);
        count += 1;
        displayArea(count, name, rhombusAreaDisplay);
    }
});
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const name = 'Pentagon';
    const pentagonSide = getInputValueById('pentagon-side');
    const pentagonApothem = getInputValueById('pentagon-apothem');
    if (pentagonSide === ' ' || pentagonApothem === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(pentagonSide) || isNaN(pentagonApothem)) {
        window.alert("Please Input Number Value");
    }
    else {
        const pentagonArea = 0.5 * pentagonSide * pentagonApothem;
        const pentagonAreaDisplay = pentagonArea.toFixed(2);
        count += 1;
        displayArea(count, name, pentagonAreaDisplay);
    }
});
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const name = 'Ellipse';
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseB = getInputValueById('ellipse-b');
    if (ellipseA === ' ' || ellipseB === ' ') {
        window.alert("Please Input Value");
    }
    else if (isNaN(ellipseA) || isNaN(ellipseB)) {
        window.alert("Please Input Number Value");
    }
    else{
        const ellipseArea = 3.1416 * ellipseA * ellipseB;
        const ellipseAreaDisplay = ellipseArea.toFixed(2);
        count += 1;
        displayArea(count, name, ellipseAreaDisplay);
    }
});

function displayArea(serialNo, name, totalArea) {

    const displayRow = document.getElementById('area-display');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serialNo}. </td>
        <td> ${name} </td>
        <td>${totalArea} cm<sup>2</sup></td>
        <td><button class="btn btn-primary">
        Convert to m<sup>2</sup></button></td>
    
    `
    displayRow.appendChild(tr);
};


