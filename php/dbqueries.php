<?php
session_start();
include("dbconnect.inc.php");
$func = $_GET["func"];
$category = $_GET["category"];
$product = $_GET["product"];
$conn = new Connection();
if (!isset($_SESSION["cart"])){
    $_SESSION["cart"] = array();
}
//vaihtaa functiota index.js suoritettujen functioiden mukaan
switch ($func) {
    case getCategories:
        echo $conn->getCategories();
        break;
    case getProducts:
        echo $conn->getProducts($category);
        break;
    case addToCart:
        $productInfo = $conn->getItem($product);
        array_push($_SESSION["cart"], $productInfo);
        echo $productInfo;
        break;
    case removeFromCart:
        array_splice($_SESSION["cart"], $product, 1);
        echo $product;
        break;
    case getCart:
        $cart = '{"products": [';
        for ($i = 0; $i < count($_SESSION["cart"]); $i++) {
           $cart = $cart . $_SESSION["cart"][$i];
        }
        //Trim the last comma
        $cart=rtrim($cart,", ");
        //Finish parsing
        $cart=$cart . "]}";
        //Return the list as a string
        echo $cart;
        break;
    case order:
        $cart = '{"products": [';
        for ($i = 0; $i < count($_SESSION["cart"]); $i++) {
           $cart = $cart . $_SESSION["cart"][$i];
        }
        //Trim the last comma
        $cart=rtrim($cart,", ");
        //Finish parsing
        $cart=$cart . "]}";
        $_SESSION["cart"] = array();
        echo $conn->orderItems(str_replace('"', "|", $cart));
        break;
    case getUser:
        if (isset($_SESSION['user'])) {
            echo '{Username: ' . $_SESSION['user'] . '<a href="php/logout.php">Log out</a>';
        } else {
            echo '{<a href="login.html">Log In</a>';
        }

        break;
    default:
        echo "No Connection";
}
$conn->closeConnection();
?>
