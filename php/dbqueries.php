<?php
include("dbconnect.inc.php");
$func = $_GET["func"];
$category = $_GET["category"];
$conn = new Connection();

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
    default:
        echo "No Connection";
}

$conn->closeConnection();
?>
