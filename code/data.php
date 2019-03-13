<?php

// Creo un nuovo oggetto
$menuObj = new stdClass();
$menuObj->productList = array(new stdClass(),new stdClass());
$menuObj->productList[0]->product = "Pizzetta";
$menuObj->productList[0]->price = 1;
$menuObj->productList[1]->product = "Hot Dog";
$menuObj->productList[1]->price = 2;

$menuJson = json_encode($menuObj);

// $conn = new mysqli("127.0.0.1:3306","user","password","db");
// if (mysqli_connect_errno()) {
//     echo '{"error":"error"}';    
// }
// Create connection
$servername = "localhost:3306";
$username = "root";
$password = "password";
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo $menuJson;
?>