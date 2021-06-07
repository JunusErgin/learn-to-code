class Planet extends SpaceObject {
    transformX = '12px';
    static count = 0;
    constructor(x, y, degree) {
        super(x, y, degree);
        this.id = `planet${Planet.count++}`;
        let img = Planet.count % 2 == 0 ? '6.png' : '7.png';
        this.img = 'img/planets/' + img;
    }
}