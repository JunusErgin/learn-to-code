let degree = 90;
let rows = 7;
let cols = 7;
let x = 0;
let y = 6;
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
                func = move;
            else if (token == 'turn();')
                func = turn;

            exec(func, 1000 * iteration, row, token);
            iteration++;
        }
        repeats = 1;
    }
}

function lastLevel() {
    if (level > 1) {
        level--;
        startLevel();
    }
}

function nextLevel() {
    if (level < 4) {
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
    let t = setTimeout(function() {
        try {
            func();
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

function move() {
    console.log('move()');
    degree = degree % 360;

    if (degree == 0) {
        y--;
    }

    if (degree == 90) {
        x++;
    }

    if (degree == 180) {
        y++;
    }

    if (degree == 270) {
        x--;
    }
    updateCharacter();
}

function turn() {
    console.log('turn()');
    degree += 90;
    updateCharacter();
}

function updateCharacter() {

    remove('character');
    let id = x + 'x' + y;
    let field = document.getElementById(id);
    if (!field) {
        throw Error('Element not found');
    }
    field.innerHTML = '<img id="character" style="transform: rotate(' + degree + 'deg);" src="img/junus.png">';
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

function remove(id) {
    let elem = document.getElementById(id);
    if (elem) {
        elem.parentNode.removeChild(elem);
    }
}

function init() {
    startLevel();

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < rows; i++) {

        tbody.innerHTML += `<tr id="row${i}">
              ${generateCols(i)}
            </tr>`;
    }

    updateCharacter();
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
        level1();
    }

    if (level == 2) {
        level2();
    }
}


function level1() {
    x = 0;
    y = 6;
    degree = 90;
    write('levelDescription', 'Verwende die Funktion <code>move()</code>, um dich zur Developer Akademie zu begeben.');
}

function level2() {
    x = 2;
    y = 2;
    degree = 90;
    write('levelDescription', 'Sammel den Diamanten ein. Verwende hierfür <code>move()</code> und <code>turn()</code>.');
}

function write(id, msg) {
    let levelDescription = document.getElementById(id);
    levelDescription.innerHTML = msg;
}