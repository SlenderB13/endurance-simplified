<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance North</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/login.css">
  </head>
  <body>
    <?php include '../partials/nav.php' ?>

    <div class="cursor"></div>
    <div class="content" data-template="home">
        <div class="login">
            <div class="login__wrapper">
                <div class="login__wrapper__top">
                    <div class="login__top__container">
                        <div class="login__left">
                            <h3 class="login__left__text">login</h3>
                        </div>
                    </div>
                    <div class="login__right">
                        <form class="login__form">
                            <input class="login__form__input" placeholder='e-mail' type="email">
                            <input class="login__form__input" placeholder='password' type="password">
                            <button class='login__form__button'>login</button> 
                        </form>
                    </div>
                </div>
                <div class="login__wrapper__bottom">
                    <div class="signup__bottom__container">
                        <div class="signup__left">
                            <h3 class="signup__left__text">signup</h3>
                        </div>
                    </div>
                    <div class="signup__right">
                        <div class="signup__form">
                            <button class="login__form__button -signup">signup with google</button> 
                            <button class="login__form__button -signup" >signup with e-mail</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="stripe"></div>
    </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="../app/login.js"></script>
  </body>
</html>