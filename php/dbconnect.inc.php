<?php
class Connection {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "projekti";
    private $connection;
    public function __construct() {
        // Create connection
        $this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        // Check connection
        if ($this->connection->connect_error) {
			die("Connection failed: " . $this->connection->connect_error);        }
    }
    public function closeConnection() {
        //Close connection
        $this->connection->close();
    }
    public function getCategories() {
        //Query for getting categories
        $sql = "SELECT * FROM categories";
        //Commit the query
        $result = $this->connection->query($sql);
        //Parse result to JSON list
        $answer = '{"categories": [';
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $answer = $answer . '{"ID":"' . $row["category_ID"] . '",' .
                    '"Name": "' . $row["category_Name"] .'"},' ;
            }
            //Trim the last comma
            $answer=rtrim($answer,", ");
            //Finish parsing
            $answer=$answer . "]}";
            //Retrun the list as a string
            return $answer;
        } else {
            echo "0 results";
        }


    }
    public function getProducts($category) {
        //Query for getting the products on selected category
        $sql = "SELECT * FROM products INNER JOIN categories on products.product_CategoryID = categories.category_ID  WHERE category_Name = '".$category."'";
        //Commit the query
        $result = $this->connection->query($sql);
        //Parse result to JSON list
        $answer = '{"products": [';
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $answer = $answer . '{"ID":"' . $row["product_ID"] . '",' .
                    '"Name": "' . $row["product_Name"] . '",' .
                    '"Category": "' . $row["category_Name"] . '",' .
                    '"Price": "' . $row["product_Price"] . '",' .
                    '"Brand": "' . $row["product_Brand"] . '",' .
                    '"Description": "' . $row["product_Description"] . '",' .
                    '"ImagePath": "' . $row["product_ImagePath"] .'"},' ;
            }
            //Trim the last comma
            $answer=rtrim($answer,", ");
            //Finish parsing
            $answer=$answer . "]}";
            //Return the list as a string
            return $answer;
        } else {
            echo "0 results";
        }
    }
}
?>