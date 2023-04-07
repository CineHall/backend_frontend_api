const id_user = localStorage.getItem("id");
const hallName = localStorage.getItem("hallName");
const pricePlace = localStorage.getItem("pricePlace");
const place_numero = localStorage.getItem("place_numero");
const reservation_date = localStorage.getItem("reservation_date");

if (!id_user || id_user == "null" || id_user == "undefined") {
  location.replace("../users/login.php");
} else {
  var data = {
    id_user: id_user,
    price: pricePlace,
    salle_name: hallName,
    place_numero: place_numero,
    reservation_date: reservation_date,
  };
  fetch('http://localhost/backend_frontend_api/backend/controllers/Reservation/add_reservation.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'Reservation Created') {
        location.replace("../reservation/reservation.php");
      } else {
        location.replace("./reserve.php");
      }
    });
}