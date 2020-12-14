import store from '../store';
import { getSpecial } from '../utils/getSpecial';

export const inferController = async (pose: any) => {
  return new Promise((resolve, reject) => {
    store.nn.classify(getSpecial(pose), (err: any, res: any) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};
