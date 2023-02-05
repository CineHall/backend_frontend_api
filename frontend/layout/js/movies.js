let divMovies = document.querySelector('#movies')

fetch("http://localhost/backend_frontend_api/backend/controllers/movies/GetAllMovies.php", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            var card = '<h1>'+ data[i].name +'</h1>'
            card += '<h1>'+ data[i].time +'</h1>'
            card += '<h1>'+ data[i].place_price +'</h1>'
            card += '<h1>'+ data[i].hall_name +'</h1>'
            card += '<img src = "'+ data[i].image +'" alt = "image pour '+ data[i].name +'">'

            var movie = document.createElement('div');
            movie.className = 'movie';
            movie.innerHTML = card;
        
            divMovies.append(movie);
        }
    })