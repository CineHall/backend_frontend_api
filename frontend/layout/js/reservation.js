const id_user = localStorage.getItem("id");
var reservationUser = document.querySelector("#reservationUser");
fetch(`http://localhost/backend_frontend_api/backend/controllers/reservation/get_reservation.php?id=${id_user}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        var salle_name
        if (data[i].salle_name == 'salle_1') {
            salle_name = 'salle 1'
        }
        if (data[i].salle_name == 'salle_2') {
            salle_name = 'salle 2'
        }
        if (data[i].salle_name == 'salle_3') {
            salle_name = 'salle 3'
        }
        console.log(data[i]);
        var reservation = '<img src = "'+ data[i].image +'" alt = "image pour '+ data[i].name +'">'
        reservation += '<div class="info_movie_reseravtion">'
        reservation += '<h1>movie name : ' + data[i].name  + '</h1>'
        reservation += '<span>salle name : ' + salle_name + '</span>'
        reservation += '<span>place numero : ' + data[i].place_numero + '</span>'
        reservation += '<span>reservation date : ' + data[i].reservation_date + '</span>'
        reservation += '<span>price : ' + data[i].price + 'DH</span>'
        reservation += '</div>'
        reservation += '<a href="./deleteReservation.php?id='+ data[i].id +'"><button>Annuler</button></a>' 

        var reservationClient = document.createElement('div');
        reservationClient.innerHTML = reservation;
    
        reservationUser.append(reservationClient);
    }
});
