export default class Bullet {

    constructor ({posX, PosY, size}) {

        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.center = {
            'posX': posX + size / 2,
            'posY': posY + size / 2
        };
        this.updateFunc = null;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();

    }

    setUpdateFunction (func) {

        this.updateFunc = func;

    }

}