import './style.sass';
import Game from './Game';
import Tower from './models/Tower';

const canvas = document.getElementById('canvas');

const GAME = new Game(canvas, 600, 400);

canvas.addEventListener('mousemove', (evt) => {

    GAME.mousePos.posX = evt.pageX - canvas.offsetLeft;
    GAME.mousePos.posY = evt.pageY - canvas.offsetTop;

});

const first = new Tower({
    'posX': 250,
    'posY': 150,
    'size': 50,
    'stroke': 2
});

first.setUpdateFunction(function updateFunc () {

    this.angle = Math.atan2(
        GAME.mousePos.posY - this.center.posY,
        GAME.mousePos.posX - this.center.posX
    );

});

GAME.addObject(first);

GAME.play();


