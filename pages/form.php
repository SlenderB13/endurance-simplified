<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../styles/index.css">
        <link rel="stylesheet" href="../styles/form.css">
        
    </head>
    <body>
        <?php include '../partials/nav.php' ?>

        <div class="cursor"></div>
        <div class="content" data-template="home">
            <div class="signup__container">
                <div class="welcome__text">
                    <h3 class="welcome_text_center">
                        welcome to endurance family,<br>
                        please,sign up and enjoy <br> 
                        our exclusives
                    </h3>
                </div>
                <div class="signup">
                    <div class="signup__text">
                        <h3 class="signup_text_left">Signup</h3>
                    </div>
                    <form class="form__signup" action="">
                        <input class="form__input" type="name" name="name" placeholder="NAME">
                        <input class="form__input" type="email" name="email" placeholder="EMAIL">
                        <input class="form__input" type="password" name="password" placeholder="PASSWORD">
                        <input class="form__input" type="password" name="password" placeholder="CONFIRM THE PASSWORD">

                        <button class="sign__up__button">SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
        <script src="../app/form.js"></script>
    </body>
</html>