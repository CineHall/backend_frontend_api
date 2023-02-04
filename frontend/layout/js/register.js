const formEl = document.querySelector('.form');
formEl.addEventListener('submit',event=>{
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    const token = document.querySelector('#token');
    
    fetch('http://localhost/backend_frontend_api/backend/controllers/users/register.php',{
        method: 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
    .then(data => token.innerHTML= '<input type="text" readonly id="tokenvalue" value="'+data.resulte + '"><button onclick="CopyToken()">Copy Your Token For Login</button>')
});
function CopyToken() {
    // Get the text field
    var copyText = document.getElementById('tokenvalue');
    
    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    
    location.replace("./login.php");
  }