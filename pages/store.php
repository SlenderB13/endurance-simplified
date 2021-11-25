<?php require '../server/connection.php' ?>

<?php 
  $sql = 'SELECT * FROM products';
  $result = $pdo->query($sql);
  $products = $result->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endurance Store</title>
    <meta name="description" content="Endurance North - Elegance and luxury">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="../styles/store.css">
  </head>
  <body>
    <?php include '../partials/nav.php' ?>

    <div class="cursor"></div>
    <div class="content" data-template="home">
      <div class="store">
        <div class="store__header">
          <div class="store__header__text">
            <h3 class="store__header__text__title">our products</h3>
            <h3 class="store__header__text__subtitle">buy what matches your good taste</h3>
          </div>
          <div class="store__header__marquee">
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
            <p class="store__header__marquee__text">
              special offer <span>&#8226;</span> black november sale
            </p> 
          </div>
        </div>
        <div class="store__row">
          <div class="store__row__wrapper">
            <?php foreach($products as $product): ?>
            <div class="store__product">
              <div class="store__product__header">
                <h4 class="store__product__title"><?php echo $product['name'] ?></h4>
                <p class="store__product__price"><?php echo "$ ".$product['price'] ?></p>
              </div>
              <figure class="store__product__figure">
                <img src="<?php echo $product['image']?>" class="store__product__image">
              </figure>
              <div class="store__product__actions">
                <button class="store__product__button">add to cart</button>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="../app/store.js"></script>
  </body>
</html>