<?php
/**
 * Created by PhpStorm.
 * User: vladimg
 * Date: 8.5.2019
 * Time: 13.35
 */
include("dbconnect.inc.php");

$connection = new Connection();

if($connection->getUser($_GET['email']) == true ){
    echo '<div class=/"alert alert-info/"><strong>Info!</strong> The username is already exsists.</div>';
}else {
    $connection->createUser($_GET['email'], $_GET['firstname'], $_GET['lastname'], $_GET['pwd']);
    echo '<div class=/"alert alert-success/"><strong>Success!</strong> The username is created.</div>';
}


?>