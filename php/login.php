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

    if($connection->getUserPass($_GET['email'], $_GET['pwd']) == true){
        $_SESSION['user'] = $_GET['email'];
        unset($_SESSION['cart']);

        header("Location: ../index.php");
        exit;
    }else echo '<p>Login or password is not corect</p>';

?>