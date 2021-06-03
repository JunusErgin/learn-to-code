class Level {
    character;
    planet;
    dangers;
    levelDescription;
    code = '';
    rows = 7;
    cols = 7;
    finished = false;
    enemies = [];

    constructor(character, planet, dangers, levelDescription, code, rows, cols) {
        this.character = character;
        this.planet = planet;
        this.dangers = dangers;
        this.levelDescription = levelDescription;
        this.code = code || '';
        this.rows = rows || this.rows;
        this.cols = cols || this.cols;
    }

    update() {
        this.character.update();
        this.planet.update();
        this.dangers.forEach(d => d.update());
        this.enemies.forEach(e => e.update());
        // document.getElementById('code').value = this.code;
    }

    moveEnemies() {
        this.enemies.forEach(e => setTimeout(() => {
            e.move(this.character);
        }, 300));
    }

    hasReachedTarget() {
        return this.character.x == this.planet.x && this.character.y == this.planet.y;
    }

    hasCollision() {
        return this.dangers.some(danger => danger.x == this.character.x && danger.y == this.character.y);
    }

    planetReached() {
        return this.planet.x == this.character.x && this.planet.y == this.character.y
    }


    write(id, msg) {
        let levelDescription = document.getElementById(id);
        levelDescription.innerHTML = msg;
    }

    finish() {
        document.getElementById('code').disabled = true;
        document.getElementById('code').style = 'opacity: 0.6;';
        let button = document.getElementById('nextButton');
        button.disabled = false;
        button.innerHTML = 'Weiter';
        button.style = 'transform: scale(1.5) rotate(10deg)';
        this.finished = true;
        startConfetti();
        setTimeout(() => {
            button.style = 'transform: scale(1.5) rotate(-10deg)';
        }, 200);


        setTimeout(() => {
            button.style = 'transform: scale(1.0)';
            stopConfetti();
        }, 500);
    }
}