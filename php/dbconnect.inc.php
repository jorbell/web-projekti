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
        if ($this->connection->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    }
    public function closeConnection() {
        $this->connection->close();
    }
    // Check connection
    public function getCategories() {
        //$this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        //return new mysqli("localhost", "root", "", "projekti");
        $sql = "SELECT ID, Name FROM Category";
        $result = $this->connection->query($sql);
        $answer = '{"categories": [';
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                //echo "Name: " . $row["Name"]. "<br>";
                $answer = $answer . '{"ID":"' . $row["ID"] . '",' . 
                    '"Name": "' . $row["Name"] .'"},' ;
            }
            $answer=rtrim($answer,", ");
            $answer=$answer . "]}";

            /*
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 }
             */



        } else {
            echo "0 results";
        }
        return $answer;
        
                
    }
}
?>
