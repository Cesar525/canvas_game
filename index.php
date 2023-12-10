<!DOCTYPE html>
<html>


<head>
    <meta charset="UTF-8">
    <meta name="description" content="Developments">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Cesar">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Web tittle</title>
    <!-- <link rel="ikcon" type="image/x-icon" href="layout/img/logo.png"> -->
    <link rel="stylesheet" href="layout/style.css">
    <link rel="shortcut icon" href="#">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

    <!-- Zibkit -->
    <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1">
    <meta name="msapplication-tap-highlight" content="no">
    <script type="text/javascript" src="uizeb/zebkit.min.js">
    </script>
    <!-- zebkit end -->

</head>

<body>
    <!-- Canvas -->
    <div class="GameWindow">

        <?php
if(empty($_POST["player_name"])){
?>

        <div class="playerNameWindow">
            <form class="playerNameForm" action="" method="POST">
                <center>
                    <font class="blink_me" color="white"
                        style="font-size: 60px;padding: 51px;font-family: Roboto Mono;margin: 0 auto;color: #07ff07;">
                        Player Name</font>
                    <br>
                    <input name="player_name" type="text"
                        style="font-size: 40px;border: solid 1px red;border-radius: 31px;margin: 0 auto;padding-left: 21px;font-family:Roboto Mono;margin-top: 60px;"
                        maxlength="19" placeholder="Enter Player Name">
                    <br>
                    <input class="submit_button" type="submit" value="Submit">
                </center>

            </form>
        </div>



        <?php
}else{
?>
        <?php


?>
        <font id="playerName" hidden><?php echo $_POST["player_name"];?></font>
        <canvas style="border: solid 1px white;z-index:2;background-color:black;" id="canvasGame"
            class="canvasGame"></canvas>

        <?php
}
    ?>







    </div>



    <!-- Load monsters -->




    <!-- js Files  -->
    <script src="./gameClass/sprites.js"></script>
    <script src="./gameClass/statusbarcredentials.js"></script>


    <script src="./gameClass/guns.js"></script>
    <script src="./gameClass/items.js"></script>
    <script src="./gameClass/monstershots.js"></script>
    <script src="./gameClass/mouse.js"></script>
    <script src="./gameClass/inventory.js"></script>
    <script src="./gameClass/mapbuilder.js"></script>
    <script src="./gameClass/powerups.js"></script>
    <script src="./gameClass/functions.js"></script>
    <script src="./gameClass/animation.js"></script>
    <script src="./gameClass/shields.js"></script>
    <script src="./gameClass/controller.js"></script>
    <script src="./gameClass/monsters.js"></script>

    <script src="./gameClass/map.js"></script>
    <script src="./gameClass/shots.js"></script>
    <script src="./gameClass/explosion.js"></script>
    <script src="./gameClass/player.js"></script>
    <script src="./gameClass/particles.js"></script>
    <script src="./gameClass/effects.js"></script>

    <!-- Monsters Loads -->
    <script src="./gameClass/monsters/monsterproccessingdata/monsters_load.js"></script>
    <script src="./gameClass/monsters/monsterproccessingdata/movements.js"></script>
    <script src="./gameClass/monsters/bukara.js"></script>
    <script src="./gameClass/monsters/invader.js"></script>






    <!-- game config -->
    <script src="./config.js"></script>
    <!-- game init -->
    <script src="./game.js"></script>
</body>

</html>