const id_user = localStorage.getItem("id");
const hallName = localStorage.getItem("hallName");
const pricePlace = localStorage.getItem("pricePlace");

if (!id_user || id_user == 'null' || id_user == 'undefined') {
  location.replace("../users/login.php");
} else {
  const divInput = document.querySelector('#inputJS');

let formInput = `
  <input type="hidden" value="${id_user}" readonly name="id_user">
  <input type="text" value="${hallName}" readonly name="salle_name">
  <input type="text" value="${pricePlace}" readonly name="price">
`;

const dateField = document.getElementById("dateField");
const today = new Date();

dateField.addEventListener("input", function() {
  const selectedDate = new Date(this.value);
  if (selectedDate.getUTCDay() === 0 || selectedDate < today) {
    alert("Les dimanches et les jours antérieurs à aujourd'hui sont désactivés");
    this.value = "";
  }
});

fetch(`http://localhost/backend_frontend_api/backend/controllers/${hallName}/get_empty_places.php`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    formInput += `
    <div class="radioInput">`
    for (let i = 0; i < data.length; i++) {
      formInput += `
        <div class = "radioSeats">
            <input type="radio" id="Choice-${i}" name="place_numero" value="${data[i].place_numero}">
            <label for="Choice-${i}">
                <img class = "seats" src="http://localhost/backend_frontend_api/backend/img/seats.png" alt="place">
                <span>${data[i].place_numero}</span>
            </label>
        </div>
      `;
    }
    formInput += `
    </div>`
    let inputs = document.createElement('div');
    inputs.innerHTML = formInput;
    divInput.append(inputs);
  });
  
  fetch(`http://localhost/backend_frontend_api/backend/controllers/${hallName}/get_full_places.php`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    formInputFullPlace = `<div class="radioInput">`
    for (let i = 0; i < data.length; i++) {
        formInputFullPlace += `
        <div class = "radioSeats Full">
            <input disabled class = "full_place" type="radio" id="ChoiceFull-${i}" name="place_numero" value="${data[i].place_numero}">
            <label for="ChoiceFull-${i}">
                <img disabled class = "full_place" src="http://localhost/backend_frontend_api/backend/img/seatsFull.png" alt="place">
                <span>${data[i].place_numero}</span>
            </label>
        </div>
      `;
    }
    formInputFullPlace += `</div>`
    let radioFullPlace = document.createElement('div');
    radioFullPlace.innerHTML = formInputFullPlace;
    divInput.append(radioFullPlace);
  });

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

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
});

}