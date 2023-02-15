const idKeyValue = window.location.search
const idParam = new URLSearchParams(idKeyValue)
const id = idParam.get('id')

console.log('http://localhost/backend_frontend_api/backend/controllers/reservation/delete_reservation.php?id=' + id)

fetch("http://localhost/backend_frontend_api/backend/controllers/reservation/delete_reservation.php?id=" + id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => {
        console.log(data);
        location.replace("../movies/movies.php");
    });