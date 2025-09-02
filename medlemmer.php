<?php 


class Members {
    private $name;
    private $role;
    private $description;
    private $picture;

    function __construct($name, $role, $description, $picture)
    {
        $this->name = $name;
        $this->role = $role;
        $this->description = $description;
        $this->picture = $picture;
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
    function setPicture($picture) {
        $this->picture = $picture;
    }
    function getPicture() {
        return $this->picture;
    }
}


$members = [
    new Members("Eivind", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer", "images/EivindProfBilde.jpg"),
    new Members("Niri", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer", "images/logo.svg"),
    new Members("William", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer", "images/williamj.jpg"),
    new Members("Carl", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer", "images/CarlBilde.jpg"),
    new Members("Nicolay", "Frontend utvikler", "Går på UiA, IT og Informasjonssystemer", "images/NicolayBilde.jpg")
];

include "navbar.php"
?>

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medlemmer</title>
    <link rel="icon" type="image/x-icon" href="/images/Logo.svg">
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
        <h1>Medlemmer i gruppe 21</h1>

        <div class="medlem_oversikt">
            <?php foreach($members as $m): ?>
                <div class="medlem_instans">
                    <img src="<?php echo $m->getPicture(); ?>" alt="Bilde av <?php echo $m->getName(); ?>" style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin-bottom:10px;">
                    <strong><?php echo $m->getName(); ?></strong> – <?php echo $m->getRole(); ?><br>
                    <em><?php echo $m->getDescription(); ?></em>
                </div>
            <?php endforeach; ?>
        </div>
        
</body>
</html>