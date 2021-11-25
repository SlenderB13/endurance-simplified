<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/cart.css">
    <title>Cart</title>
</head>
<body>
    <?php include '../partials/nav.php' ?>

<div class="cart_container">

<div class="your_products">
    Your Products:
</div>
    <div class="products">
            <img src="" alt="">
        <div class="products__name">
            <h3>Classic Rose Hat</h3> 
            <p class="price">$79.90</p>
        </div>
        <button class="clean"> X </button>
    </div>
    <div class="products">
            <img src="" alt="">
        <div class="products__name">
            <h3>SUEDE ORANGE PURSE</h3> 
            <p class="price">$299.99</p>
        </div>
        <button class="clean"> X </button>
    </div>
    <div class="products__total">
        Your Total: $
    </div>
    <hr>
    <form action="">
        <div class="your_address">
        Your Address:
        </div>
            <div class="dice">
           <input type="text" placeholder=" Postal Code ">
           <input type="text" placeholder=" Address ">
            </div>
            <div class="dice">
           <input type="text" placeholder=" Country ">
           <input type="text" placeholder=" Phone Number ">
            </div>
            <button class="button">
                Confirm And Finish
            </button>
    </form>
        <h2>CHECKOUT</h2>
    

</div>
    <script src="../app/cart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
</body>
</html>