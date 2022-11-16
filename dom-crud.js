// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const cta = document.createElement('a');
cta.innerText = 'Buy Now!'
cta.setAttribute('id', 'cta')

const pElement = document.querySelector('p')
pElement.after(cta)

// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.querySelector('img')
const imageColor = image.dataset.color
console.log(`Image is ${imageColor}.`)


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const listItems = document.querySelectorAll('li')
listItems[2].setAttribute('class', 'highlight')


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
