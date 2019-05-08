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
/*
$sql = "SELECT Name FROM Category";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["Name"]. "<br>";
    }
} else {
    echo "0 results";
}
 */
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
    case getCart:
        $cart = '{"cart": [';
        for ($i = 0; $i < count($_SESSION["cart"]); $i++) {
           $cart = $cart . $_SESSION["cart"][1];
        }
        //Trim the last comma
        $cart=rtrim($cart,", ");
        //Finish parsing
        $cart=$cart . "]}";
        //Return the list as a string
        echo $cart;
        break;
    default:
        echo "No Connection";
}
$conn->closeConnection();
?>
