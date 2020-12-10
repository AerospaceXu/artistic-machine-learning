import P5 from 'p5';

import { $app } from '../store';
import { clickData } from '../store';

const POINT_RADIUS = 15;

export const sketchController = (p: P5) => {
  p.setup = () => {
    p.createCanvas($app.innerWidth() || 0, $app.innerHeight() || 0);
    p.background('#111111');
  };

  p.draw = () => {
    clickData.forEach((item) => {
      p.fill('red');
      p.ellipse(item.x, item.y, POINT_RADIUS, POINT_RADIUS);
    });
  };

  p.mouseClicked = () => {
    clickData.push({
      x: p.mouseX,
      y: p.mouseY,
      type: '',
    });
  };
};
