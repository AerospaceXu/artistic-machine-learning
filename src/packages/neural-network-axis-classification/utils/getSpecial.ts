import store from '../store';

const isChecked = (target: JQuery) => {
  return target.is(':checked');
};

export const getSpecial = (x: number, y: number) => {
  const input: { [key: string]: number } = {};
  if (isChecked(store.$options.x)) {
    input['x'] = x;
  }
  if (isChecked(store.$options.y)) {
    input['y'] = y;
  }
  if (isChecked(store.$options.x2)) {
    input['x2'] = x ** 2;
  }
  if (isChecked(store.$options.y2)) {
    input['y2'] = y ** 2;
  }
  if (isChecked(store.$options.sx)) {
    input['sx'] = Math.sin(x);
  }
  if (isChecked(store.$options.cx)) {
    input['cx'] = Math.cos(x);
  }
  if (isChecked(store.$options.sy)) {
    input['sy'] = Math.sin(y);
  }
  if (isChecked(store.$options.cy)) {
    input['cy'] = Math.cos(y);
  }
  return input;
};
