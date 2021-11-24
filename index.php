<!DOCTYPE php>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance North</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="./styles/index.css">
    <link rel="stylesheet" href="./styles/home.css">
  </head>
  <body>
    <?php include './partials/nav.php' ?>

    <div class="cursor"></div>
    <div class="content" data-template="home">
      <div class="home"> 
        <div class="home__wrapper"> 
          <div class="home__gallery">
            <div class="home__gallery__wrapper">
              <figure class="home__gallery__media">
                <img class="home__gallery__media__image" src='./assets/1.jpg'>
              </figure>
              <figure class="home__gallery__media">
                <img class="home__gallery__media__image" src='./assets/2.jpg'>
              </figure>
              <figure class="home__gallery__media">
                <img class="home__gallery__media__image" src='./assets/3.jpg'>
              </figure>
              <figure class="home__gallery__media">
                <img class="home__gallery__media__image" src='./assets/4.jpg'>
              </figure>
              <figure class="home__gallery__media">
                <img class="home__gallery__media__image" src='./assets/5.jpg'>
              </figure>
            </div>
          </div>
          <div class="home__titles"> 
            <div class="home__titles__wrapper">
              <h2 class="home__titles__title">casual </h2>
              <h2 class="home__titles__title">elegant </h2>
              <h2 class="home__titles__title">street </h2>
              <h2 class="home__titles__title">winter </h2>
              <h2 class="home__titles__title">teen </h2>
            </div>
          </div><span class="home__tip__text">scroll to explore our collections</span>
          <a href="./pages/store.php" class="home__store__link">visit our store</a>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="./app/app.js"></script>
  </body>
</html>