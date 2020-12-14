import store from '../store';
import { getSpecial } from '../utils/getSpecial';

export const addDataController = () => {
  console.log(`添加了${store.type}`);
  store.nn.addData(getSpecial(store.pose), [store.type]);
};
