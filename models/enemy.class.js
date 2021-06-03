class Enemy extends SpaceObject {
    steps = 0;
    static count = 0;

    constructor(x, y, degree) {
        super(x, y, degree);
        this.id = 'enemy' + Enemy.count++;
        let img = Enemy.count % 2 == 0 ? 'muestra_green.gif' : 'muestra_yellow.gif';
        this.img = 'img/character/' + img;
    }

    move(character) {
        if (this.steps % 2 == 0) {
            if (!this.moveX(character)) {
                this.moveY(character);
            }
        } else {
            this.moveY(character);
        }
        this.steps++;

        if (character.x == this.x && character.y == this.y) {
            throw new Error('EnemyCollision');
        }

        this.update();

    }

    fieldIsOk(x, y) {
        let id = x + 'x' + y;
        let inner = document.getElementById(id).innerHTML;

        if (inner.includes('muestra_pink.gif')) {
            return true;
        }

        if (inner.trim().length == 0) {
            return true;
        }

        return false;
    }

    moveX(character) {

        if (character.x > this.x) {
            if (this.fieldIsOk(this.x + 1, this.y)) {
                this.x++;
                console.log('Moving right')
                return true;
            }
        }

        if (character.x < this.x) {
            if (this.fieldIsOk(this.x - 1, this.y)) {
                this.x--;
                console.log('Moving left')
                return true;
            }
        }

        return false;
    }


    moveY(character) {
        if (character.y > this.y) {
            if (this.fieldIsOk(this.x, this.y + 1)) {
                this.y++;
                console.log('Moving down')
                return true;
            }
        }

        if (character.y < this.y) {
            if (this.fieldIsOk(this.x, this.y - 1)) {
                this.y--;
                console.log('Moving up')
                return true;
            }
        }

        return false;
    }

}