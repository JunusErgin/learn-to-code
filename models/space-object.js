class SpaceObject {
    x;
    y;
    degree;
    scale = 1.3;
    id;
    img;
    transformX = '0px';
    constructor(x, y, degree) {
        this.x = x;
        this.y = y;
        this.degree = degree;
    }

    update() {

        this.remove();
        let id = this.x + 'x' + this.y;
        let field = document.getElementById(id);
        if (!field) {
            throw Error('Element not found');
        }
        field.innerHTML = `<img class="space-object" id="${this.id}" style="transform: rotate(${this.degree}deg) scale(${this.scale}) translateX(${this.transformX});" src="${this.img}">`;
    }

    remove() {
        let elem = document.getElementById(this.id);
        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    }
}