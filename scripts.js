fetch('https://api.kanye.rest')
 .then(response => response.json())
 .then (data => {
    console.log(data.quote)
 })
 .catch(error => console.error(error))

const app = document.getElementById('root')
const quoteContainer = document.createElement("div")
quoteContainer.setAttribute('class', 'container')

app.appendChild(quoteContainer)
