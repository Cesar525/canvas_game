<?php include("layout/header.php");?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
<!-- Zibkit -->
<script type="text/javascript" src="uizeb/zebkit.min.js">
    </script>
    <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1">
    <meta name="msapplication-tap-highlight" content="no">

<!-- Canvas -->
<div style="background-color:black;">
    <div style="width: fit-content;height: fit-content;margin: 0 auto;">
        <canvas style="border: solid 1px white;background: #0f0e0e;" id="canvasUILifeBar" class="canvasUILifeBar">
        </canvas><br>
        <canvas style="border: solid 1px white;z-index:2;" id="canvasGame" class="canvasGame"></canvas>
     
    </div>
</div>

<!-- js Files  -->
<script src="./gameClass/inventory.js"></script>
<script src="./gameClass/mapbuilder.js"></script>
<script src="./gameClass/powerups.js"></script>
<script src="./gameClass/sprites.js"></script>
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
<script src="./game.js"></script>

<?php include("layout/footer.php");?>