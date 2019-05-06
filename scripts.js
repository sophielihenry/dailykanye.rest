function getQuote() {
  fetch('https://api.kanye.rest')
   .then(response => response.json())
   .then (data => {
      // console.log(data.quote)
      const app = document.getElementById('root')
      const quoteContainer = document.createElement("div")
      quoteContainer.setAttribute('class', 'container')
      quoteContainer.innerHTML = data.quote
      const button = document.createElement("button")
      button.textContent = "another"
      app.appendChild(quoteContainer)
      app.appendChild(button)
button.addEventListener('click', getQuote)

   })
   .catch(error => console.error(error))
}


getQuote()



// const newQuote = document.getElementById('newQuote')
// newQuote.addEventListener('click', getQuote); // new quote on button click
// window.onload = getQuote; // new quote on page load
