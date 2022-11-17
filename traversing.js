// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.querySelector('main')
console.log(main)

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
//console.log(body) 
const bodyElement = ul.parentElement.parentElement
console.log(bodyElement)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
//console.log(ul.lastElementChild)
const lastListItem = p.previousElementSibling.lastElementChild
console.log(lastListItem)