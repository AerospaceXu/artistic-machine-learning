import store from '../store';
import { getSpecial } from '../utils/getSpecial';

export const sketchInferController = async () => {
  const { nn, width, height } = store;
  const COL_NUMBER = 30;
  const perWidth = width / COL_NUMBER;
  store.perWidth = perWidth;
  const current = { x: 0, y: 0 };
  let index = 1;
  do {
    const label = (await new Promise((resolve, reject) => {
      const xM = store.map(current.x, 0, width, -5, 5);
      const yM = store.map(current.y, 0, height, -5, 5);
      nn.classify(getSpecial(xM, yM), (err: any, res: any) => {
        if (err) {
          reject('black');
        }
        resolve(res[0].label);
      });
    })) as string;
    store.inferData.push({ ...current, type: label });

    if (index % COL_NUMBER !== 0) {
      current.x += perWidth;
    } else {
      current.x = 0;
      current.y += perWidth;
    }
    index++;
  } while (current.y <= height);
};
