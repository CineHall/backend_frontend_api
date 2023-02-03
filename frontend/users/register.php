<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>api json</title>
</head>
<body>
    
    <form class="form">
        <input type="text" name="name">
        <input type="email" name="email">
        <input type="password" name="password">
        <button type="submit">submit</button>
    </form>

    <script>
        const formEl = document.querySelector('.form');
        formEl.addEventListener('submit',event=>{
            event.preventDefault();
            const formData = new FormData(formEl);
            const data = Object.fromEntries(formData);

            fetch('http://localhost/Backend_api/app/controllers/users/register.php',{
                method: 'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res => res.json())
              .then(data => console.log(data))
        });
    </script>
</body>
</html>