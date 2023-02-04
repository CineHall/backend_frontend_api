const formEl = document.querySelector('.form');
formEl.addEventListener('submit',event=>{
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    const token = document.querySelector('#token');
    
    fetch('http://localhost/backend_frontend_api/backend/controllers/users/login.php',{
        method: 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    location.replace("../reservation/home.php");
});