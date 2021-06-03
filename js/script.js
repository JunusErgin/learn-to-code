let levelObj;
let timeouts = [];
let level = 1;
const GAME_SPEED = 800;

function start() {
    document.getElementById('nextButton').disabled = true;
    let code = document.getElementById('code');
    let tokens = code.value.split('\n');

    let repeats = 1;
    let iteration = 0;

    console.log('tokens.length ', code.value.length);
    if (tokens.length == 0 || code.value.trim().length == 0) {
        showDialog('Bitte gebe mindestens einen Befehl in den Code-Editor ein.');
    }

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

            exec(func, GAME_SPEED * iteration, row, token);
            iteration++;
        }
        repeats = 1;
    }
    setTimeout(allLinesExecuted, GAME_SPEED * (iteration - 1) + 100);
}

function allLinesExecuted() {
    console.log('allLinesExecuted', levelObj.planetReached());
    if (!levelObj.planetReached()) {
        showDialog('Der Planet wurde nicht erreicht. Bitte versuche es erneut.');
    } else {
        if (!levelObj.finished) {
            levelObj.finish();
        }
    }
    document.getElementById('nextButton').disabled = false;
}

function handleButton() {
    const nextButton = document.getElementById('nextButton');
    if (nextButton.innerHTML == 'Play') {
        start();
    } else {
        nextLevel();
    }
}

function lastLevel() {
    if (level > 1) {
        level--;
        init();
    }
}

function nextLevel() {
    let nextButton = document.getElementById('nextButton');
    nextButton.innerHTML = 'Play';
    nextButton.disabled = false;
    document.getElementById('code').disabled = false;
    document.getElementById('code').style = 'opacity: 1;';

    if (level < 10) {
        level++;
        init();
    }
}

function getRepetitionsFromForLoop(token) {
    return token.replace('for ', '').replace(':', '');
}

function isForLoop(token) {
    return token.startsWith('for ') && token.endsWith(':');
}

function exec(func, timeout, row, token) {

    let t = setTimeout(function() {
        try {
            if (levelObj.planetReached()) {

                levelObj.finish();
            } else {
                func();
                if (levelObj.hasCollision()) {
                    throw Error('Collision');
                }
            }

            levelObj.moveEnemies();

        } catch (e) {
            console.log('Error', e);
            if (e.message == 'EnemyCollision') {
                showDialog('Du wurdest von einem anderen Ufo erwischt!!');
            } else {
                showDialog('Der Befehl <code>' + token + '</code> in Zeile ' + row + ' konnte nicht ausgeführt werden.');
            }
            clearTimeouts();
        }
    }, timeout);
    timeouts.push(t);
}

function clearTimeouts() {
    timeouts.forEach(t => clearTimeout(t));
}

function showDialog(msg) {
    if (!dialogIsOpen()) {
        let errorDialog = document.getElementById('errorDialog');
        let errorMsg = document.getElementById('errorMsg');
        errorMsg.innerHTML = msg;
        errorDialog.style.display = 'flex';
    }
}

function dialogIsOpen() {
    let errorDialog = document.getElementById('errorDialog');
    return errorDialog.style.display == 'flex';
}

function restart() {
    let errorDialog = document.getElementById('errorDialog');
    errorDialog.style.display = 'none';
    init();
}

function init() {
    startLevel();
}

function createSpace() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < levelObj.rows; i++) {

        tbody.innerHTML += `<tr id="row${i}">
              ${generateCols(i)}
            </tr>`;
    }
}


function generateCols(row) {
    let html = '';
    let width = 100 / levelObj.cols;
    let height = 100 / levelObj.rows;

    for (let i = 0; i < levelObj.cols; i++) {
        html += `<td style="width: ${width}%; height: ${height}%; " id="${i}x${row}"></td>`;
    }


    return html;
}

function startLevel() {
    let levelNumber = document.getElementById('levelNumber');
    levelNumber.innerHTML = level;

    levelObj = getLevel(level);
    levelObj.write('levelDescription', levelObj.levelDescription);
    createSpace();
    levelObj.update();
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