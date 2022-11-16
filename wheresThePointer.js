// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

// Access the table.
const tableElement = document.querySelector('tbody')
// Add event listener to the whole table. When clicked, 
tableElement.addEventListener('click', (e) => {
    // save the coordinates for the position of the mouse,
    const x = e.clientX
    const y = e.clientY

    // save the cell where the click happened,
    const clickedCell = e.target

    // and change the cell's inner HTML to the coordinates
    clickedCell.innerHTML = `(${x}, ${y})`
})