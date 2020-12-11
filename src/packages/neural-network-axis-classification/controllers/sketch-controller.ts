import P5 from 'p5';

import store from '../store';

const POINT_RADIUS = 15;

export const sketchController = (p: P5) => {
  p.setup = () => {
    store.map = p.map;
    const width = store.$app.innerWidth() || 0;
    const height = store.$app.innerHeight() || 0;
    store.width = width;
    store.height = height;
    p.createCanvas(width, height);
    p.background('#111111');
  };

  p.draw = () => {
    p.background('#111111');
    const { inferData, perWidth } = store;
    if (inferData.length > 0) {
      p.noStroke();
      inferData.forEach((item) => {
        p.fill(item.type);
        p.rect(item.x, item.y, perWidth, perWidth);
      });
    }
    p.stroke(0);
    p.strokeWeight(2);
    store.clickData.forEach((item) => {
      p.fill(item.type);
      const xM = p.map(item.x, -5, 5, 0, p.width);
      const yM = p.map(item.y, -5, 5, 0, p.height);
      p.ellipse(xM, yM, POINT_RADIUS, POINT_RADIUS);
    });
  };

  p.mouseClicked = () => {
    const x = p.map(p.mouseX, 0, p.width, -5, 5);
    const y = p.map(p.mouseY, 0, p.height, -5, 5);
    store.clickData.push({
      x,
      y,
      type: store.buttonType,
    });
  };
};
