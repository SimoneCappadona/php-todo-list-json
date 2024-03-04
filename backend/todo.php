<?php
$todo_json = file_get_contents("../frontend/json/todo.json");

$todo_array = json_decode($todo_json);

$todo_array[] = [
 "textarea" => $_POST['todo'],
 "itemarea" => false
];

$result = json_encode($todo_array);

file_put_contents("../frontend/json/todo.json", $result);

header('Content-Type: application/json');

echo $result;

?>