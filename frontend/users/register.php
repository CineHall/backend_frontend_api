<?php include('../inc/header.php') ?>
<form class="form">
    <input type="text" name="name" placeholder="name" required>
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
    <button type="submit">register</button>
</form>
<div class="btn_login_sinUp">
    <a href="./login.php"><button>login</button></a>
</div>
<div id="token"></div>
<script src="../layout/js/register.js"></script>
<?php include('../inc/footer.php') ?>