//Start counter when page loads
let counter = 0
const counterDisplay = document.querySelector('.counter-display')
counterDisplay.innerHTML = counter 

// When a user clicks the + element, the count should increase by 1 on screen.
const plusBtn = document.querySelector('.plus-btn')
plusBtn.addEventListener('click', () => {
    counter++
    counterDisplay.innerHTML = counter 
})

// When a user clicks the – element, the count should decrease by 1 on screen.
