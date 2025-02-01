// 16x16 grid of squares

const createGrid = () => {
    const content = document.querySelector('.content')
    const grid = document.querySelector('.grid')

    console.log("Creating grid...")

    for (let i = 0; i <= 16; i++) {
        for (let i = 0; i <= 16; i++) {
            gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell')
            grid.appendChild(gridCell)
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded')
    createGrid();
})
