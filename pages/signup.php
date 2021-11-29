<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance North - Signup</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/signup.css">
  </head>
  <body>
    <?php include '../partials/nav.php' ?>

    <div class="cursor"></div>
    <div class="content" data-template="home">
        <div class="signup">
            <div class="signup__wrapper">
                <h3 class="signup__text">
                    welcome to endurance family, <br>
                    please, sign up and enjoy <br>
                    our exclusives.
                </h3>
                <div class="signup__form__wrapper">
                    <h2 class="signup__form__text">signup</h2>
                    <form class="signup__form">
                        <input type="text" class="signup__form__input" placeholder="name">
                        <input type="email" class="signup__form__input" placeholder="e-mail">
                        <input type="password" class="signup__form__input" placeholder="password">
                        <input type="password" class="signup__form__input" placeholder="confirm the password">
                        <button class="signup__form__button">sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="../app/signup.js"></script>
  </body>
</html>