<?php

// Creo un nuovo oggetto
$menuObj = new stdClass();
$menuObj->productList = array(new stdClass(),new stdClass());
$menuObj->productList[0]->product = "Pizzetta";
$menuObj->productList[0]->price = 1;
$menuObj->productList[1]->product = "Hot Dog";
$menuObj->productList[1]->price = 2;

$menuJson = json_encode($menuObj);
echo $menuJson;
?>