<?php

// Creo un nuovo oggetto
$menuObj = new stdClass();
$menuObj->productList = array(new stdClass(), new stdClass());
$menuObj->productList[0]->product = "Pizzetta";
$menuObj->productList[0]->price = 1;
$menuObj->productList[1]->product = "Hot Dog";
$menuObj->productList[1]->price = 2;

$menuJson = json_encode($menuObj);
//echo $menuJson;

// Create connection
$servername = "bar-prof_db_1";
$username = "root";
$password = "password";
$dbname = "db";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$menuSqlObj = new stdClass();
$menuSqlObj->productList = array(new stdClass(), new stdClass());
$sql = "SELECT id,nome,prezzo FROM test";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $menuSqlObj->productList[$row["id"]]->product = $row["nome"];
        $menuSqlObj->productList[$row["id"]]->price = $row["prezzo"];

        //echo "id: " . $row["id"]. " - Nome: " . $row["nome"]. ", prezzo:" . $row["prezzo"];
    }
} else {
    echo "0 results";
}
$conn->close();

$menuSqlJson = json_encode($menuSqlObj);
echo $menuSqlJson;
