class Danger extends SpaceObject{
    constructor(x, y, degree, id){
        super(x, y, degree);
        this.id = 'danger'+id;
        this.img = 'img/planets/Dangerous.png';
    }
}