<?php
session_start();
/**
 * Created by PhpStorm.
 * User: vladimg
 * Date: 8.5.2019
 * Time: 13.35
 */
unset($_SESSION["user"]);
unset($_SESSION["cart"]);
header("Location: ../index.php");
exit;
?>