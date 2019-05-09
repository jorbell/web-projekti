<?php
/**
 * Created by PhpStorm.
 * User: vladimg
 * Date: 8.5.2019
 * Time: 13.35
 */
include("dbconnect.inc.php");

$connection = new Connection();

if($connection->getUser($_GET['email']) == true AND $connection->getPass($_GET['pwd']) == true){
    $_SESSION['admin'] = $admin;

    header("Location: ../index.html");
    exit;
}else echo '<p>Login or password is not corect</p>';

?>