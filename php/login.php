<!DOCTYPE html>
<html lang="en">
<head>
    <title>Webstore | Log In</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/stylesheet.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="top">
    <ul class="ultop">
        <li id="main"><a id="home" href="../index.php">Webstore</a></li>
        <ul class="row">
            <ul>
                <li id="login"><a href="../login.html">Log in</a></li>
            </ul>
</nav>
<div class="container">
<?php
session_start();
/**
 * Created by PhpStorm.
 * User: vladimg
 * Date: 8.5.2019
 * Time: 13.35
 */
include("dbconnect.inc.php");

$connection = new Connection();
    //testaa onko tietokannassa olevat salasana ja tunnus oikein
    if($connection->getUserPass($_GET['email'], $_GET['pwd']) == true){
        $_SESSION['user'] = $_GET['email'];
        unset($_SESSION['cart']);

        header("Location: ../index.php");
        exit;
    }else echo '<div class="alert alert-warning"><strong>Warning!</strong> Login or password is not corect!</div>';

?>

</div>
</body>
</html>

