class Danger extends SpaceObject{
    static count = 0;
    constructor(x, y, degree){
        super(x, y, degree);
        this.id = `danger${Planet.count++}`;
        this.img = 'img/planets/Dangerous.png';
    }
}