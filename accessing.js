// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHeader = document.querySelector('#weather-head');
weatherHeader.innerHTML = 'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"
const sunElements = document.querySelectorAll('.sun')
sunElements.forEach(elem => {
    elem.style.color = 'orange'
})

// Change the class of the second <li> from to "sun" to "cloudy"
const listItems = document.querySelectorAll('li')
listItems[1].classList.replace('sun', 'cloudy')