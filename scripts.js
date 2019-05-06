document.querySelector("button").addEventListener('click', getQuote)




function getQuote() {
  fetch('https://api.kanye.rest')
   .then(response => response.json())
   .then (data => {
      // console.log(data.quote)
      const quote = document.getElementById('quote')
      quote.innerHTML = data.quote
   })
   .catch(error => console.error(error))

}

getQuote()

