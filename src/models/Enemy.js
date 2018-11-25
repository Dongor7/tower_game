export default class Enemy {

    constructor ({posX, posY, radius}) {

        this.posX = posX;
        this.posY = posY;
        this.radius = radius;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        this.ctx.closePath();

    }

}
