class Mapbuilder {
  constructor() {
    this.warning_timer_onOff = true;
    this.timerForWarning = 0;
    this.gameFrame = 0;
    this.gamestagged = 0;
    this.randomNum_mapX;
    this.randomNum_mapY;
    this.position_random = {
      x: 0,
      y: 0,
    };
    this.resetTimer = 0;

    this.counter_or_asteroids = 0;

    this.map_one = [
      new Background_Objects(100, -900, 500, 500),
      new Background_Objects(200, -900, 200, 200),
      new Background_Objects(300, -900, 200, 200),
      new Background_Objects(0, 0), // stars
      new Background_Objects(400, -900, 100, 100),
      new Background_Objects(900, -900, 900, 900),
      new Background_Objects(0, 0), // stars
      new Background_Objects(0, -900, 500, 500), // plannet
      new Background_Objects(-100, 100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(-100, -100, 100, 100),
      new Background_Objects(0, 0),
      new Background_Objects(1500, -5500, 100, 100), // bigfire asteroid
      new Background_Objects(2500, -7500, 100, 100), // bigfire asteroid
      new Background_Objects(500, -6500, 100, 100), // bigfire asteroid
    ];
  }

  randomSpawnPositionX(from, to) {
    this.randomNum_mapX = Math.floor(Math.random() * to) + from;
    return this.randomNum_mapX;
  }

  randomSpawnPositionY(from, to) {
    this.randomNum_mapY = Math.floor(Math.random() * to) + from;
    return this.randomNum_mapY;
  }

  //MAP ONE
  mapOneLoad() {
    this.gameFrame++;
    this.map_one[0].timer();
    var map_minutes = this.map_one[0].getMinutes();
    var map_seconds = this.map_one[0].getSeconds();
    this.map_one[6].drawStars(2, 1); // background image
    if (this.gameFrame > 400) {
      if (this.gameFrame > 0) {
        this.map_one[7].drawPlanet(2, 3);
        this.map_one[5].drawPlanet(1, 2);
        this.map_one[4].drawPlanet(1, 1);
      }
      if (this.gameFrame > 800) {
        this.map_one[0].drawNebulas(5);
        this.map_one[1].drawNebulasBlue(7);
        this.map_one[2].drawNebulaMulti(7);
      }
      if (this.gameFrame > 600) {
        this.map_one[8].asteroids(10);
        this.map_one[9].asteroids(10);
        this.map_one[10].asteroids(10);
        this.map_one[11].asteroids(15);
        this.map_one[12].asteroids(5);
        this.map_one[13].asteroids(3);
        this.map_one[14].asteroids(20);
        this.map_one[15].asteroids(3);
      }
    }
    this.map_one[3].drawStars(1, 2); // background image

    //pushing monsters in to map one.
    if (map_seconds >= 1) {
      this.metioriteStorm();
      // this.metioriteStorm();
      // this.map_one[19].bigAsteroidsOnFire();
      // this.map_one[20].bigAsteroidsOnFire();
      // this.map_one[21].bigAsteroidsOnFire();
      this.resetTimer++;
    }

    if (this.resetTimer == 390) {
      this.map_one[20].resetFireAsteroid();
      this.map_one[21].resetFireAsteroid();
      this.resetTimer = 0;
    }
    if (this.resetTimer == 270) {
      this.map_one[19].resetFireAsteroid();
    }
  }

  metioriteStorm() {
    var asteroid_speed = 10;
    this.counter_or_asteroids++;
    var loo_Drop = 15;
    // if(this.counter_or_asteroids == 10)
    if (true) {
      if (this.counter_or_asteroids == 10) {
        monsters.push(
          new Monsters(
            2,
            asteroid_two,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 20) {
        monsters.push(
          new Monsters(
            2,
            asteroid_three,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 30) {
        monsters.push(
          new Monsters(
            2,
            asteroid_four,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 40) {
        monsters.push(
          new Monsters(
            2,
            asteroid_five,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 50) {
        monsters.push(
          new Monsters(
            2,
            asteroid_six,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 60) {
        monsters.push(
          new Monsters(
            2,
            asteroid_seven,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 70) {
        monsters.push(
          new Monsters(
            2,
            asteroid_eight,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 80) {
        monsters.push(
          new Monsters(
            2,
            asteroid_nine,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 90) {
        monsters.push(
          new Monsters(
            2,
            asteroid_ten,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 100) {
        monsters.push(
          new Monsters(
            2,
            asteroid_eleven,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }
      }
      if (this.counter_or_asteroids == 110) {
        monsters.push(
          new Monsters(
            2,
            asteroid_one,
            this.position_random.x,
            this.position_random.y,
            100,
            "Asteroid",
            asteroid_speed,
            "orange",
            "straightDown",
            200,
            200,
            7,
            loo_Drop
          )
        );

        for (var m = 0; m < monsters.length; m++) {
          sprite_animation.push(new Animation());
          explosion_onDeath_animation.push(new Animation());
        }

        this.counter_or_asteroids = 0;
      }
    }

    if (this.warning_timer_onOff) {
      this.timerForWarning++;
      if (this.timerForWarning >= 10) {
        ctx.fillStyle = "red";
        ctx.globalAlpha = 0.1;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.globalAlpha = 1;

        ctx.fillStyle = "red";
        ctx.font = "100px Anton";
        ctx.textAlign = "center";
        ctx.fillText(
          "Warning Asteroid Strom is comming!!",
          c.width / 2,
          c.height / 2
        );
        ctx.textAlign = "start";
        if (this.timerForWarning == 20) {
          this.timerForWarning = 0;
        }
        setTimeout(() => {
          this.warning_timer_onOff = false;
        }, 5000);
      }
    }
  }

  randomisingNumbers() {
    this.position_random.y = -this.randomSpawnPositionY(100, c.height - 100);
    this.position_random.x = this.randomSpawnPositionX(100, c.width - 100);
    // console.log(this.randomSpawnPositionX(100, 500));
  }

  updateMap(mapSelected) {
    this.randomisingNumbers();

    if (mapSelected == 1) {
      this.mapOneLoad();
    }
  }
}
