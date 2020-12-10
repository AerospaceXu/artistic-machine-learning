import P5 from 'p5';

import store from '../store';

const POINT_RADIUS = 15;

export const sketchController = (p: P5) => {
  p.setup = () => {
    p.createCanvas(store.$app.innerWidth() || 0, store.$app.innerHeight() || 0);
    p.background('#111111');
  };

  p.draw = () => {
    store.clickData.forEach((item) => {
      p.fill(item.type);
      p.ellipse(item.x, item.y, POINT_RADIUS, POINT_RADIUS);
    });
  };

  p.mouseClicked = () => {
    store.clickData.push({
      x: p.mouseX,
      y: p.mouseY,
      type: store.buttonType,
    });
  };
};
