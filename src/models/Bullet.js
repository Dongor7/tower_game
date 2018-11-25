export default class Bullet {

    constructor ({posX, posY, size}) {

        this.posX = posX;
        this.posY = posY;
        this.size = size;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();

    }

}
