import $ from 'jquery';
import { addDataController } from './add-data-controller';
import { trainController } from './train-controller';
import store from '../store';

export const eventBindController = () => {
  $('#add-example').on('click', () => {
    addDataController();
  });
  $('#change').on('click', () => {
    store.type = store.type === 'red' ? 'blue' : 'red';
  });
  $('#train').on('click', () => {
    trainController();
  });
};
