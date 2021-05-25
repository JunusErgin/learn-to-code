let levelObj;

let rows = 7;
let cols = 7;

let timeouts = [];
let level = 1;

function start() {
    let code = document.getElementById('code');
    let tokens = code.value.split('\n');

    let repeats = 1;
    let iteration = 0;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i].trim();
        let row = i + 1;

        if (token.length == 0) {
            continue;
        }

        if (isForLoop(token)) {
            repeats = getRepetitionsFromForLoop(token);
            if (isNaN(repeats)) {
                showDialog('Bitte überprüfe die for-Schleife in Zeile ' + row + '. Schreibe z.B. <code>for 5:</code>');
                break;
            }
            repeats = +repeats;
            continue;
        }

        for (let j = 0; j < repeats; j++) {
            let func;
            if (token == 'move();')
                func = levelObj.character.move.bind(levelObj.character); //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
            else if (token == 'turn();')
                func = levelObj.character.turn.bind(levelObj.character);

            exec(func, 1000 * iteration, row, token);
            iteration++;
        }
        repeats = 1;
    }

    //TODO CHECK IF CHARACTER REACHED TARGET
    // if(levelObj.hasReachedTarget()){
    //     console.log("TARGET REACHED");
    // }else{
    //     console.log("TARGET MISSED");
    // }
}

function lastLevel() {
    if (level > 1) {
        level--;
        startLevel();
    }
}

function nextLevel() {
    if (level < 10) {
        level++;
        startLevel();
    }
}

function getRepetitionsFromForLoop(token) {
    return token.replace('for ', '').replace(':', '');
}

function isForLoop(token) {
    return token.startsWith('for ') && token.endsWith(':');
}

function exec(func, timeout, row, token) {
    let t = setTimeout(function () {
        try {
            func();
            if(levelObj.hasCollide())
                throw Error('Collision');
            
        } catch (e) {
            showDialog('Der Befehl <code>' + token + '</code> in Zeile ' + row + ' konnte nicht ausgeführt werden.');
            clearTimeouts();
        }
    }, timeout);
    timeouts.push(t);
}

function clearTimeouts() {
    timeouts.forEach(t => clearTimeout(t));
}

function showDialog(msg) {
    let errorDialog = document.getElementById('errorDialog');
    let errorMsg = document.getElementById('errorMsg');
    errorMsg.innerHTML = msg;
    errorDialog.style.display = 'flex';
}

function restart() {
    let errorDialog = document.getElementById('errorDialog');
    errorDialog.style.display = 'none';
    init();
}

function init() {
    createSpace();
    startLevel();
}

function createSpace(){
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < rows; i++) {

        tbody.innerHTML += `<tr id="row${i}">
              ${generateCols(i)}
            </tr>`;
    }
}


function generateCols(row) {
    let html = '';
    let width = 100 / cols;
    let height = 100 / rows;

    for (let i = 0; i < cols; i++) {
        html += `<td style="width: ${width}%; height: ${height}%; " id="${i}x${row}"></td>`;
    }


    return html;
}

function startLevel() {
    let levelNumber = document.getElementById('levelNumber');
    levelNumber.innerHTML = level;
    if (level == 1) {
        levelObj = level1();
    }

    if (level == 2) {
        levelObj = level2();
    }

    levelObj.update();
}

function level1() {

    let character = new Character(0, 0, 90);
    let danger = new Danger(3, 3, 0, 0);
    let danger2 = new Danger(3, 0, 180, 1);
    let planet = new Planet(6, 0, 0);

    write('levelDescription', 'Verwende die Funktion <code class="text-color-da">move()</code>, um dich zur Developer Akademie zu begeben.');

    return new Level(character, planet, [danger, danger2] );
}

function level2() {

    let character = new Character(0, 6, 90);
    let danger = new Danger(3, 3, 0, 0);
    let danger2 = new Danger(4, 0, 0, 1);
    let planet = new Planet(6, 1, 0);

    write('levelDescription', 'Sammel den Diamanten ein. Verwende hierfür <code  class="text-color-da">move()</code> und <code  class="text-color-da">turn()</code>.');
    
    return new Level(character, planet, [danger, danger2] );
}

function write(id, msg) {
    let levelDescription = document.getElementById(id);
    levelDescription.innerHTML = msg;
}

/**
 * 25.05.2021 - Moved to Character Class
 */

// function remove(id) {
//     let elem = document.getElementById(id);
//     if (elem) {
//         elem.parentNode.removeChild(elem);
//     }
// }

/**
 * 21.05.2021 - Moved to Character Class
 */

// function move() {
//     console.log('move()');
//     degree = degree % 360;

//     if (degree == 0) {
//         y--;
//     }

//     if (degree == 90) {
//         x++;
//     }

//     if (degree == 180) {
//         y++;
//     }

//     if (degree == 270) {
//         x--;
//     }
//     updateCharacter();
// }

// function turn() {
//     console.log('turn()');
//     degree += 90;
//     updateCharacter();
// }

// function updateCharacter() {

//     remove('character');
//     let id = x + 'x' + y;
//     let field = document.getElementById(id);
//     if (!field) {
//         throw Error('Element not found');
//     }
//     field.innerHTML = '<img id="character" style="transform: rotate(' + degree + 'deg);" src="img/character/muestra_pink.gif">';
// }