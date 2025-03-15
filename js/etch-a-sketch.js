// Global vars
const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new');
let lightness = 80; // Set an initial lightness of 80 to be reduced during the loop.


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

const randomHue = () => {
    return Math.floor(Math.random() * 360) // 360 is max hue value in HSL.
};

const randomSat = () => {
    return Math.floor(Math.random() * 100) // 100 is the max saturation in HSL.
}

const gridEventListeners = () => {
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        cell.dataset.lightness = 80;

        cell.addEventListener('mouseover', () => {
            let currentLightness = cell.dataset.lightness;
            let bgColour = `hsl(${randomHue()}, ${randomSat()}%, ${currentLightness}%)`
            cell.style.background = bgColour
            console.log(`Set background colour to ${bgColour}`)
            if (currentLightness > 0) cell.dataset.lightness = currentLightness - 5;
        });
    });
};

// Event Listeners
newGridButton.addEventListener('click', () => {
    newGrid();
});