<?php 

class Members {

    private $name;
    private $role;
    private $description;

    function __construct($name, $role, $description)
    {
        $this->name = $name;
        $this->role = $role;
        $this->description = $description;
    }

    function setName($name) {
        $this->name = $name;
    }

    function getName() {
        return $this->name;
    }

    function setRole($role) {
        $this->role = $role;
    }

    function getRole() {
        return $this->role;
    }

    function setDescription($description) {
        $this->description = $description;
    }

    function getDescription() {
        return $this->description;
    }
}

$Eivind = new members("Eivind", "Frontendutvikler", "25 år gammel og klar for arbeid");

include "navbar.php"
?>


<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hjemme side</title>
</head>
<body>
     <h1>Gruppe 21s nettside</h1>

     

</body>
</html>