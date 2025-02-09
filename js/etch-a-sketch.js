// Global vars
const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new');

const createGrid = (size) => {
    console.log("Creating grid...");

    for (let i = 0; i <= size; i++) {
        for (let j = 0; j <= size; j++) {
            gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell')
            grid.appendChild(gridCell)
        }
    }

    gridEventListeners();
    console.log('Grid created.')
};

const newGrid = () => {
    let newSize = 0

    clearGrid();

    while (newSize <= 0 || newSize > 128) {
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