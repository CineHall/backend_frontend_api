const id_user = localStorage.getItem("id");
var reservationUser = document.querySelector('#reservationUser');
fetch(`http:localhost/backend_frontend_api/backend/controllers/reservation/get_reservation.php?id=${id_user}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // formInput += `
    //  <div class="radioInput">`
        for (let i = 0; i < data.length; i++) {
            formInput += `
                <div class = "radioSeats">
                    <input type="radio" id="Choice-${i}" name="place_numero" value="${data[i].place_numero}">
                    <label for="Choice-${i}">
                        <img class = "seats" src="http:localhost/backend_frontend_api/backend/img/seats.png" alt="place">
                        <span>${data[i].place_numero}</span>
                    </label>
                </div>
                `;
        }
        // formInput += `</div>`
        // let inputs = document.createElement('div');
        // inputs.innerHTML = formInput;
        // divInput.append(inputs);
    });
    /* {
"id": 2,
"name": "Sbah Morakoch",
"time": "1h30min",
"salle_name": "salle_2",
"place_numero": 50,
"reservation_date": "0000-00-00",
"price": 40,
"image": "http://localhost/backend_frontend_api/backend/img/Sbah_Morakoch.jpg"
} */