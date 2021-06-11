class Danger extends SpaceObject {
    static count = 0;
    isMoving;
    constructor(x, y, degree, isMoving = false) {
        super(x, y, degree);
        this.id = `danger${Planet.count++}`;
        this.img = 'img/planets/Dangerous.png';
        this.isMoving = isMoving;
    }

    move() {
        if (this.isMoving) {
            console.log('move()');
            this.degree = this.degree % 360;

            if (this.degree == 0) {
                if( !this.fieldIsOk(this.x, this.y - 1))
                    this.y = levelObj.rows - 1;
                else
                    this.y--;
            }

            if (this.degree == 90) {
                if(!this.fieldIsOk(this.x + 1, this.y))
                    this.x = 0;
                else
                    this.x++;
            }

            if (this.degree == 180) {
                if(!this.fieldIsOk(this.x, this.y + 1))
                    this.y = 0;
                else
                    this.y++;
            }

            if (this.degree == 270) {
                if(!this.fieldIsOk(this.x - 1, this.y))
                    this.x = levelObj.cols - 1;
                else
                    this.x--;
            }
            this.update();
        }
    }

    fieldIsOk(x, y) {
        let id = x + 'x' + y;
        let field = document.getElementById(id);

        if(field){
            return true;
        }

        // if (inner.includes('muestra_pink.gif')) {
        //     return true;
        // }

        // if (inner.trim().length != 0) {
        //     return true;
        // }

        return false;
    }
}