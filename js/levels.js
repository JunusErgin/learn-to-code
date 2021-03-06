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
        case 11:
            return level11();
        case 12:
            return level12();
        case 13:
            return level13();
        case 14:
            return level14();
        case 15:
            return level15();
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
<li><code>stay();</code> Das Ufo bleibt stehen.</li>
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
    let levelDescription = `Bringe Loper sicher zum Planeten der <a href="https://weiterbildung.developerakademie.com" target="_tab">Developer Akademie</a>.
    Verwende hierfür <code  class="text-color-da">move();</code> und <code  class="text-color-da">turn();</code>.
    
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, [], levelDescription, '', 5, 5);
}

/**
 * 
move();
turn();
move();
turn();
turn();
turn();
move();
move();
 */

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

/**
 * 
turn();
turn();
move();
move();
turn();
move();
 */

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
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> den Befehl <code>move();</code> mehrfach auszuführen. Verwende hierfür die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">move()</code>, um dich zur Developer Akademie zu begeben.
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
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> den Befehl <code>move();</code> mehrfach auszuführen und <b>ohne</b> mit einem Meteoriten zu kollidieren. Verwende hierfür die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>, um dich zur Developer Akademie zu begeben.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planets, allDangers, levelDescription);
}

function level7() {

    /**
     * Winning Moves 1
 for 2:
move();
turn();
move();
for 3:
turn();
for 4:
move();
for 3:
turn();
move();
     */

    /**
     * Winning Moves 2
    turn();
    move();
    for 3:
    turn();
    for 6:
    move();
    for 3:
    turn();
    move();
    
     */

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 0, 0)];
    let dangers = [new Danger(3, 0, 0), new Danger(5, 5, 0), new Danger(6, 5, 0), new Danger(4, 5, 0), new Danger(3, 5, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}`;

    let level = new Level(character, planets, dangers, levelDescription);

    level.enemies.push(new Enemy(5, 6));
    level.enemies.push(new Enemy(6, 6));

    return level;
}

function level8() {

    /**
     * Winning moves 
for 4:
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

/**
 * Test wihout enemies
 * turn();
for 6: 
move();
for 3:
turn();
for 5:
move();
 */

    let character = new Character(6, 0, 180);
    let planets = [new Planet(0, 1, 0), new Planet(0, 5, 0)];
    let dangers = [new Danger(1, 1, 0), new Danger(1, 2, 0), new Danger(1, 3, 0), new Danger(1, 4, 0), new Danger(1, 5, 0)];
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche beide Planeten, bevor Sie dich erreichen! Ein Gegner bewegt sich nur jeden zweiten Zug.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    level.enemies.push(new Enemy(0, 0));
    level.enemies.push(new Enemy(0, 6));

    return level;
}

