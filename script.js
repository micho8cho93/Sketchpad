// logic to change size of cells in grid
const grid = document.querySelector(".grid");

let squaresPerSide = 16;
let cellSize = Math.floor(640 / squaresPerSide);


for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.flex = `0 0 ${cellSize}px`;

    // Add your event listener here to change background color on mouseover:
    

    grid.appendChild(cell);
}









