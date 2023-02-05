let divMovies = document.querySelector('#movies')

fetch("http://localhost/backend_frontend_api/backend/controllers/movies/GetAllMovies.php", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            var card = '<img src = "'+ data[i].image +'" alt = "image pour '+ data[i].name +'">'
            card += '<div class="span">'
            card += '<span>'+ data[i].name +'</span>'
            card += '<a href="./movie.php?id='+ data[i].id +'">View More</a>' 
            card += '</div>'

            var movie = document.createElement('div');
            movie.className = 'movies';
            movie.innerHTML = card;
        
            divMovies.append(movie);
        }
    })