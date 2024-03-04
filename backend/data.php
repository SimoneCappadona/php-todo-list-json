<?php

$todolist_json = file_get_contents("../frontend/json/todo.json");

header('Content-Type: application/json');

echo ($todolist_json);

?>
