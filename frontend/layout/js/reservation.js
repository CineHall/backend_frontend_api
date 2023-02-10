const id_user = localStorage.getItem("id");
var reservationUser = document.querySelector("#reservationUser");
console.log(reservationUser);
fetch(`http:localhost/backend_frontend_api/backend/controllers/reservation/get_reservation.php?id=${id_user}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
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
        var reservation = '<div>'
        var reservation = '<img src = "'+ data[i].image +'" alt = "image pour '+ data[i].name +'">'
        reservation += '<span>salle name : ' + salle_name + '</span>'
        reservation += '<span>place numero : ' + place_numero + '</span>'
        reservation += '<span>reservation date : ' + data[i].reservation_date + '</span>'
        reservation += '<span>price : ' + data[i].price + 'DH</span>'
        reservation += '<a href="./deleteReservation.php?id='+ data[i].id +'"><button>Annuler</button></a>' 
        reservation += '</div>'

        var reservationClient = document.createElement('div');
        reservationClient.innerHTML = reservation;
    
        reservationUser.append(movie);
    }
});
