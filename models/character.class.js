class Character{
    x = 0;
    y = 6;
    degree = 90;

    update() {

        remove('character');
        let id = this.x + 'x' + this.y;
        let field = document.getElementById(id);
        if (!field) {
            throw Error('Element not found');
        }
        field.innerHTML = '<img id="character" style="transform: rotate(' + this.degree + 'deg);" src="img/character/muestra_pink.gif">';
    }

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