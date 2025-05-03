// global variables
const grid = document.querySelector(".grid");
const rainbowBtn = document.querySelector(".rainbowBtn");
const opacityBtn = document.querySelector(".opacityBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const clearBtn = document.querySelector(".clearBtn");
const colorInput = document.querySelector(".colorInput");
const rainbow = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];


// logic to change size of cells in grid
let squaresPerSide = 16;
let cellSize = Math.floor(640 / squaresPerSide);




for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.flex = `0 0 ${cellSize}px`;

    defaultMode();

    grid.appendChild(cell);
    
}

//FUNCTIONS

// initiate default mode
function defaultMode() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => { 
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

// initiate colorInput mode
function colorInputMode() {
    let colorChoice = colorInput.value;
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = colorChoice;
        })
    })

    colorInput.value = "";
}

// initiate rainbow mode
function rainbowMode() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => { 
        cell.addEventListener("mouseover", () => {
            // randomize color & fill in background
            let randomColorIndex = Math.floor(Math.random() * rainbow.length);
            cell.style.backgroundColor = rainbow[randomColorIndex];
        });
    });
}

// initiate opacity mode
function opacityMode() {
    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.style.opacity = 0.3;
    })

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            // increase opacity
            let currentOpacity = parseFloat(cell.style.opacity) || 0.3;
            currentOpacity = Math.min(currentOpacity + 0.1, 1);
            cell.style.opacity = currentOpacity;
        });
    });
}

// initiate eraser 
function eraserMode() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'aqua';
        });
    });
}

// initiate clear
function clearMode() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
            cell.style.backgroundColor = 'aqua';
    });
}



//EVENT LISTENERS

// !!default mode triggered in for loop above!!

// trigger colorInput function
colorInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        colorInputMode();
    }
})

// trigger rainbowMode function
rainbowBtn.addEventListener("click", rainbowMode);

// trigger opacityMode function
opacityBtn.addEventListener("click", opacityMode);

// trigger eraser function
eraserBtn.addEventListener("click", eraserMode);

// trigger clear function
clearBtn.addEventListener("click", clearMode);



// MODALS

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

colorListOpen.onclick = () => {
    cssColors.forEach(color => {
        const eachColor = document.createElement('div');
        eachColor.className = 'color-item';
        eachColor.innerHTML = `<div class="color-square" style="background-color:${color};"></div>${color}`;
        colorList.appendChild(eachColor);
    });

    colorListModal.style.display = 'block';
    cell.disabled = true;
}

colorListClose.onclick = () => {
    colorListModal.style.display = 'none';
    cell.disabled = false;
}
