const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    const token = document.querySelector('#token');

    fetch('http://localhost/backend_frontend_api/backend/controllers/users/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => token.innerHTML = '<input type="text" readonly id="tokenvalue" value="' + data.resulte + '"><button onclick="CopyToken()">Copy Your Token For Login</button>')
});
function CopyToken() {
    const input = document.querySelector("#tokenvalue");

    // Sélectionnez la valeur du champ de saisie
    const inputValue = input.value;

    // Créez un champ de saisie caché pour copier la valeur
    const tempInput = document.createElement("input");
    tempInput.style.position = "fixed";
    tempInput.style.opacity = 0;
    tempInput.value = inputValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    console.log("Copied to clipboard");
    alert("Copied the text: " + inputValue);
    location.replace("./login.php");
}
