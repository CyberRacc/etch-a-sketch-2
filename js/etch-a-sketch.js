// Global vars
const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new');

const createGrid = (size) => {
    console.log("Creating grid...");

    // Create the grid rows
    for (let i = 1; i <= size; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow)

        // Create the grid cells and append to gridRow
        for (let j = 1; j <= size; j++) {
            gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell')
            gridRow.appendChild(gridCell)
        }
    }

    gridEventListeners();
    console.log('Grid created.')
};

const newGrid = () => {
    let newSize = 0

    clearGrid();

    while (newSize <= 0 || newSize > 128 || isNaN(newSize) ) {
        if (newSize === undefined || newSize === null) break;

        newSize = parseInt(prompt("Enter new grid size (128 max)"))
    }

    createGrid(newSize);
};

const clearGrid = () => {
    console.log('Clearing grid...')
    grid.innerHTML = '';

    console.log('Grid cleared.');
}

const randomValue = () => {
    return Math.floor(Math.random() * 255)
};

const gridEventListeners = () => {
    const cells = document.querySelectorAll('.grid-cell')

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.background = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
        });
    });
};

// Event Listeners
newGridButton.addEventListener('click', () => {
    newGrid();
});