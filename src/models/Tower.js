import Enemy from './Enemy';

export default class Tower {

    constructor ({posX, posY, size, stroke}) {

        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.center = {
            'posX': posX + size / 2,
            'posY': posY + size / 2
        };
        this.radius = this.size / 2 * 0.7;
        this.stroke = stroke;
        this.ctx = null;
        this.TO_RADIANS = Math.PI / 180;
        this.angle = 0;
        this.range = 150;

    }

    draw (ctx) {

        this.ctx = ctx;

        this.drawBox();
        this.drawGun();

    }

    drawBox () {

        this.ctx.beginPath();
        this.ctx.lineWidth = this.stroke;
        this.ctx.strokeRect(this.posX, this.posY, this.size, this.size);
        this.ctx.closePath();

    }

    drawGun () {

        this.ctx.beginPath();
        this.ctx.arc(
            this.center.posX,
            this.center.posY,
            this.radius,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();
        this.ctx.closePath();

        this.angle && this.rotate();

        this.drawGunpoint();

        this.angle && this.ctx.restore();

    }

    drawGunpoint () {

        this.ctx.beginPath();
        this.ctx.moveTo(this.center.posX + this.radius, this.center.posY);
        this.ctx.lineTo(this.center.posX + this.size, this.center.posY);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();

    }

    rotate () {

        this.ctx.save();
        this.ctx.translate(this.center.posX, this.center.posY);
        this.ctx.rotate(-this.TO_RADIANS);
        this.ctx.rotate(this.angle);
        this.ctx.translate(-this.center.posX, -this.center.posY);

    }

    update (GAME) {

        this.getAngle(this.getNearestEnemy(GAME));

    }

    getNearestEnemy (GAME) {

        const enemies = GAME.objects.filter((obj) => obj instanceof Enemy);
        let nearestEnemy = null;
        let nearestDistance = null;

        enemies.forEach((enemy) => {

            const distance = Math.sqrt(Math.pow(enemy.posX - this.posX, 2) +
                Math.pow(enemy.posY - this.posY, 2));

            if (distance <= this.range &&
                (nearestDistance > distance || !nearestDistance)) {

                nearestDistance = distance;
                nearestEnemy = enemy;

            }

        });

        return nearestEnemy || 0;

    }

    getAngle (enemy) {

        this.angle = Math.atan2(
            enemy.posY - this.center.posY,
            enemy.posX - this.center.posX
        );

    }

}
