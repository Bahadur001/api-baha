fetch('http://www.omdbapi.com/?i=tt3896198&apikey=752e6e1e&t=the+godfather')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

