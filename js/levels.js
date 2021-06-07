function getLevel(level) {
    switch (level) {
        case 1:
            return level1();
        case 2:
            return level2();
        case 3:
            return level3();
        case 4:
            return level4();
        case 5:
            return level5();
        case 6:
            return level6();
        case 7:
            return level7();
        case 8:
            return level8();
        case 9:
            return level9();
        case 10:
            return level10();
        default:
            return level1();

    }
}

const descriptionMove = `
<ul>
<li><code>move();</code> bewegt das Ufo ein Feld vorwärts.</li>
</ul>
`;

const descriptionTurn = `
<ul>
<li><code>turn();</code> dreht das Ufo nach rechts.</li>
</ul>
`;


const descriptionFor = `
<ul>
<li><code>for x:</code> wiederholt den nachfolgenden Befehl x mal. Ersetze x durch eine Zahl.</li>
</ul>
`;

const descriptionStay = `
<ul>
<li><code>stay();</code> bleibt das Ufo stehen.</li>
</ul>
`;


function level1() {

    let character = new Character(0, 3, 0);
    let planets = [new Planet(0, 2, 0)];
    let code = `move();`;
    let levelDescription = `<b>Loper</b> ist auf dem Weg zum Planeten der <a href="https://weiterbildung.developerakademie.com" target="_tab">Developer Akademie</a>. Verwende die Funktion <code class="text-color-da">move()</code>, um dich ein Feld nach vorne zu bewegen und den Planeten zu erreichen.
    
    ${descriptionMove}
    `;

    return new Level(character, planets, [], levelDescription, code, 5, 5);
}

function level2() {

    let character = new Character(1, 3, 0);
    let planets = [new Planet(2, 2, 0)];
    let levelDescription = `Bringe Loper sicher zum Planeter der <a href="https://weiterbildung.developerakademie.com" target="_tab">Developer Akademie</a>.
    Verwende hierfür <code  class="text-color-da">move();</code> und <code  class="text-color-da">turn();</code>.
    
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, [], levelDescription, '', 5, 5);
}

function level3() {

    let character = new Character(1, 2, 90);
    let dangers = [new Danger(3, 2, 0), new Danger(4, 2, 0)];
    let planets = [new Planet(4, 3, 0)];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren. 
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, dangers, levelDescription, '', 5, 5);
}

function level4() {

    let character = new Character(1, 2, 0);
    let dangers = [new Danger(0, 1, 0), new Danger(1, 1, 0), new Danger(2, 1, 0), new Danger(2, 2, 0), new Danger(2, 3, 0)];
    let planets = [new Planet(0, 4, 0)];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren. 
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, dangers, levelDescription, '', 5, 5);
}

function level5() {

    let character = new Character(0, 6, 0);
    let planets = [new Planet(0, 0, 0)];
    let levelDescription = `Erreiche den Platen, <b>ohne</b> den Befehl <code>move();</code> mehrfach auszuführen. Verwende hierfür die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">move()</code>, um dich zur Developer Akademie zu begeben.
    ${descriptionFor}    
    ${descriptionMove}
    `;

    return new Level(character, planets, [], levelDescription);
}

function level6() {

    let character = new Character(0, 0, 90);
    let dangersRow = [new Danger(0, 1, 0), new Danger(1, 1, 0), new Danger(2, 1, 0), new Danger(3, 1, 0), new Danger(4, 1, 0)];
    let dangersRow2 = [new Danger(0, 5, 0), new Danger(1, 5, 0), new Danger(2, 5, 0), new Danger(3, 5, 0), new Danger(4, 5, 0)];
    let dangersCol = [new Danger(5, 1, 0), new Danger(5, 2, 0), new Danger(5, 3, 0), new Danger(5, 4, 0), new Danger(5, 5, 0)];
    let allDangers = dangersCol.concat(dangersRow, dangersRow2);
    let planets = [new Planet(0, 6, 0)];
    let levelDescription = `Erreiche den Platen, <b>ohne</b> den Befehl <code>move();</code> mehrfach auszuführen und <b>ohne</b> mit einem Meteoriten zu kollidieren. Verwende hierfür die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>, um dich zur Developer Akademie zu begeben.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, allDangers, levelDescription);
}

function level7() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 0, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}`;
    let dangers = [new Danger(1, 3, 0)];

    let level = new Level(character, planets, dangers, levelDescription);

    level.enemies.push(new Enemy(2, 3));
    level.enemies.push(new Enemy(3, 5));

    return level;
}

function level8() {

    /**
     * Winning moves 
for 3:
stay();
for 6:
move();
turn();
for 6:
move();
turn();
for 5:
move(); 
     */

    let character = new Character(6, 0, 180);
    let planets = [new Planet(0, 1, 0), new Planet(0, 6, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, [], levelDescription);

    level.enemies.push(new Enemy(0, 0));
    level.enemies.push(new Enemy(1, 6));

    return level;
}

function level9() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 6, 0)];
    let dangers = [new Danger(6, 0, 0), new Danger(0, 1, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    level.enemies.push(new Enemy(5, 6));

    return level;
}

function level10() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 1, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, [], levelDescription);

    level.enemies.push(new Enemy(6, 0));

    return level;
}