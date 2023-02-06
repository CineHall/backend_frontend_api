
// <input type="radio" id="contactChoice1" name="contact" value="email">
// </input><label for="contactChoice1">Email</label>

// $reservation->place_numero = $data->place_numero;

// Récupérer le jeton

const id_user = localStorage.getItem("id");
const hallName = localStorage.getItem("hallName");
const pricePlace = localStorage.getItem("pricePlace");

const divInput = document.querySelector('#inputJS');

var formInput = `<input hidden type="text" value=" ${id_user} " readonly name="id_user">
<input type="text" value=" ${hallName}" readonly name="salle_name">
<input type="text" value="${pricePlace}" readonly name="price">
<input type="text" value="${pricePlace}" readonly name="price">`

var inputs = document.createElement('div');
inputs.innerHTML = formInput;
divInput.append(inputs);

const dateField = document.getElementById("dateField");
const today = new Date();

dateField.addEventListener("input", function () {
    const selectedDate = new Date(this.value);
    if (selectedDate.getUTCDay() === 0 || selectedDate < today) {
        alert("Les dimanches et les jours antérieurs à aujourd'hui sont désactivés");
        this.value = "";
    }
});
const formEl = document.querySelector('.form');
// formEl.addEventListener('submit', event => {
//     event.preventDefault();
//     const formData = new FormData(formEl);
//     const data = Object.fromEntries(formData);
//     const token = document.querySelector('#token');

//     fetch('http://localhost/backend_frontend_api/backend/controllers/Reservation/add_reservation.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(data => {
//             if (data.message == 'Reservation Created') {
//                 location.replace("../reservation/reservation.php");
//             } else {
//                 location.replace("./reserve.php");
//             }
//         })
// });