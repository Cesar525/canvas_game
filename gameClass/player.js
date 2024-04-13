class Player {
  constructor(
    name,
    level,
    thruster_selection,
    get_health,
    energy,
    m_damage,
    gunType,
    posx,
    posy,
    gun_speed,
    flag
  ) {
    (this.position = {
      x: c.width / 2, //
      y: c.height + c.height / 2, //
    }),
      (this.velocity = {
        x: 25,
        y: 25,
      }),
      (this.body = {
        m_name: name,
        m_level: level,
        health: get_health,
        energy: energy,
        thruster: thruster_selection,
        m_damage: m_damage,
        m_gun_type: gunType,
        gun_set: gunType,
        m_gun_speed: gun_speed,
        deathPositionX: NaN,
        deathPositionY: NaN,
        shield_on_off: true,
        m_shield_type: 0,
        lef_side_wign_shot: -50,
        right_side_wign_shot: +50,
        powerBombEnergy: 400,
        total_set_powerbombenergy: 1000,
        m_flag: flag,
        turn: false,
      });
    this.collition = {
      collition_mons3ters: false,
      collition_posX: NaN,
      collition_posY: NaN,
    };
    this.frames = {
      gameFrame: 0,
      staggerFrame: 0,
    };

    this.storage = {
      energy: 400,
      health: 500,
      money: 0,
    };
    this.StartingPlayer = {
      player_start_status: false,
      playerSet_onStarting_position: false,
      player_starting_pos: {
        x: c.width / 2 - this.width / 2,
        y: c.height + c.height / 2,
      },
      playerStart_blinking: 0,
      player_no_damage: true,
      player_blinking_start: true,
      timer_to_start: 0,
    };

    this.shotting_interval = 0;
    this.width = 100;
    this.height = 100;
    this.health_total = get_health;
    this.total_energy = energy;
    this.thruster_size = 150;
    this.thruster_animation = 0;
    this.thruster_position_x = 25;
    this.thruster_position_y = 54;
    this.clearRect = false;
    this.playerDead = false;
    this.showdeathexplosion;
    this.interval = false;
    this.gun_carry = 0;

    //shields
    this.shields_class = [];

    //OBJECTS
    this.gun_on = [];
    this.efffects_added_to_players = [];
    //
    this.player_storage = [1, 2, 3];
    this.set_amount = 0;

    this.alert = false;
    this.alert_counting = 0;
    this.alert_on_off = false;

    //sparks animation
    this.gameFrame_sparks = 0;
    this.staggerFrame_sparks = 1;

    this.showDamageAnimation = {
      gameFrameAnimationTime: 0,
      damage_recorded: 0,
    };
    this.showdamage__;
    this.random_number = 0;

    this.inventorySlots = [
      new Inventory(c.width - 1000, 0),
      new Inventory(c.width - 1000 + 100, 0),
      new Inventory(c.width - 1000 + 200, 0),
      new Inventory(c.width - 1000 + 300, 0),
      new Inventory(c.width - 1000 + 400, 0),
      new Inventory(c.width - 1000 + 500, 0),
      new Inventory(c.width - 1000, 100),
      new Inventory(c.width - 1000 + 100, 100),
      new Inventory(c.width - 1000 + 200, 100),
      new Inventory(c.width - 1000 + 300, 100),
      new Inventory(c.width - 1000 + 400, 100),
      new Inventory(c.width - 1000 + 500, 100),
    ];
    this.inventory = ["Health", "Health", "Health"];

    this.controller_movements = {
      mouse: false,
      keyboard: true,
    };
  }

  powerEnergyLock() {
    if (this.body.powerBombEnergy > this.body.total_set_powerbombenergy) {
      this.body.powerBombEnergy = this.body.total_set_powerbombenergy;
    }
  }

  clearShield() {
    this.shields_class.splice(0, 1);
  }

  randomNumber(from, to) {
    this.random_number = Math.floor(Math.random() * to) + from;
    return this.random_number;
  }
  getPlayerPosX() {
    return this.position.x;
  }
  getPlayerPosY() {
    return this.position.y;
  }

  setCollitionWithMonsters(set) {
    this.collition.collition_monsters = set;
  }
  getCollitionWithMonsters() {
    return this.collition.collition_monsters;
  }
  getGunType() {
    return this.body.m_gun_type;
  }
  setGunType(set) {
    this.body.gun_set = set;
  }

  getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    if (this.playerDead == false) {
      this.position.x = event.clientX - rect.left - 50;
      this.position.y = event.clientY - rect.top - 250;
    }
    //console.log("x: " + x + " y: " + y)
  }
  pushShield(type) {
    this.shields_class.push(new Shields(type));
    this.setPlayerShieldType(type);
  }
  draw() {
    if (!this.clearRect) {
      if (this.body.turn == false) {
        const image = new Image();
        image.src = "assets/spaceship/spaceshipone.png";
        if ((this.body.turn = true)) {
          // turning image
        }
        ctx.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }

      //rotated 180degree image
      if (this.body.turn == true) {
        const image = new Image();
        image.src = "assets/spaceship/spaceshipone.png";
        ctx.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }

      if ((this.body.turn = true)) {
        //Turning image
      }
      if (this.body.health < 0) {
        this.body.health = 0;
      }
      if (this.body.health > this.health_total) {
        this.body.health = this.health_total;
      }

      if (this.body.energy < 0) {
        this.body.energy = 0;
      }
      if (this.body.energy > this.total_energy) {
        this.body.energy = this.total_energy;
      }
    }
  }

  setPlayerVelocity(velocity) {
    this.velocity.x = velocity;
    this.velocity.y = velocity;
  }
  setPlayerDamage(health_) {
    this.body.health -= health_;
  }
  getPlayerHealth() {
    return this.body.health;
  }
  addPlayerHealth(amount) {
    this.body.health += amount;
  }
  subtractPlayerHealth(set) {
    this.body.health -= set;
  }

  playerOnDeath() {
    if (!this.playerDead) {
      if (this.body.health == 0) {
        this.body.deathPositionX = this.position.x;
        this.body.deathPositionY = this.position.y;
        this.playerDead = true;
        this.showdeathexplosion = true;
        this.position.x = NaN;
        this.position.y = NaN;
        this.clearRect = true;

        return this.playerDead;
      }
    }

    if (this.playerDead) {
      ctx.fillStyle = "white";
      ctx.font = "90px Anton";
      ctx.textAlign = "center";
      ctx.fillText("You are dead.", c.width / 2, c.height / 2 - 300);
      ctx.textAlign = "start";
    }
  }

  //about shields
  getPlayerShieldType() {
    return this.body.m_shield_type;
  }
  setPlayerShieldType(set) {
    this.body.m_shield_type = set;
  }
  getPlayerShieldStatus() {
    return this.body.shield_on_off;
  }
  setPlayerShieldStatus(set) {
    this.body.shield_on_off = set;
  }
  AddShield(setShieldType) {
    this.setPlayerShieldType(setShieldType);
    this.setPlayerShieldStatus(true);
  }

  shieldOff() {
    this.setPlayerShieldStatus(false);
  }
  playerShield() {
    if (this.shields_class.length > 0) {
      if (this.getPlayerShieldStatus()) {
        this.shields_class[0].drawShield(this);
      }
    }
  }

  lifeBar() {
    //const lifebar = new Image();
    // live bar text colork
    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 2) {
      ctx.fillStyle = "orange";
    }
    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 3) {
      ctx.fillStyle = "red";
    }
    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 5) {
      ctx.fillStyle = " #720000";
      this.alert = true;
    } else {
      this.alert = false;
    }
    if (Math.round((this.body.health / this.health_total) * 100) > 50) {
      //ctx.fillStyle = "white";
      ctx.fillStyle = "#59ff59";
    }

    ctx.font = "15px Roboto Mono";
    ctx.fillText(
      "Lvl:" + this.body.m_level,
      this.position.x - 100,
      this.position.y + 35
    );
    ctx.font = "40px Roboto Mono";
    ctx.fillText(this.body.m_name, this.position.x - 100, this.position.y - 25);
    ctx.font = "15px Roboto Mono";
    ctx.fillText(
      "HP: " + this.body.health,
      this.position.x - 100,
      this.position.y + 15
    );

    //Life bar
    ctx.fillStyle = "gray";
    ctx.fillRect(this.position.x - 100, this.position.y - 10, 100, 9);
    //life

    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 2) {
      ctx.fillStyle = "orange";
    }
    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 3) {
      ctx.fillStyle = "red";
    }
    if (Math.round((this.body.health / this.health_total) * 100) <= 100 / 5) {
      ctx.fillStyle = " #720000";
    }
    if (Math.round((this.body.health / this.health_total) * 100) > 100 / 2) {
      ctx.fillStyle = "green";
    }
    ctx.fillRect(
      this.position.x - 100,
      this.position.y - 10,
      Math.round((this.body.health / this.health_total) * 100),
      9
    );
  }

  playerDeathExplosion(explosion_animation) {
    explosion_animation.explosionEffect(
      3,
      this.body.deathPositionX - 85,
      this.body.deathPositionY - 85,
      this.showdeathexplosion,
      2
    );
    this.showdeathexplosion = false;
  }

  playerCollitionMonsters(monsters) {
    if (!this.StartingPlayer.player_no_damage) {
      // player collision with monsters
      this.frames.gameFrame++;
      this.frames.staggerFrame = 10;

      if (collisionTouch(this, monsters)) {
        // if(Math.floor(this.frames.gameFrame/this.frames.staggerFrame) % 5 == 4){
        this.setCollitionWithMonsters(collisionTouch(this, monsters));
        let damage = this.randomNumber(1, monsters.getMonsterDamage());
        this.showDamageAnimation.damage_recorded = damage;
        this.setPlayerDamage(damage);
        //console.log("you have been damage your current life is  = " + this.body.health);

        //  }
      }
    }
  }

  setPlayerHitDamage(set) {
    this.showDamageAnimation.damage_recorded = set;
  }
  playerMovemements() {
    // player movements

    if (this.StartingPlayer.player_start_status) {
      if (this.controller_movements.keyboard) {
        if (keys.right.pressed) {
          this.position.x += this.velocity.x;
        }
        if (keys.left.pressed) {
          this.position.x -= this.velocity.x;
        }
        if (keys.up.pressed) {
          this.position.y -= this.velocity.y;
        }
        if (keys.down.pressed) {
          this.position.y += this.velocity.y;
        }
      } else {
        if (this.controller_movements.mouse) {
          addEventListener("mousemove", (event) => {
            //console.log(event);
            // console.log("X == " + event.clientX + "Y == " + event.clientY);
            this.position.x = event.clientX;
            this.position.y = event.clientY;
          });
        }
      }
    }
    // player need to stay inside the canvas
    if (
      this.position.x + this.velocity.x >
      c.width - this.width + this.velocity.x
    ) {
      this.position.x = c.width - this.width;
    }
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.y + this.velocity.y > c.height - this.height) {
      this.position.y = c.height - this.height;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  energyUsage() {
    if (this.body.energy <= 0) {
      this.body.m_gun_type = 1;
    } else {
      this.body.m_gun_type = this.body.gun_set;
    }
  }

  energyBar() {
    //const lifebar = new Image();

    if (Math.round((this.body.energy / this.total_energy) * 100) <= 100 / 2) {
      ctx.fillStyle = "orange";
    }
    if (Math.round((this.body.energy / this.total_energy) * 100) <= 100 / 3) {
      ctx.fillStyle = "red";
    }
    if (Math.round((this.body.energy / this.total_energy) * 100) <= 100 / 4) {
      ctx.fillStyle = " #720000";
    }
    if (Math.round((this.body.energy / this.total_energy) * 100) > 50) {
      ctx.fillStyle = "white";
    }

    //life bar background
    ctx.fillStyle = "gray";
    ctx.fillRect(this.position.x - 100, this.position.y - 20, 100, 9);
    //life

    if (Math.round((this.body.energy / this.total_energy) * 100) <= 100 / 2) {
      ctx.fillStyle = "orange";
    }

    if (Math.round((this.body.energy / this.total_energy) * 100) <= 100 / 3) {
      ctx.fillStyle = " #720000";
    }
    if (Math.round((this.body.energy / this.total_energy) * 100) > 50) {
      ctx.fillStyle = "blue";
    }
    //lifebar
    ctx.fillRect(
      this.position.x - 100,
      this.position.y - 20,
      Math.round((this.body.energy / this.total_energy) * 100),
      9
    );
  }
  playerEffectSparks(spark_low_animation, spark_high_animation) {
    if (Math.round((this.body.health / this.health_total) * 100) <= 50) {
      spark_low_animation.playerSparks(this.position.x, this.position.y);
    }
    if (Math.round((this.body.health / this.health_total) * 100) <= 10) {
      spark_high_animation.playerSparksHigh(this.position.x, this.position.y);
    }
  }

  showPlayerMoney() {
    if (true) {
    }
  }

  showPlayerHealth() {
    // const health_images = new Image();
    // ctx_ui.font = "30px Roboto Mono";
    // health_images.src = 'assets/space_assets/10. Powerups/01 health 02/0000.png',
    // ctx_ui.drawImage(health_images, 0, 0, 100, 100)
    // ctx_ui.fillStyle = "white";
    // ctx_ui.fillText(this.storage.health, 0, 100)
  }

  showPlayerEnergy() {
    // const health_images = new Image();
    // ctx_ui.font = "30px Roboto Mono";
    // health_images.src = 'assets/space_assets/10. Powerups/03 flash 02/0000.png',
    // ctx_ui.drawImage(health_images, 100, 0, 100, 100)
    // ctx_ui.drawImage(health_images, 100, 0, 100, 100)
    // ctx_ui.fillStyle = "white";
    // ctx_ui.fillText(this.storage.energy, 0, 100)
  }

  playerStatus(gunType_player, shield_type) {
    var bar_width = 700;
    var bar_height = 25;

    //Showing current Weapon

    const image_weapon = new Image();
    ctx.fillStyle = "white";
    ctx.font = "40px Anton";
    image_weapon.src = guns_status_show[gunType_player].icon;
    ctx.drawImage(image_weapon, c.width / 2 / 2 + 300, 0, 200, 200);

    ctx.strokeStyle = "black";
    ctx.fillText("Gun", c.width / 2 / 2 + 300, 50);
    ctx.strokeText("Gun", c.width / 2 / 2 + 300, 50);
    //gun level
    ctx.fillText(
      guns_status_show[gunType_player].gun_name,
      c.width / 2 / 2 + 300,
      200
    );
    ctx.strokeText(
      guns_status_show[gunType_player].gun_name,
      c.width / 2 / 2 + 300,
      200
    );

    //Showing current shield
    if (!this.getPlayerShieldStatus()) {
      this.setPlayerShieldType(0);
    }

    const image_shield = new Image();
    ctx.fillStyle = "white";
    ctx.font = "40px Anton";
    image_shield.src = shield_status_show[shield_type].icon;
    ctx.drawImage(image_shield, c.width / 2 / 2 + 600, 0, 200, 200);
    //console.log(shield_type);

    ctx.strokeStyle = "black";
    ctx.fillText("Shield", c.width / 2 / 2 + 600, 50);
    ctx.strokeText("Shield", c.width / 2 / 2 + 600, 50);
    ctx.fillText(
      shield_status_show[shield_type].name_of_shield,
      c.width / 2 / 2 + 600,
      200
    );
    ctx.strokeText(
      shield_status_show[shield_type].name_of_shield,
      c.width / 2 / 2 + 600,
      200
    );

    //showin gplayer money
    const image_money = new Image();
    ctx.fillStyle = "white";
    ctx.font = "30px Roboto Mono";
    image_money.src = "assets/space_assets/10. Powerups/05 money 02/0000.png";
    ctx.drawImage(image_money, 0, 0, 100, 100);
    ctx.fillText("$" + this.storage.money, 100, 50, c.height - 60);

    //showing player health Levels
    ctx.fillStyle = "gray";

    ctx.font = "30px Roboto Mono";
    ctx.fillRect(25, 100, bar_width, bar_height);

    //green
    // console.log(Math.round((this.body.health / this.health_total) * bar_width ))
    if (
      Math.round((this.body.health / this.health_total) * bar_width) >=
      bar_width / 2
    ) {
      ctx.fillStyle = "green";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 2
    ) {
      ctx.fillStyle = "orange";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 3
    ) {
      ctx.fillStyle = "red";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 5
    ) {
      ctx.fillStyle = "#720000";
    }

    ctx.font = "30px Roboto Mono";
    ctx.fillRect(
      25,
      100,
      Math.round((this.body.health / this.health_total) * bar_width),
      bar_height
    );
    //Showing health amount.

    if (
      Math.round((this.body.health / this.health_total) * bar_width) >=
      bar_width / 2
    ) {
      ctx.fillStyle = "white";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 2
    ) {
      ctx.fillStyle = "orange";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 3
    ) {
      ctx.fillStyle = "red";
    }
    if (
      Math.round((this.body.health / this.health_total) * bar_width) <=
      bar_width / 5
    ) {
      ctx.fillStyle = "#720000";
    }
    ctx.font = "40px Roboto Mono";
    ctx.fillText(this.body.health, bar_width / 2, 100);

    //Showing player Energy Levels

    //showing player energy Levels
    ctx.fillStyle = "gray";
    ctx.font = "30px Roboto Mono";
    ctx.fillRect(25, 150, bar_width, bar_height);

    //green
    ctx.fillStyle = "blue";
    ctx.font = "30px Roboto Mono";
    ctx.fillRect(
      25,
      150,
      Math.round((this.body.energy / this.total_energy) * bar_width),
      bar_height
    );
    //Showing energy amount.
    ctx.fillStyle = "white";
    ctx.font = "40px Roboto Mono";
    ctx.fillText(this.body.energy, bar_width / 2, 150, c.height - 60);
  }
  shotting() {
    for (
      var counting_updating = 0;
      counting_updating < this.gun_on.length;
      counting_updating++
    ) {
      this.gun_on[counting_updating].updateShot(this);
      // is not deleting the used shots.

      if (this.gun_on[counting_updating].getDeleteShotStatus()) {
        // console.log(this.gun_on[counting_updating].getDeleteShotStatus());
        this.gun_on.splice(counting_updating, 1);
      }
    }
  }

  shottingCollition(monster) {
    for (var countingss = 0; countingss < this.gun_on.length; countingss++) {
      if (monster) {
        this.gun_on[countingss].collisionShotMonsters(monster);
      }
    }
  }

  shottingiinterval() {
    if (this.body.m_gun_type == 1 || this.body.m_gun_type == 2) {
      var shottinInterval = 5;
    } else {
      var shottinInterval = 10;
    }

    if (keys.shotting.pressed) {
      this.shotting_interval++;

      if (this.shotting_interval == 1) {
        gunsType(
          this.body.m_gun_type,
          this,
          this.position.x,
          this.position.y,
          this.body.m_name,
          this.body.m_flag
        );
      }
      if (this.shotting_interval == shottinInterval) {
        this.shotting_interval = 0;
      }
    } else {
      this.shotting_interval = 0;
    }
  }

  alerting() {
    if (this.alert) this.alert_counting++;
    if (this.alert_counting > 10) {
      this.alert_on_off = true;
      if (this.alert_counting > 20) {
        this.alert_on_off = false;
        this.alert_counting = 0;
      }
    }
    if (this.alert_on_off) {
      ctx.fillStyle = "red";
      ctx.font = "200px Anton";
      ctx.fillText("!", 800, 190, 200, 200);
    }
  }

  setShowAnimation(set) {
    this.showdamage__ = set;
  }

  damageShowAnimation(damage, pos_x, pos_y, color, if_true) {
    if (if_true) {
      this.setShowAnimation(true);
    }

    this.showDamageAnimation.gameFrameAnimationTime++;

    if (this.showdamage__ == true) {
      ctx.fillStyle = color;
      ctx.strokeStyle = "black";
      ctx.font = "90px anton";
      ctx.fillText("-" + damage + " ! ", pos_x, pos_y);
      ctx.strokeText("-" + damage + " ! ", pos_x, pos_y);
    }
    if (this.showDamageAnimation.gameFrameAnimationTime >= 300) {
      this.showdamage__ = false;
      this.showDamageAnimation.gameFrameAnimationTime = 0;
      this.collition.collition_monsters = false;
    }
  }

  playerView() {
    this.lifeBar();
    this.energyBar();
    if (this.getPlayerShieldStatus()) {
      this.damageShowAnimation(
        this.showDamageAnimation.damage_recorded,
        this.position.x + 20,
        this.position.y + 90,
        "blue",
        this.collition.collition_monsters
      );
    } else {
      this.damageShowAnimation(
        this.showDamageAnimation.damage_recorded,
        this.position.x + 20,
        this.position.y + 90,
        "red",
        this.collition.collition_monsters
      );
    }
  }

  playerInventory() {
    ctx.fillStyle = "black";
    ctx.fillRect(c.width - 1000, 0, 600, c.height);
  }

  powerBombBar() {
    ctx.fillStyle = "black";
    ctx.fillRect(c.width - 1105, 5, 60, 190);

    //bombenergy bar
    ctx.fillStyle = "#00e7f2";
    ctx.fillRect(c.width - 1100, 10, 50, 180);

    //background Bar

    ctx.fillStyle = "black";
    ctx.fillRect(
      c.width - 1105,
      5,
      60,
      200 -
        Math.round(
          (this.body.powerBombEnergy / this.body.total_set_powerbombenergy) *
            190
        )
    );

    ctx.fillStyle = "red";
    ctx.fillRect(
      c.width - 1100,
      10,
      50,
      180 -
        Math.round(
          (this.body.powerBombEnergy / this.body.total_set_powerbombenergy) *
            180
        )
    );
    ctx.fillStyle = "white";
    ctx.font = "30px Roboto Mono";
    ctx.strokeStyle = "black";
    ctx.fillText(
      this.body.powerBombEnergy + "/" + this.body.total_set_powerbombenergy,
      c.width - 1150,
      190
    );
    ctx.strokeText(
      this.body.powerBombEnergy + "/" + this.body.total_set_powerbombenergy,
      c.width - 1150,
      190
    );
  }

  playerInventoryProccess() {
    // need to setup an algorithm to make it work.
    for (
      var counting_inventories = 0;
      counting_inventories < this.inventorySlots.length;
      counting_inventories++
    ) {
      mousePad.updateMouse();
      this.inventorySlots[counting_inventories].updateInventory();
      this.inventorySlots[counting_inventories].collisionWithMousePad(
        collisionTouch(mousePad, this.inventorySlots[counting_inventories])
      );
    }

    if (this.inventory.length > 0) {
      for (
        var counting_inventory_ = 0;
        counting_inventory_ < this.inventory.length;
        counting_inventory_++
      ) {
        if (this.inventorySlots[0].emptySlot()) {
          //setup inventory
        }
      }
    }
  }

  getPlayerGunType() {
    return this.body.m_gun_type;
  }

  setPlatyerStart(set) {
    this.StartingPlayer.player_start_status = set;
  }
  getPlayerStart() {
    return this.StartingPlayer.player_start_status;
  }

  playerStart() {
    //pushing player foawrd
    if (this.getPlayerStart() == false) {
      //getting player into place
      this.position.y -= this.velocity.y;
      //console.log("updating position");
    }
    if (this.position.y == c.height / 2 + c.height / 2 / 2) {
      //console.log("destination reached");
      this.StartingPlayer.player_start_status = true;
    }
    //console.log(this.position.x);
  }

  update(
    animation_Sparks_low,
    animation_Sparks_high,
    thruster_animation,
    player_death_explosionAnimation
  ) {
    // this.powerBombBar();
    //this.playerInventory();
    this.alerting();
    this.shotting();

    if (this.StartingPlayer.player_blinking_start) {
      this.StartingPlayer.playerStart_blinking++;
      if (this.StartingPlayer.playerStart_blinking > 5) {
        if (this.StartingPlayer.playerStart_blinking > 7) {
          this.StartingPlayer.playerStart_blinking = 0;
        }

        this.StartingPlayer.timer_to_start++;
        if (this.StartingPlayer.timer_to_start == 90) {
          this.StartingPlayer.player_start_status = true;
          this.StartingPlayer.player_no_damage = false;
          this.StartingPlayer.player_blinking_start = false;
        }
        this.draw();
        thruster_animation.setPlayersThruster(
          this.body.thruster,
          this.position.x - this.thruster_position_x,
          this.position.y + this.thruster_position_y,
          this.thruster_size,
          this.thruster_size
        );
      }
    } else {
      this.draw();
      thruster_animation.setPlayersThruster(
        this.body.thruster,
        this.position.x - this.thruster_position_x,
        this.position.y + this.thruster_position_y,
        this.thruster_size,
        this.thruster_size
      );
    }
    this.playerOnDeath();

    this.playerMovemements();
    this.playerEffectSparks(animation_Sparks_low, animation_Sparks_high);
    this.playerDeathExplosion(player_death_explosionAnimation);

    //UI Status
    this.playerStatus(this.getPlayerGunType(), this.getPlayerShieldType());
    this.shottingiinterval();
    //UI STORAGE
    this.showPlayerHealth();
    this.showPlayerEnergy();
    this.energyUsage();
    //this.playerInventoryProccess();
    this.playerShield();
    this.playerStart();
    this.powerEnergyLock();
    for (var f = 0; f < powerUp.length; f++) {
      powerUp[f].updatePowerUpsFunctionality(this);
    }
    if (this.shields_class.length > 0) {
      if (this.shields_class[0].getDeleteObject()) {
        this.shields_class.splice(0, 1);
      }
      this.setPlayerShieldStatus(true);
    } else {
      this.setPlayerShieldStatus(false);
    }

    //EFFECTS
    if (this.efffects_added_to_players.length > 0) {
      for (var i = 0; i < this.efffects_added_to_players.length; i++) {
        this.efffects_added_to_players[i].updateEffects();
        this.efffects_added_to_players[i].followingPlayer(
          this.position.x,
          this.position.y
        );

        if (this.efffects_added_to_players[i].getDestroyObject()) {
          this.efffects_added_to_players.splice(i, 1);
        }
      }
    }
  }
}
