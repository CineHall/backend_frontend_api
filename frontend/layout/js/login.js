const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    const token = document.querySelector('#token');

    fetch('http://localhost/backend_frontend_api/backend/controllers/users/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => token.innerHTML = '<input type="hidden" readonly id="tokenvalue" value="' + data.message + '">')
        for (let i = 0; i < 2; i++) {
            document.querySelector('#deuxClick').click()   
            value = test()
            if (value == 'Valide token') {
                location.replace("../reservation/home.php");
            } else {
                location.replace("./login.php");
            }
    }
});
function test() {
    var input = document.querySelector('#tokenvalue')
    var value = input.value
    return value
}