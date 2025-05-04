// Global Variables
const grid = document.querySelector(".grid");
const rainbowBtn = document.querySelector(".rainbowBtn");
const opacityBtn = document.querySelector(".opacityBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const clearBtn = document.querySelector(".clearBtn");
const colorInput = document.querySelector(".colorInput");
const rainbow = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];


// slider
var slider = document.getElementById("myRange");
let gridSizes = document.querySelectorAll(".gridSize");

gridSizes.innerText = slider.value; // Display the default slider value
// logic to change size of cells in grid
let squaresPerSide = 16;
squaresPerSide = parseFloat(slider.value);
let cellSize = Math.floor(640 / squaresPerSide);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    gridSizes.forEach(span => {
        span.innerText = this.value;
    });
    squaresPerSide = parseFloat(this.value);
    cellSize = Math.floor(640 / parseFloat(this.value));

    const cellDivs = Array.from(document.getElementsByClassName('cell'));
    console.log(cellDivs.length);
    console.log(typeof cellDivs);
    console.log(cellDivs);
    
    cellDivs.forEach(cell => {
        grid.removeChild(cell);
    });

    updateState(squaresPerSide, cellSize);
}

function updateState (squaresPerSide, cellSize) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.flex = `0 0 ${cellSize}px`;
    
        // function does not include () because state is switched based on button that is pressed
        handleMouseSketch;
    
        grid.appendChild(cell);
        
    }
}


// Switch Statement & Clear Function

let currentMode = 'default';
let currentColor = 'black';

grid.addEventListener('mouseover', handleMouseSketch);

function handleMouseSketch(event) {
    // if selected element is not cell, return and exit function
    if (!event.target.classList.contains('cell')) return;


    // get the cell that was hovered
    const cell = event.target;

    switch(currentMode) {
        case 'default':
            cell.style.backgroundColor = 'black';
            currentColor = cell.style.backgroundColor;
            break;

        case 'colorInputMode':
            cell.style.backgroundColor = colorInput.value;
            currentColor = cell.style.backgroundColor;
            break;

        case 'rainbowMode':
            let randomColorIndex = Math.floor(Math.random() * rainbow.length);
            cell.style.backgroundColor = rainbow[randomColorIndex];
            currentColor = 'rainbowMode';
            break;

        case 'opacityMode':
            if (currentColor === 'rainbowMode') {
                let randomColorIndex = Math.floor(Math.random() * rainbow.length);
                cell.style.backgroundColor = rainbow[randomColorIndex];
                let currentOpacity = parseFloat(cell.style.opacity) || 0.3;
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                cell.style.opacity = currentOpacity;
            }
            else {
                cell.style.backgroundColor = currentColor;
                let currentOpacity = parseFloat(cell.style.opacity) || 0.3;
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                cell.style.opacity = currentOpacity;
            }
            break;

        case 'eraserMode':
            cell.style.backgroundColor = 'aqua';
            break;
    }
}



// initiate clear
function clearMode() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
            cell.style.backgroundColor = 'aqua';
    });
}


// Event Listeners

// !!default mode triggered in for loop above!!

// trigger colorInput function
colorInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        currentMode = 'colorInputMode';
    }
})

// trigger rainbowMode function
rainbowBtn.addEventListener('click', () => currentMode = 'rainbowMode');

// trigger opacityMode function
opacityBtn.addEventListener('click', () => currentMode = 'opacityMode');

// trigger eraser function
eraserBtn.addEventListener('click', () => currentMode = 'eraserMode');

// trigger clear function
clearBtn.addEventListener('click', clearMode);





// COLOR LIST MODAL

// Global Variables
const colorListOpen = document.querySelector('.colorListOpen');
const colorListModal = document.querySelector('.colorListModal');
const colorList = document.querySelector('.colorList');
const colorListClose = document.querySelector('.colorListClose');
const cssColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood",
    "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk",
    "Crimson", "Cyan", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MidnightBlue",
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum",
    "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
    "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver",
    "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"
];

// Event Listeners & Functions
colorListOpen.onclick = () => {
    cssColors.forEach(color => {
        const eachColor = document.createElement('div');
        eachColor.className = 'color-item';
        eachColor.innerHTML = `<div class="color-square" style="background-color:${color};"></div>${color}`;
        colorList.appendChild(eachColor);
    });

    colorListModal.style.display = 'block';
    //cell.disabled = true;
}

colorListClose.onclick = () => {
    colorListModal.style.display = 'none';
    //cell.disabled = false;
}
