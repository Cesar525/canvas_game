// Define the properties of enemy and missile objects
class Enemy {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }
  
  class Missile {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }
  
  // Function to check for collisions between two objects
  function isColliding(obj1, obj2) {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    );
  }
  
  // Example game loop
  const enemies = [new Enemy(100, 100, 50, 50), new Enemy(200, 200, 50, 50)];
  const missiles = [new Missile(150, 150, 10, 10), new Missile(220, 220, 10, 10)];
  
  function gameLoop() {
    // Loop through all enemies and missiles
    for (let i = 0; i < enemies.length; i++) {
      for (let j = 0; j < missiles.length; j++) {
        // Check for collision between enemy and missile
        if (isColliding(enemies[i], missiles[j])) {
          // Remove both enemy and missile from game
          enemies.splice(i, 1);
          missiles.splice(j, 1);
        }
      }
    }
  }
  
  // Call the game loop function at a regular interval
  setInterval(gameLoop, 16.67); // 60 FPS