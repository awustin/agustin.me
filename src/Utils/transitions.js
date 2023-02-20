import anime from 'animejs/lib/anime.es.js';

const animGrid = {
    col1: '100%',
    col2: '0%',
    col3: '0%',
    row1: '100%',
    row2: '0%',
    row3: '0%',
}
const wheel = {
    pos: 0,
    max: 4000,
    min: 0,
};

export const onWheel = () => {
    const grid = document.getElementById("animated-grid");

    if(grid) {
        const animation = anime({
            targets: animGrid,
            col1: [
                {value: '1%', easing: 'easeOutCirc'},
                {value: '50%', easing: 'easeInQuad'},
                {},
                {value: '1%'}
            ],
            col2: [
                {value: '99%', easing: 'easeOutCirc'},
                {value: '50%', easing: 'easeInQuad'},
                {},
                {value: '1%'}
            ],
            col3: [
                {},
                {},
                {},
                {value: '98%', easing: 'easeInQuad'}
            ],
            row1: [
                {value: '100%'},
                {value: '1%', easing: 'easeInQuad'},
                {value: '1%'},
                {value: '33%'},
            ],
            row2: [
                {value: '0%'},
                {value: '99%', easing: 'easeInQuad'},
                {value: '1%'},
                {value: '34%'},
            ],
            row3: [
                {},
                {},
                {value: '98%', easing: 'easeInCirc'},
                {value: '33%', easing: 'easeInCirc'},
            ],
            round: 1,
            easing: 'linear',
            update: () => {
                grid.style.gridTemplateColumns = `${animGrid.col1} ${animGrid.col2} auto`;
                grid.style.gridTemplateRows = `${animGrid.row1} ${animGrid.row2} auto`
            },
            autoplay: false
        });

        document.addEventListener('wheel', e => {
            const dY = e.deltaY;
            const { pos, max, min } = wheel;

            if((pos > min && pos < max)
                || (pos >= max && dY < 0)
                || (pos <= min && dY > 0)
            ) {
                wheel.pos += dY;
            }

            animation.seek((wheel.pos / max) * animation.duration);
        });
    }
}