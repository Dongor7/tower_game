export default class Tower {

    constructor ({posX, posY}, {height, width}, stroke) {

        this.posX = posX;
        this.posY = posY;
        this.height = height;
        this.width = width;
        this.stroke = stroke;
        this.ctx = null;
        this.TO_RADIANS = Math.PI / 180;
        this.angle = 0;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.angle && this.rotate();

        ctx.beginPath();
        ctx.lineWidth = this.stroke;
        ctx.strokeRect(this.posX, this.posY, this.width, this.height);
        ctx.closePath();

        this.angle && this.ctx.restore();

    }

    setAngle (angle) {

        this.angle = angle;

    }

    rotate () {

        this.ctx.save();
        this.ctx.translate(this.posX, this.posY);
        this.ctx.rotate(this.angle * this.TO_RADIANS);
        this.ctx.translate(-this.posX, -this.posY);

    }

}
