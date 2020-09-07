const modal = document.getElementById('toggle')
const grid = document.getElementById('grid-swap')
let gridState = 1

modal.addEventListener('click', function(event) {
    event.preventDefault()
    this.classList.toggle('active')
})

switch(gridState) {
    case (gridState === 1):
        grid.classList.toggle('1-grid-pos')
    case (gridState === 2):
        grid.classList.toggle('2-grid-pos')
    case (gridState === 3):
        grid.classList.toggle('3-grid-pos')
    case (gridState === 4):
        grid.classList.toggle('4-grid-pos')
}

grid.addEventListener('click', function(event) {
    gridState =+ 1
})