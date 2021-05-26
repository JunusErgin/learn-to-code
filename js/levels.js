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
        case 0:
            return level10();
        default:
            return level1();

    }
}

const descriptionMove = `
<ul>
<li><code>move();</code> bewegt das Ufo ein Feld vorwärts</li>
</ul>
`;

const descriptionTurn = `
<ul>
<li><code>turn();</code> dreht das Ufo nach rechts.</li>
</ul>
`;


const descriptionFor = `
<ul>
<li><code>for();</code> wiederholt den nachfolgenden Befehl.</li>
</ul>
`;


function level1() {

    let character = new Character(0, 3, 0);
    let planet = new Planet(0, 2, 0);
    let code = `move();`;
    let levelDescription = `<b>Loper</b> ist auf dem Weg zum Planeten der <a href="https://weiterbildung.developerakademie.com" target="_tab">Developer Akademie</a>. Verwende die Funktion <code class="text-color-da">move()</code>, um dich ein Feld nach vorne zu bewegen und den Planeten zu erreichen.
    
    ${descriptionMove}
    `;

    return new Level(character, planet, [], levelDescription, code, 5, 5);
}

function level2() {

    let character = new Character(1, 3, 0);
    let planet = new Planet(2, 2, 0);
    let levelDescription = `Bringe Loper sicher zum Planeter der <a href="https://weiterbildung.developerakademie.com" target="_tab">Developer Akademie</a>.
    Verwende hierfür <code  class="text-color-da">move();</code> und <code  class="text-color-da">turn();</code>.
    
    ${descriptionMove}
    ${descriptionTurn}
    `;

    return new Level(character, planet, [], levelDescription, '', 5, 5);
}

function level3() {

    let character = new Character(1, 4, 90);
    let danger = new Danger(6, 5, 0, 0);
    let planet = new Planet(6, 6, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [danger], levelDescription);
}

function level4() {

    let character = new Character(6, 6, 90);
    // let danger = new Danger(3, 3, 0, 0);
    // let danger2 = new Danger(4, 0, 0, 1);
    let planet = new Planet(0, 6, 0);
    let levelDescription = 'Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [], levelDescription);
}

function level5() {

    let character = new Character(0, 6, 0);
    // let danger = new Danger(3, 3, 0, 0);
    // let danger2 = new Danger(3, 0, 180, 1);
    let planet = new Planet(0, 0, 0);
    let levelDescription = 'Verwende hierfür die for-Schleife <code  class="text-color-da">for 6:</code> und <code  class="text-color-da">move()</code>, um dich zur Developer Akademie zu begeben.';

    return new Level(character, planet, [], levelDescription);
}

function level6() {

    let character = new Character(0, 0, 90);
    let danger = new Danger(3, 3, 0, 0);
    let danger2 = new Danger(4, 0, 0, 1);
    let planet = new Planet(6, 1, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [danger, danger2], levelDescription);
}

function level7() {

    let character = new Character(0, 0, 90);
    // let danger = new Danger(3, 3, 0, 0);
    // let danger2 = new Danger(3, 0, 180, 1);
    let planet = new Planet(6, 0, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [], levelDescription);
}

function level8() {

    let character = new Character(0, 0, 90);
    let danger = new Danger(3, 3, 0, 0);
    let danger2 = new Danger(4, 0, 0, 1);
    let planet = new Planet(6, 1, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [danger, danger2], levelDescription);
}

function level9() {

    let character = new Character(0, 0, 90);
    // let danger = new Danger(3, 3, 0, 0);
    // let danger2 = new Danger(3, 0, 180, 1);
    let planet = new Planet(6, 0, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [], levelDescription);
}

function level10() {

    let character = new Character(0, 0, 90);
    let danger = new Danger(3, 3, 0, 0);
    let danger2 = new Danger(4, 0, 0, 1);
    let planet = new Planet(6, 1, 0);
    let levelDescription = 'Vermeiden Sie die Meteoriten. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.';

    return new Level(character, planet, [danger, danger2], levelDescription);
}