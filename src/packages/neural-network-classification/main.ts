import $ from 'jquery';
import P5 from 'p5';

const $app = $('#app');

$app.css({
  width: '80vw',
  height: 'calc(80vh - 88px)',
  margin: '0 auto',
});

console.log();

const sketch = (p: P5) => {
  p.setup = () => {
    p.createCanvas($app.innerWidth() || 0, $app.innerHeight() || 0);
    p.background('#111111');
  };
};

new P5(sketch, $app[0]);
