<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance North</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/contact.css">
  </head>
  <body>
    <?php include '../partials/nav.php' ?>
    <div class="cursor"></div>
    <div class="content" data-template="contact">
      <div class="contact">
        <div class="contact__left__instagram">
          <div class="contact__left__instagram__marquee" scrollamount='20'>
            <p>follow us on instagram <span>&#8226;</span> @endurance</p>
            <p>follow us on instagram <span>&#8226;</span> @endurance</p>
            <p>follow us on instagram <span>&#8226;</span> @endurance</p>
            <p>follow us on instagram <span>&#8226;</span> @endurance</p>
          </div>
        </div>
        <div class="contact__wrapper">
          <div class="contact__header"> 
            <h1 class="contact__header__title">we want to hear you </h1>
            <h3 class="contact__header__subtitle">get in touch.</h3>
          </div>
          <div class="contact__content">
            <form class="contact__content__form">
              <input class="contact__content__form__input" type="text" placeholder="name:">
              <input class="contact__content__form__input" type="text" placeholder="e-mail:">
              <textarea class="contact__content__form__input" placeholder="tell us what you need."></textarea>
              <button class="contact__content__form__button">send it</button>
            </form>
          </div>
          <div class="contact__footer"> 
            <div class="contact__footer__left">
              <p class="contact__footer__phone">
                you can call us:<br> 
                Random number. Find another font.
              </p>
            </div>
            <div class="contact__footer__right">
              <address class="contact__footer__address">
                 our locations: <br> 
                some random address goes here.
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="../app/contact.js"></script>
  </body>
</html>