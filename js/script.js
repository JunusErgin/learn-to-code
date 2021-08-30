let levelObj;
let timeouts = [];
let level = 1;
const GAME_SPEED = 800;
let maxLevel;
let finishedLevels = 0;

function start() {
    document.getElementById('nextButton').disabled = true;
    let code = document.getElementById('code');
    let tokens = code.value.split('\n');

    let repeats = 1;
    let iteration = 0;

    console.log('tokens.length ', code.value.length);
    if (tokens.length == 0 || code.value.trim().length == 0) {
        showDialog('Bitte gebe mindestens einen Befehl in den Code-Editor ein.', 'Oh nein!');
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
                showDialog('Bitte überprüfe die for-Schleife in Zeile ' + row + '. Schreibe z.B. <code>for 5:</code>', 'Oh nein!');
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
            else if (token == 'stay();')
                func = levelObj.character.stay.bind(levelObj.character);

            exec(func, GAME_SPEED * iteration, row, token);
            iteration++;
        }
        repeats = 1;
    }
    let t = setTimeout(allLinesExecuted, GAME_SPEED * (iteration - 1) + 100);
    timeouts.push(t);
}

function allLinesExecuted() {
    console.log('allLinesExecuted', levelObj.planetsReached());
    if (!levelObj.planetsReached()) {
        if(levelObj.targetsToReach > 1){
            showDialog('Die Planeten wurden nicht erreicht. Bitte versuche es erneut.', 'Oh nein!');
        }
        else{
            showDialog('Der Planet wurde nicht erreicht. Bitte versuche es erneut.', 'Oh nein!');
        }
        
    } else {
        if (!levelObj.finished) {
            levelObj.finish();
            finishedLevels++;
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
    if(finishedLevels >= level){
        let nextButton = document.getElementById('nextButton');
        nextButton.innerHTML = 'Play';
        nextButton.disabled = false;
        document.getElementById('code').disabled = false;
        document.getElementById('code').style = 'opacity: 1;';
    
        if (level < maxLevel) {
            level++;
            init();
        }else{
            level = 1;
            showDialog('Herzlichen Glückwunsch! Du hast alle Level durchgespielt. Jetzt bist du bereit, eine richtige Programmiersprache zu lernen!', 'HURRAA!' );
        }
    }
}

function getRepetitionsFromForLoop(token) {
    return token.replace('for ', '').replace(':', '');
}

function isForLoop(token) {
    return token.startsWith('for ') && token.endsWith(':');
}

function exec(func, timeout, row, token) {
    // console.log("EXECUTE: ", { func: func, timeout: timeout, row: row, token: token });

    let t = setTimeout(function () {
        try {
            
            if (levelObj.planetsReached()) {
                levelObj.finish();
                finishedLevels++;
                clearTimeouts();
            } else {     
                levelObj.checkPlanetReached();     
                if (levelObj.isCollidingEnemy()) {
                    throw Error('EnemyCollision');
                }
                if (levelObj.isCollidingDanger()) {
                    throw Error('DangerCollision');
                }
                func();
                levelObj.checkPlanetReached();    
                if (levelObj.isCollidingEnemy()) {
                    throw Error('EnemyCollision');
                }
                if (levelObj.isCollidingDanger()) {
                    throw Error('DangerCollision');
                }
            }
            levelObj.moveEnemies();
            levelObj.moveMeteorites();
        } catch (e) {

            console.error('Error', e);
            if (e.message == 'EnemyCollision') {
                showDialog('Du wurdest von einem anderen Ufo erwischt!!', 'Oh nein!');
            } else if (e.message == 'DangerCollision') {
                showDialog('Du hast ein Meteorit erwischt!!', 'Oh nein!');
            } else {
                showDialog('Der Befehl <code>' + token + '</code> in Zeile ' + row + ' konnte nicht ausgeführt werden.', 'Oh nein!');
            }
            clearTimeouts();
            document.getElementById('nextButton').disabled = false;
        }
    }, timeout);
    timeouts.push(t);
}

function clearTimeouts() {
    timeouts.forEach(t => clearTimeout(t));
}

function showDialog(msg, title) {
    if (!dialogIsOpen()) {
        let dialog = document.getElementById('dialog');
        let dialogMsg = document.getElementById('dialogMsg');
        let dialogTitle = document.getElementById('dialogTitle');
        dialogTitle.innerHTML = title;
        dialogMsg.innerHTML = msg;
        dialog.style.display = 'flex';
    }
}

function dialogIsOpen() {
    let dialog = document.getElementById('dialog');
    return dialog.style.display == 'flex';
}

function restart() {
    let dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
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

window.onload = function (){
    let urlParams = new URLSearchParams(window.location.search);
    let premium = urlParams.get('premium');
    maxLevel = premium? 15 : 10;
    document.getElementById("max-levels").innerHTML = `${maxLevel}`;
    init();
}