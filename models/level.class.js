class Level{
    character;
    planet;
    dangers;

    constructor(character, planet, dangers){
        this.character = character;
        this.planet = planet;
        this.dangers = dangers;
    }

    update(){
        this.character.update();
        this.planet.update();
        this.dangers.forEach(danger => {
            danger.update();
        });
    }
}