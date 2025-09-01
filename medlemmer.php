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

$members = [
    new Members("Eivind", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer"),
    new Members("Niri", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer"),
    new Members("William", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer"),
    new Members("Carl", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer"),
    new Members("Nicolay", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer")
];

include "navbar.php"
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medlemmer</title>
</head>
<body>
        <h1>Medlemmer i gruppe 21</h1>

        <?php foreach($members as $m): ?>
            <li>
                <strong><?php echo $m->getName(); ?></strong> – <?php echo $m->getRole(); ?><br>
                <em><?php echo $m->getDescription(); ?></em>
            </li>
        <?php endforeach; ?>    
        
</body>
</html>