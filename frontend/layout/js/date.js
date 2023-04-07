const id_user = localStorage.getItem("id");
const hallName = localStorage.getItem("hallName");
console.log(id_user,hallName)
if (!id_user || id_user == 'null' || id_user == 'undefined') {
  location.replace("../users/login.php");
} else {

  const dateField = document.getElementById("dateField");
  const today = new Date();
  dateField.addEventListener("input", function() {
    const selectedDate = new Date(this.value);
    if (selectedDate.getUTCDay() === 0 || selectedDate < today) {
      alert("Les dimanches et les jours antérieurs à aujourd'hui sont désactivés");
      this.value = "";
    }
  });

  var form = document.querySelector(".form");
  var form2 = document.querySelector(".form2");
  var No_place_empty = document.querySelector("#No_place_empty");

form.addEventListener('submit', event => {
    event.preventDefault();
    var divInput = document.getElementById('inputs')
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    localStorage.setItem("reservation_date",data.reservation_date);
      fetch(`http://localhost/backend_frontend_api/backend/controllers/${hallName}/get_empty_places.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.message)
      if (data.message == 'No empty places Found') {
        var message = `
          <p>
            No empty places Found
          </p>
          <a href ="../movies/movies.php" class= "btnSubmit">Go To Movies And Show Others</a>
        `
        No_place_empty.setAttribute('class','No_place_empty')
        No_place_empty.innerHTML = message;
      } else {
        formInput = `
    <div class="radioInput">`
    for (let i = 0; i < data.length; i++) {
      formInput += `
        <div class = "radioSeats">
            <input type="radio" id="Choice-${i}" name="place_numero" value="${data[i]}">
            <label for="Choice-${i}">
                <img class = "seats" src="http://localhost/backend_frontend_api/backend/img/seats.png" alt="place">
                <span>${data[i]}</span>
            </label>
        </div>
      `;
    }
    formInput += `
    </div>`
    let inputs = document.createElement('div');
    inputs.innerHTML = formInput;
    divInput.append(inputs);
      }
    });
})
form2.addEventListener('submit', event => {
  event.preventDefault();
  var divInput = document.getElementById('inputs')
  const formData = new FormData(form2);
  const data = Object.fromEntries(formData);
  const place_numero = data.place_numero
  localStorage.setItem("place_numero",place_numero);
  location.replace("./reserve.php");
})
}