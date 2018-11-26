export default class Bullet {

    constructor ({posX, posY, size, speed, angle}) {

        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.TO_RADIANS = Math.PI / 180;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.rotate();

        this.ctx.closePath();

    }

    rotate () {

        this.ctx.save();
        this.ctx.translate(this.posX, this.posY);
        this.ctx.rotate(-this.TO_RADIANS);
        this.ctx.rotate(this.angle);
        this.ctx.translate(-this.posX, -this.posY);
        this.ctx.restore();

    }

    update () {

        const xAx = Math.cos(this.angle);
        const xAy = Math.sin(this.angle);

        const rotatedGunPos = {
            'posX': this.posX * xAx - this.posY * xAy + this.posY,
            'posY': this.posX * xAy + this.posY * xAx + this.posY
        };

        const bullet = {};

        bullet.posX = rotatedGunPos.posX;
        bullet.posY = rotatedGunPos.posY;

        bullet.deltaX = xAx * this.speed;
        bullet.deltaY = xAy * this.speed;

        this.posX = bullet.deltaX;
        this.posY = bullet.deltaY;

    }

}
