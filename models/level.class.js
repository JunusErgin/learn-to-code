class Level{
    character;
    planet;
    dangers;
    levelDescription;

    constructor(character, planet, dangers, levelDescription){
        this.character = character;
        this.planet = planet;
        this.dangers = dangers;
        this.levelDescription = levelDescription;
    }

    update(){
        this.character.update();
        this.planet.update();
        this.dangers.forEach(danger => {
            danger.update();
        });
    }

    hasReachedTarget(){
        return this.character.x == this.planet.x && this.character.y == this.planet.y;
    }

    hasCollide(){
        return this.dangers.some( danger => danger.x == this.character.x && danger.y == this.character.y);
    }

    write(id, msg) {
        let levelDescription = document.getElementById(id);
        levelDescription.innerHTML = msg;
    }
}