<?php
include("dbconnect.inc.php");

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

echo $conn->getCategories();

$conn->closeConnection();
?>
