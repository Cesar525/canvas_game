<?php include("layout/header.php");?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">


<div style="width:100%; height: 100%;">
    <div style="width: fit-content;height: fit-content;margin: 0 auto;">
        <canvas style="border: solid 1px white;" id="canvasUILifeBar" class="canvasUILifeBar"></canvas><br>
        <canvas style="border: solid 1px white;" id="canvasGame" class="canvasGame"></canvas>
        <canvas style="border: solid 1px white;" id="canvasUI" class="canvasUI"></canvas>
    </div>
</div>

<script src="./gameClass/powerups.js"></script>
<script src="./gameClass/sprites.js"></script>
<script src="./gameClass/functions.js"></script>
<script src="./gameClass/animation.js"></script>
<script src="./gameClass/death.js"></script>
<script src="./gameClass/shields.js"></script>
<script src="./gameClass/controller.js"></script>
<script src="./gameClass/monsters.js"></script>
<script src="./gameClass/map.js"></script>
<script src="./gameClass/shots.js"></script>
<script src="./gameClass/guns.js"></script>
<script src="./gameClass/player.js"></script>
<script src="./game.js"></script>



<?php include("layout/footer.php");?>