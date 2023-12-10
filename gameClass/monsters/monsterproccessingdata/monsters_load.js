class Monsters_Load {
  constructor(monster) {
    (this.position = {
      x: monster.position.x,
      y: monster.position.y,
    }),
      (this.velocity = {
        x: monster.speed,
        y: monster.speed,
      }),
      (this.body = {
        m_name: monster.name,
        m_health: monster.health,
        m_damage: monster.damage,
        m_dead: false,
        m_deadPosX: NaN,
        m_deadPosY: NaN,
        m_sprite: monster.sprite,
        m_steady_deadPosX: NaN,
        m_steady_deadPosY: NaN,
        m_damage_sprite: monster.damageSprite,
        m_flag: monster.flag,
      });

    this.shotting_interval = monster.shotting_interval;
    if (monster.addGuns.addGun) {
      this.monster_gun_type = monster.addGuns.gun_type;
    } else {
      this.monster_gun_type = 0;
    }
    this.addGun = monster.addGuns.addGun;
    this.collition = {
      collition_posX: NaN,
      collition_posY: NaN,
      collition_with_shot: false,
      collition_with_player: false,
      collition_shotX: NaN,
      collition_shotY: NaN,
    };
    this.monster_shot_interval = 0;
    this.gun_on = [];

    if (monster.boss) {
      this.boss_mode_set = monster.boss;
    } else {
      this.boss_mode_set = false;
    }

    if (monster.loot.dropping_loot) {
      this.drop_loop_rating = monster.loot.dropping_loot_rating;
    } else {
      this.drop_loop_rating = 10;
    }
    this.spawnTime = 0;
    this.width = monster.size.width;
    this.height = monster.size.height;
    this.moveRight = true;
    this.moveLeft = false;
    this.clearRect = false;
    this.collision_bool = false;
    this.monsterMovement = monster.movements;
    this.explosion_dead = false;
    this.explosion = false;
    this.health_total = monster.health;
    this.monsterGotHitDamages;
    //need for spawns
    this.spawnPositionX = monster.position.x;
    this.spawnPositionY = monster.position.y;
    this.deathexplosion_moveDown = 0;
    //powerUps
    this.dropPower_random;
    this.drop_item = false;
    this.give_number = true;
    this.droping_powerUp = true;
    this.exposions_boss = false;

    this.interval_changes = false;

    this.building_randomExplosions = {
      explosions_counter: 0,
      explosion_start: false,
      explosion_end: false,
    };
    this.normal_sprite = monster.sprite;
    this.addition_animation = new Animation();
    this.delete_time_after_death = 0;
    this.destroy_object = false;
    this.destroy_counter = 0;
    this.showshotstartpoint = monster.addGuns.Show_shottingFrom;
    this.diying_state_sprite = monster.speed_Change.sprite_change;
    this.diying_state_speed = monster.speed_Change.SpeedChange;
    this.monster_shotting_starting_pos = {
      posOne: {
        x: 0,
        y: 0,
      },
      posTwo: {
        x: 0,
        y: 0,
      },
      posThree: {
        x: 0,
        y: 0,
      },
    };
    this.shot_starting_point_set = {
      posOne: {
        active: monster.addGuns.shot_one.active,
        x: monster.addGuns.shot_one.x,
        y: monster.addGuns.shot_one.y,
      },
      posTwo: {
        active: monster.addGuns.shot_two.active,
        x: monster.addGuns.shot_two.x,
        y: monster.addGuns.shot_two.y,
      },
      posThree: {
        active: monster.addGuns.shot_three.active,
        x: monster.addGuns.shot_three.x,
        y: monster.addGuns.shot_three.y,
      },
    };
    this.bossPositionReached = false;
    this.monsterhit = false;
  }

  getMonsterDamage() {
    return this.body.m_damage;
  }
  setDeleteObject(set) {
    this.destroy_object = set;
  }
  getDeleteObject() {
    return this.destroy_object;
  }

  getHealth() {
    return this.body.health;
  }

  drawMonster() {
    //if bossmode set
    if (this.boss_mode_set) {
      const image_monster = new Image();

      image_monster.src = this.body.m_sprite;
      ctx.filter = "#white";

      ctx.drawImage(
        image_monster,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
      ctx.filter = "none";
      if (this.body.m_health < 0) {
        this.body.m_health = 0;
      }
    } else {
      //if boss mode not set
      if (!this.clearRect) {
        const image_monster = new Image();
        image_monster.src = this.body.m_sprite;
        ctx.drawImage(
          image_monster,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );

        if (this.body.m_health < 0) {
          this.body.m_health = 0;
        }
      }
    }
  }
  getMonsterHealth() {
    return this.body.m_health;
  }
  setMonsterHealth(sethit) {
    this.body.m_health -= sethit;
    this.monsterGotHitDamages = sethit;
  }
  getPosX() {
    return this.position.x;
  }
  getPosY() {
    return this.position.y;
  }
  killMonster() {
    this.body.m_health = 0;
    this.body.m_dead = true;
    this.setDeleteObject(true);
  }
  movements(move) {
    switch (move) {
      case "SideBysideGoingDown":
        this.position.y += 0.6;
        if (this.moveRight) {
          this.position.x += this.velocity.x;
        }
        if (this.moveLeft) {
          this.position.x -= this.velocity.x;
        }

        if (this.position.x < 1) {
          this.moveLeft = false;
          this.moveRight = true;
        }
        if (this.position.x > c.width - this.width) {
          this.moveLeft = true;
          this.moveRight = false;
        }

        break;
      case "straightDown":
        this.position.y += this.velocity.y;
        if (this.position.y > c.height + 100) {
          this.destroy_counter++;
          if (this.destroy_counter == 50) this.setDeleteObject(true);
        }
        break;
      case "sidebyside":
        this.position.y += 0;
        if (this.moveRight) {
          this.position.x += this.velocity.x;
        }
        if (this.moveLeft) {
          this.position.x -= this.velocity.x;
        }

        if (this.position.x < 1) {
          this.moveLeft = false;
          this.moveRight = true;
        }
        if (this.position.x > c.width - this.width) {
          this.moveLeft = true;
          this.moveRight = false;
        }

        break;

      case "testingMode":
        this.position.x = c.width / 2 - this.width / 2;
        this.position.y = 300;

        break;
    }
  }

  randomSpawnPositionX(from, to) {
    this.randomNum = Math.floor(Math.random() * to) + from;
    return this.randomNum;
  }

  powerUpRandomNum(from, to) {
    this.dropPower_random = Math.floor(Math.random() * to) + from;
    return this.dropPower_random;
  }

  spawnMonster() {
    if (this.body.m_dead) {
      this.spawnTime++;

      if (this.spawnTime >= 100) {
        this.position.x = this.randomSpawnPositionX(50, c.width - 300);
        this.position.y = this.randomSpawnPositionX(-100, -500);
        this.body.m_health = this.health_total;
        this.moveRight = true;
        this.moveLeft = false;
        this.clearRect = false;
        this.collision_bool = false;
        this.explosion_dead = false;
        this.spawnTime = 0;
        this.body.m_dead = false;
        this.body.m_deadPosX = NaN;
        this.body.m_deadPosY = NaN;
        this.dropPower_random;
        this.drop_item = false;
        this.give_number = true;
        this.item_dropped = NaN;
        this.droping_powerUp = true;
      }
    }
  }

  shottingPos() {
    if (this.addGun == true) {
      // postone

      this.monster_shotting_starting_pos.posOne.x =
        this.position.x + this.shot_starting_point_set.posOne.x;
      this.monster_shotting_starting_pos.posOne.y =
        this.position.y + this.shot_starting_point_set.posOne.y;

      // pos two
      this.monster_shotting_starting_pos.posTwo.x =
        this.position.x + this.shot_starting_point_set.posTwo.x;
      this.monster_shotting_starting_pos.posTwo.y =
        this.position.y + this.shot_starting_point_set.posTwo.y;

      // pos three
      this.monster_shotting_starting_pos.posThree.x =
        this.position.x + this.shot_starting_point_set.posThree.x;
      this.monster_shotting_starting_pos.posThree.y =
        this.position.y + this.shot_starting_point_set.posThree.y;

      if (this.showshotstartpoint) {
        ctx.fillStyle = "red";
        ctx.fillRect(
          this.monster_shotting_starting_pos.posOne.x,
          this.monster_shotting_starting_pos.posOne.y,
          100,
          100
        );

        ctx.fillStyle = "white";
        ctx.fillRect(
          this.monster_shotting_starting_pos.posTwo.x,
          this.monster_shotting_starting_pos.posTwo.y,
          100,
          100
        );

        ctx.fillStyle = "blue";
        ctx.fillRect(
          this.monster_shotting_starting_pos.posThree.x,
          this.monster_shotting_starting_pos.posThree.y,
          100,
          100
        );
      }

      if (this.body.m_health < this.health_total / 2 / 2) {
        this.velocity.y = this.diying_state_speed;
        this.velocity.x = this.diying_state_speed;

        this.body.m_sprite = this.diying_state_sprite;
      }
    }
  }
  setShottinginterval(set) {
    this.shotting_interval = set;
  }

  // shottingCollition(player) {
  //   for (var countingss = 0; countingss < this.gun_on.length; countingss++) {
  //     if (player) {
  //       this.gun_on[countingss].collisionMonsterShot(player);
  //     }
  //   }
  // }

  shottingiinterval(shotting_interval) {
    if (this.body.m_dead == false) {
      this.monster_shot_interval++;

      if (this.monster_shot_interval == 1) {
        gunsType(
          1,
          this,
          this.position.x,
          this.position.y,
          this.body.m_name,
          this.body.m_flag
        );
      }
      if (this.body.m_health < this.health_total / 2 / 2) {
        if (this.monster_shot_interval == 3) {
          this.monster_shot_interval = 0;
        }
        if (this.monster_shot_interval == shotting_interval) {
          this.monster_shot_interval = 0;
        }
      } else {
        if (this.monster_shot_interval == shotting_interval) {
          this.monster_shot_interval = 0;
        }
      }
    }
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
        console.log(this.gun_on[counting_updating].getDeleteShotStatus());
        this.gun_on.splice(counting_updating, 1);
      }
    }
  }

  resetColPos() {
    this.moveRight = true;
    this.moveLeft = false;
    this.clearRect = false;
    this.collition.collition_with_shot = false;
    this.explosion_dead = false;
    this.explosion = false;
    this.collition.collition_posX = NaN;
    this.collition.collition_posY = NaN;
  }
  //collition in && out puts
  setMonsterCollitionPost(posX, posY) {
    this.collition.collition_posX = posX;
    this.collition.collition_posY = posY;
  }
  setMonsterCollitionWithShot(input) {
    this.collition.collition_with_shot = input;
  }
  getMonsterCollitionWithShot() {
    return this.collition_with_shot;
  }
  getCollitoinPosX() {
    return this.collition.collition_posX;
  }
  getCollitoinPosY() {
    return this.collition.collition_posY;
  }
  setShotCollition(posx, posy) {
    this.collition.collition_shotX = posx;
    this.collition.collition_shotY = posy;
  }

  monsterlifeBar() {
    if (Math.round((this.body.m_health / this.health_total) * 100) <= 50) {
      ctx.fillStyle = "orange";
    }
    if (Math.round((this.body.m_health / this.health_total) * 100) <= 20) {
      ctx.fillStyle = "red";
    }
    if (Math.round((this.body.m_health / this.health_total) * 100) <= 10) {
      ctx.fillStyle = " #720000";
    }
    if (Math.round((this.body.m_health / this.health_total) * 100) > 50) {
      ctx.fillStyle = "white";
    }
    ctx.font = "15px Roboto Mono";
    ctx.fillText(this.body.m_name, this.position.x - 70, this.position.y - 15);
    ctx.fillText(
      "HP: " + this.body.m_health,
      this.position.x - 70,
      this.position.y + 15
    );

    //background
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x - 70, this.position.y - 10, 100, 9);
    //life
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x - 70,
      this.position.y - 10,
      Math.round((this.body.m_health / this.health_total) * 100),
      9
    );
    ctx.globalCompositeOperation = "source-over";
  }

  monsterDeath() {
    if (!this.body.m_dead) {
      if (this.body.m_health == 0) {
        this.clearRect = true;
        //  console.log(this.body.m_name + " is dead life i set to " + this.getMonsterHealth());
        this.body.m_deadPosX = this.position.x;
        this.body.m_deadPosY = this.position.y;
        this.body.m_steady_deadPosX = this.position.x;
        this.body.m_steady_deadPosY = this.position.y;
        if (!this.boss_mode_set) {
          this.position.x = 500;
          this.position.y = c.height + 500;
          this.delete_time_after_death++;
          if (this.delete_time_after_death == 100) {
            this.setDeleteObject(true);
          }
        }
        this.body.m_dead = true;
        return this.body.m_dead;
      }
    }
  }
  monsterClearDeath() {
    this.explosion_dead = false;
  }

  monsterDeathExplosion(explosion_deathAnimation) {
    explosion_deathAnimation.explosionEffect(
      3,
      this.body.m_deadPosX - 85,
      (this.body.m_deadPosY += map_speed) - 85,
      this.monsterDeath()
    );
  }

  monsterBossDeathExplosion(animation_effect) {
    // animation_effect.explosionEffect(3,  this.body.m_deadPosX - 85, (this.body.m_deadPosY += map_speed) - 85 , this.monsterDeath());

    if (this.monsterDeath()) {
      this.building_randomExplosions.explosion_start = true;
      animation_effect.explosionEffect(
        3,
        this.body.m_deadPosX - 85,
        (this.body.m_deadPosY += map_speed) - 85,
        this.monsterDeath()
      );
    }
    if (
      this.building_randomExplosions.explosion_start &&
      !this.building_randomExplosions.explosion_end
    ) {
      // ctx.fillStyle = "white";
      // ctx.fillRect(this.body.m_deadPosX, this.body.m_deadPosY, 500, 500);
      this.building_randomExplosions.explosions_counter++;

      ////Creating the explosion Sequence
      if (this.building_randomExplosions.explosions_counter == 30) {
        pushing_random_explsions.push(
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY - 100,
            100,
            100
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }
      if (this.building_randomExplosions.explosions_counter == 50) {
        pushing_random_explsions.push(
          new Explosions(
            4,
            this.body.m_steady_deadPosX + 100,
            this.body.m_steady_deadPosY + 100,
            100,
            100
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            10,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            10,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 500,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      if (this.building_randomExplosions.explosions_counter == 70) {
        pushing_random_explsions.push(
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY - 100,
            100,
            100
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      if (this.building_randomExplosions.explosions_counter == 90) {
        pushing_random_explsions.push(
          new Explosions(
            5,
            this.body.m_steady_deadPosX + 100,
            this.body.m_steady_deadPosY + 100,
            100,
            100
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            2,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }
      /////////////////////////////
      if (this.building_randomExplosions.explosions_counter == 110) {
        pushing_random_explsions.push(
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY - 100,
            100,
            100
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            2,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 500,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      if (this.building_randomExplosions.explosions_counter == 130) {
        pushing_random_explsions.push(
          new Explosions(
            5,
            this.body.m_steady_deadPosX + 100,
            this.body.m_steady_deadPosY + 100,
            100,
            100
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      if (this.building_randomExplosions.explosions_counter == 150) {
        pushing_random_explsions.push(
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY - 100,
            100,
            100
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            5,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 500,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }
      if (this.building_randomExplosions.explosions_counter == 170) {
        pushing_random_explsions.push(
          new Explosions(
            5,
            this.body.m_steady_deadPosX + 100,
            this.body.m_steady_deadPosY + 100,
            100,
            100
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY,
            300,
            300
          ),
          new Explosions(
            6,
            this.body.m_steady_deadPosX,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            3,
            this.body.m_steady_deadPosX - 100,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            4,
            this.body.m_steady_deadPosX - 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          ),
          new Explosions(
            10,
            this.body.m_steady_deadPosX + 300,
            this.body.m_steady_deadPosY + 300,
            300,
            300
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      if (this.building_randomExplosions.explosions_counter == 180) {
        pushing_random_explsions.push(
          new Explosions(
            1,
            this.body.m_steady_deadPosX - 1200,
            this.body.m_steady_deadPosY - 1200,
            3000,
            3000,
            3
          )
        );

        for (
          var explosion_count = 0;
          explosion_count < pushing_random_explsions.length;
          explosion_count++
        ) {
          explosions_animations_pushing.push(new Animation());
        }
      }

      //setting to delete object
      if (this.building_randomExplosions.explosions_counter == 250) {
        this.setDeleteObject(true);
      }
    }
  }

  randomSelectingPowerUps() {
    if (this.body.m_dead) {
      if (this.give_number) {
        this.drop_item = true;
      }
    }
    if (this.drop_item) {
      var drop_power = this.powerUpRandomNum(1, this.drop_loop_rating);
      this.drop_item = false;
      this.give_number = false;
    }
    this.item_dropped = drop_power;
    return this.item_dropped;
  }

  dropPowerUps(type) {
    if (this.body.m_health == 0 && this.droping_powerUp == true) {
      switch (type) {
        case 1:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.HEALTH,
              100
            )
          );

          this.drop_item = false;
          this.droping_powerUp = false;
          break;

        case 2:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.ENERGY,
              250
            )
          );

          this.drop_item = false;
          this.droping_powerUp = false;
          break;

        case 3:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.MONEY,
              150
            )
          );

          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 4:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.ENERGY,
              1000
            )
          );

          this.drop_item = false;
          this.droping_powerUp = false;
          break;

        case 5:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.HEALTH,
              800
            )
          );

          this.drop_item = false;
          this.droping_powerUp = false;
          break;

        //Guns
        case 6:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.MACHINE_GUN,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 7:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.LAZER_GUN,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 8:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.PLASMA_GUN,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 9:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.LAVA_GUN,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 10:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.GREEN_GUN,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 11:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.BLUE_SHIELD,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
        case 12:
          powerUp.push(
            new PowerUps(
              this.body.m_deadPosX,
              this.body.m_deadPosY,
              powerUpsSelect.RED_SHIELD,
              150
            )
          );
          this.drop_item = false;
          this.droping_powerUp = false;
          break;
      }
    }
  }

  getBossMode() {
    return this.boss_mode_set;
  }

  bossMode() {
    if (this.boss_mode_set) {
      // boss position

      //Reaching position before fight starts.
      if (this.monsterMovement == monster_movements.testingmode) {
      } else {
        if (this.bossPositionReached == false) {
          if (this.width == NaN && this.height == NaN) {
            this.width = 500;
            this.height = 500;
          }
          this.position.x = c.width / 2 - this.width / 2;
          if (this.position.y < 20) {
            this.position.y += 10;
            if (this.position.y == 20) {
              this.bossPositionReached = true;
            }
          }
        } else {
          this.movements(this.monsterMovement);
        }
      }
      //showing Boss life levels

      var barwidth_ = 700;
      var barheight_ = 25;

      //RED Backgorund
      ctx.fillStyle = "red";
      ctx.font = "30px Roboto Mono";
      ctx.fillRect(
        this.position.x - 100,
        this.position.y + 150,
        barwidth_,
        barheight_
      );

      //GREEN Background

      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) > 350
      ) {
        ctx.fillStyle = "green";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 350
      ) {
        ctx.fillStyle = "yellow";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 280
      ) {
        ctx.fillStyle = "Orange";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 180
      ) {
        ctx.fillStyle = "#ae0000";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 100
      ) {
        ctx.fillStyle = "#100000;";
      }

      ctx.font = "30px Roboto Mono";
      ctx.fillRect(
        this.position.x - 100,
        this.position.y + 150,
        Math.round((this.body.m_health / this.health_total) * barwidth_),
        barheight_
      );
      //Showing health amount.

      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) > 350
      ) {
        ctx.fillStyle = "white";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 350
      ) {
        ctx.fillStyle = "yellow";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 280
      ) {
        ctx.fillStyle = "Orange";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 180
      ) {
        ctx.fillStyle = "#ae0000";
      }
      if (
        Math.round((this.body.m_health / this.health_total) * barwidth_) <= 100
      ) {
        ctx.fillStyle = "#100000;";
      }
      ctx.font = "40px Roboto Mono";
      ctx.fillText(
        this.body.m_name + "         " + this.body.m_health,
        this.position.x - 100,
        this.position.y + 145
      );
    }
  }
  monsterView() {
    this.bossMode();
    if (!this.boss_mode_set) {
      this.monsterlifeBar();
    }
  }

  additionalAnimation() {
    this.addition_animation.setPlayersThruster(
      1,
      this.position.x,
      this.position.y + 100,
      300,
      300
    );
  }

  updateMonster(sprite_animator) {
    this.drawMonster(sprite_animator);

    if (this.boss_mode_set) {
      if (this.body.m_dead) {
        this.position.x = this.body.m_steady_deadPosX;
        this.position.y = this.body.m_steady_deadPosY;
      } else {
        this.movements(this.monsterMovement);
      }
    } else {
      this.movements(this.monsterMovement);
    }
    this.dropPowerUps(this.randomSelectingPowerUps());
    //this.additionalAnimation() addingh aditional animation to monsters not set yet
    this.shottingPos();
    this.shotting();
    this.shottingiinterval(this.shotting_interval);

    console.log(this.gun_on.length);
  }
}
