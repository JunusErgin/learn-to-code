class Danger extends SpaceObject{
    static count = 0;
    constructor(x, y, degree){
        super(x, y, degree);
        this.id = `danger${Planet.count++}`;
        this.img = 'img/planets/Dangerous.png';
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
}