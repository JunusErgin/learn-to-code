class Character extends SpaceObject{

    constructor(x, y, degree){
       super(x, y, degree);
       this.id = 'character';
       this.img = 'img/character/muestra_pink.gif';
    }

    /**
     * Inherit Methods From SpaceObject
     */

    // update() {

    //     this.remove();
    //     let id = this.x + 'x' + this.y;
    //     let field = document.getElementById(id);
    //     if (!field) {
    //         throw Error('Element not found');
    //     }
    //     field.innerHTML = '<img id="character" style="transform: rotate(' + this.degree + 'deg);" src="img/character/muestra_pink.gif">';
    // }

    // remove() {
    //     let elem = document.getElementById(this.id);
    //     if (elem) {
    //         elem.parentNode.removeChild(elem);
    //     }
    // }

    move() {
        console.log('move()');
        this.degree = this.degree % 360;
    
        if (this.degree == 0) {
            this.y--;
        }
    
        if (this.degree == 90) {
            this.x++;
        }
    
        if (this.degree == 180) {
            this.y++;
        }
    
        if (this.degree == 270) {
            this.x--;
        }
        this.update();
    }

    turn() {
        console.log('turn()');
        this.degree += 90;
        this.update();
    }
}