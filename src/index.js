import './style.sass';
import Tower from './models/Tower';

class Game {

    constructor (canvas, width, height) {

        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx = canvas.getContext('2d');
        this.angle = 0;
        this.tower = new Tower(
            {
                'posX': 30,
                'posY': 30
            },
            {
                'height': 50,
                'width': 50
            },
            2
        );

    }

    play () {

        this.clear();
        this.drawBorder();

        this.tower.draw(this.ctx);

        this.angle = (this.angle + 1) % 360;

        this.tower.setAngle(this.angle);

        requestAnimationFrame(this.play.bind(this));

    }


    drawBorder () {

        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.stroke();

    }

    clear () {

        this.ctx.clearRect(0, 0, this.width, this.height);

    }

}

const GAME = new Game(document.getElementById('canvas'), 600, 400);

GAME.play();
