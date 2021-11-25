<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance North - Checkout</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/checkout.css">
  </head>
  <body>
    <?php include '../partials/nav.php' ?>

    <div class="cursor"></div>
    <div class="content" data-template="home">
        <div class="checkout">
            <div class="checkout__wrapper">
                <div class="checkout__cart">
                    <div class="checkout__cart__header">
                        <h3 class="checkout__cart__header__title">your products:</h3>
                    </div>
                    <div class="checkout__cart__content">
                        <div class="product__card">
                            <figure class="product__card__figure">
                                <img src="" alt="" class='product__card__figure__image'>
                            </figure>
                            <div class="product__card__info">
                                <h4 class="product__card__info__title">classic rosé hat</h4>
                                <p class="product__card__info__price">$ 79.99</p>
                            </div>
                            <button class="product__card__remove">
                                remove
                            </button>
                        </div>
                    </div>
                    <div class="checkout__cart__total">
                        <h3 class="checkout__cart__total__text">your total: $ 400.00</h3>
                    </div>
                </div>
                <hr class='checkout__stripe'>
                <div class="checkout__address">
                    <form action="" class="checkout__address__form">
                        <h3 class="checkout__address__form__header">your address</h3>
                        <div class="checkout__address__form__row">
                            <input type="text" class="checkout__address__form__input"
                            placeholder='postal code'>
                            <input type="text" class="checkout__address__form__input"
                            placeholder='address'>
                        </div>
                        <div class="checkout__address__form__row">
                            <input type="text" class="checkout__address__form__input"
                            placeholder='country'>
                            <input type="text" class="checkout__address__form__input"
                            placeholder='phone number'>
                        </div>
                        <button class="checkout__address__form__button">confirm and finish</button>
                    </form>
                </div>
                <h2 class="checkout__text">CHECKOUT</h2>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="../app/checkout.js"></script>
  </body>
</html>