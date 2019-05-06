// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.kanye.rest', true)

request.onload = function () {
  // Begin accessing JSON data here
  }


// Send request
request.send()






// fetch('https://api.kanye.rest')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
