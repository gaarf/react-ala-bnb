class World {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
    this.apples = [];
  }
}

class Apple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Snake {
  constructor(world) {
    this.x = Math.floor(world.width / 2);
    this.y = Math.floor(world.height / 2);
    this.size = 1;
  }
}

class Game {
  constructor(options = {}) {
    this.world = new World(options.width, options.height);
    this.snake = new Snake(this.world);
    this.score = 0;
    this.interval = null;
    this.level = 1;
    this.tickHandler = options.handleTick || (() => {});

    this.configureLevel();
  }

  configureLevel() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.tickHandler();
    }, 1000 / this.level);
  }
}

export default Game;
