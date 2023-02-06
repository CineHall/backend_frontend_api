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
        if (data.hall_name == 'salle_2') {
            hall_name = 'salle 2'
        }
        if (data.hall_name == 'salle_3') {
            hall_name = 'salle 3'
        }
        var card = '<img src = "' + data.image + '" alt = "image pour ' + data.name + '">'
        card += '<div class="span">'
        card += '<span>Nom De Film : ' + data.name + '</span>'
        card += '<span>Duree De Film : ' + data.time + '</span>'
        card += '<span>Prix De Tickette : ' + data.place_price + ' DH</span>'
        card += '<span>Nom De Salle : ' + hall_name + '</span>'
        card += '<div>'
        card += '<a href="../reservation/reserve.php">reserve</a>'
        card += '</div >'
        card += '</div>'
        localStorage.setItem("pricePlace", data.place_price);
        localStorage.setItem("hallName", data.hall_name);

        var movie = document.createElement('div');
        movie.className = 'movie';
        movie.innerHTML = card;

        divMovies.append(movie);

    })