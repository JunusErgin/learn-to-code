class Planet extends SpaceObject {
    transformX = '12px';

    constructor(x, y, degree) {
        super(x, y, degree);
        this.id = 'planet';
        this.img = 'img/planets/6.png';
    }
}