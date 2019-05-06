fetch('https://api.kanye.rest')
 .then(response => response.json())
 .then (data => {
    console.log(data.quote)
    const app = document.getElementById('root')
    const quoteContainer = document.createElement("div")
    quoteContainer.setAttribute('class', 'quoteContainer')
    quoteContainer.innerHTML = data.quote

    app.appendChild(quoteContainer)
 })
 .catch(error => console.error(error))