function level9() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 3, 0)];
    let dangersRow = [new Danger(0, 1, 0), new Danger(1, 2, 0), new Danger(2, 1, 0), new Danger(3, 2, 0), new Danger(4, 1, 0)];
    let dangersRow2 = [new Danger(0, 5, 0), new Danger(1, 4, 0), new Danger(2, 5, 0), new Danger(3, 4, 0), new Danger(4, 5, 0)];
    let dangersCol = [new Danger(5, 1, 0), new Danger(5, 2, 0), new Danger(5, 3, 0), new Danger(5, 4, 0), new Danger(5, 5, 0)];
    let allDangers = dangersCol.concat(dangersRow, dangersRow2);
    let levelDescription = `Gegner versuchen dich zu fangen. Erreiche den Planeten, bevor Sie dich erreichen!
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, allDangers, levelDescription);

    level.enemies.push(new Enemy(0, 6));

    return level;
}

/**
 * 
for 6:
  move();
turn();
for 6:
  move();
turn();
for 6:
  move();
turn();
for 4:
  move();
turn();
for 4:
  move();
turn();
for 2:
  move();
turn();
for 2:
  move();

 */

function level10() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(2, 4, 0)];
    let dangers = [
        new Danger(0, 1, 0),
        new Danger(1, 1, 0),
        new Danger(2, 1, 0),
        new Danger(3, 1, 0),
        new Danger(4, 1, 0),

        new Danger(5, 1, 0),
        new Danger(5, 2, 0),
        new Danger(5, 3, 0),
        new Danger(5, 4, 0),
        new Danger(5, 5, 0),

        new Danger(1, 5, 0),
        new Danger(2, 5, 0),
        new Danger(3, 5, 0),
        new Danger(4, 5, 0),

        new Danger(1, 4, 0),
        new Danger(1, 3, 0),

        new Danger(2, 3, 0),
        new Danger(3, 3, 0)


    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    // level.enemies.push(new Enemy(6, 0));

    return level;
}

function level11() {

    let character = new Character(0, 0, 90);
    let planets = [new Planet(6, 6, 0)];
    let dangers = [
        new Danger(0, 1, 90, true),
        new Danger(6, 5, 270, true)
    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.<br>
    <b>Seien Sie jetzt vorsichtig!</b> Einige Meteoriten bewegen sich.<br>
    Verwende hierfür zum Beispiel die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">stay()</code> um ihre Bewegungen zu merken.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    // level.enemies.push(new Enemy(6, 0));

    return level;
}

function level12() {

    /**
     * Winning moves
for 3:
move();
turn();
for 3:
move();
turn();
stay();
stay();
for 3:
move();
turn();
move();
     */

    let character = new Character(0, 6, 0);
    let planets = [new Planet(2, 6, 0)];
    let dangers = [
        new Danger(1, 6, 0),
        new Danger(1, 5, 0),
        new Danger(2, 5, 0),

        new Danger(5, 4, 270, true),

    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.<br>
    <b>Seien Sie jetzt vorsichtig!</b> Einige Meteoriten bewegen sich.<br>
    Verwende hierfür zum Beispiel die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">stay()</code> um ihre Bewegungen zu merken.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    return level;
}

function level13() {


    let character = new Character(0, 6, 90);
    let planets = [new Planet(6, 0, 0)];
    let dangers = [
        new Danger(0, 5, 0),
        new Danger(1, 5, 0),
        new Danger(1, 4, 0),

        new Danger(3, 6, 0),
        new Danger(3, 4, 0),
        new Danger(5, 4, 0),
        new Danger(5, 5, 0),

        new Danger(1, 2, 0),
        new Danger(2, 2, 0),
        new Danger(1, 1, 0),

        new Danger(3, 0, 0),

        new Danger(3, 2, 0),
        new Danger(5, 2, 0),
        new Danger(6, 1, 0),

        new Danger(4, 4, 0)


    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    return level;
}

function level14() {

    let character = new Character(0, 6, 0);
    let planets = [new Planet(3, 3, 0)];
    let dangers = [
        new Danger(1, 3, 0, true),
        new Danger(5, 3, 180, true),

        new Danger(2, 4, 0),
        new Danger(4, 4, 0),

        new Danger(2, 2, 0),
        new Danger(4, 2, 0),

        new Danger(3, 5, 270, true),
        new Danger(3, 1, 90, true)

    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.<br>
    <b>Seien Sie jetzt vorsichtig!</b> Einige Meteoriten bewegen sich.<br>
    Verwende hierfür zum Beispiel die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">stay()</code> um ihre Bewegungen zu merken.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    return level;
}

/**
 * 
 * 
for 2:
stay();
for 2:
move();
for 5:
stay();
for 2:
move();
for 5:
stay();
for 2:
move();
 */

function level15() {


    let character = new Character(3, 0, 180);
    let planets = [new Planet(3, 6, 0)];
    let dangers = [

        new Danger(2, 1, 90, true),
        new Danger(3, 1, 90, true),
        new Danger(4, 1, 90, true),
        new Danger(5, 1, 90, true),
        new Danger(6, 1, 90, true),

        new Danger(2, 3, 270, true),
        new Danger(3, 3, 270, true),
        new Danger(4, 3, 270, true),
        new Danger(1, 3, 270, true),
        new Danger(0, 3, 270, true),

        new Danger(2, 5, 90, true),
        new Danger(3, 5, 90, true),
        new Danger(4, 5, 90, true),
        new Danger(5, 5, 90, true),
        new Danger(6, 5, 90, true),
    ];
    let levelDescription = `Erreiche den Planeten, <b>ohne</b> mit einem Meteoriten zu kollidieren.<br>
    <b>Seien Sie jetzt vorsichtig!</b> Einige Meteoriten bewegen sich.<br>
    Verwende hierfür zum Beispiel die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">stay()</code> um ihre Bewegungen zu merken.
    ${descriptionFor}    
    ${descriptionMove}
    ${descriptionTurn}
    ${descriptionStay}`;

    let level = new Level(character, planets, dangers, levelDescription);

    return level;
}