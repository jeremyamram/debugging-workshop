document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('joke-form');

form.addEventListener('submit', (event) => {
  const username = document.getElementById('name-input').value
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')

  event.preventDefault();
    let configObj = {
      headers: {
        "Accept": "application/json"
      }};
    fetch('https://icanhazdadjoke.com/', configObj)
    .then(function(response) {
      return response.json()
    .then(function(result){   
        if(username === "") return;
        newJokeLi.innerHTML = `
        <span class="${username}">${username} says:</span> ${result.joke}`
        jokeList.appendChild(newJokeLi);
    })
  })
})
})
