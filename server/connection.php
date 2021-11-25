<?php
    define('DB_NAME', 'endurance');
    define('DB_USER', 'localhost');
    define('DB_PASSWORD', 'localhost');
    define('DB_HOST', 'localhost');

    try {
        $pdo = new PDO("mysql:host=" . DB_HOST . "; dbname=" . DB_NAME, DB_USER, DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        echo 'connection successfull';
    } 
    catch (PDOException $e) {
        echo 'connection failed' . $e->getMessage();
    }
?>