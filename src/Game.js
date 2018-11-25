export default class Game {

    constructor (canvas, width, height) {

        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx = canvas.getContext('2d');
        this.objects = [];
        this.mousePos = {
            'posX': 0,
            'posY': 0
        };

    }

    play () {

        this.clear();
        this.update();
        this.draw();

        requestAnimationFrame(this.play.bind(this));

    }

    draw () {

        this.drawBorder();

        this.objects.forEach((object) => object.draw(this.ctx));

    }

    update () {

        this.objects.forEach((object) => {

            if (object.update) {

                object.update(this);

            }

        });

    }

    clear () {

        this.ctx.clearRect(0, 0, this.width, this.height);

    }

    addObject (obj) {

        this.objects.push(obj);

    }

    drawBorder () {

        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.stroke();

    }

}
