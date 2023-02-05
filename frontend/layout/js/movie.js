const idKeyValue = window.location.search
const idParam = new URLSearchParams(idKeyValue)
const id = idParam.get('id')

let divMovies = document.querySelector('#movie')

fetch("http://localhost/backend_frontend_api/backend/controllers/movies/getMovie.php?id=" + id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => {
        var hall_name
        if (data.hall_name == 'salle_1') {
            hall_name = 'salle 1'
        }
        if(data.hall_name == 'salle_2'){
            hall_name = 'salle 2'
        }
        if(data.hall_name == 'salle_3'){
            hall_name = 'salle 3'
        }
        var card = '<img src = "' + data.image + '" alt = "image pour ' + data.name + '">'
        card += '<div class="span">'
        card += '<span>' + data.name + '</span>'
        card += '<span>' + data.time + '</span>'
        card += '<span>' + data.place_price + '</span>'
        card += '<span>' + hall_name + '</span>'
        card += '</div>'

        var movie = document.createElement('div');
        movie.className = 'movie';
        movie.innerHTML = card;

        divMovies.append(movie);

    })