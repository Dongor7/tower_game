import './style.sass';
import Game from './Game';
import Tower from './models/Tower';
import Enemy from './models/Enemy';

const canvas = document.getElementById('canvas');

const GAME = new Game(canvas, 600, 400);

canvas.addEventListener('mousemove', (evt) => {

    GAME.mousePos.posX = evt.pageX - canvas.offsetLeft;
    GAME.mousePos.posY = evt.pageY - canvas.offsetTop;

});

const tower = new Tower({
    'posX': 450,
    'posY': 250,
    'size': 50,
    'stroke': 2
});

const tower2 = new Tower({
    'posX': 250,
    'posY': 20,
    'size': 50,
    'stroke': 2
});

const enemy = new Enemy({
    'posX': 150,
    'posY': 50,
    'radius': 15
});

const enemy2 = new Enemy({
    'posX': 150,
    'posY': 150,
    'radius': 15
});

GAME.addObject(tower);
GAME.addObject(tower2);
GAME.addObject(enemy);
GAME.addObject(enemy2);

GAME.play();


