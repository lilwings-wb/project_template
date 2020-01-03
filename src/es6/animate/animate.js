export class Animate {

    constructor({timing, duration, draw}) {
        this.listAnimation = {
            'ease-out': (timeFraction) => { return 1 - Math.pow(1 - timeFraction, 1.675); }
        };

        this.animate(this.listAnimation[timing], duration, draw);
    }

    animate(timing, duration, draw) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }
}
