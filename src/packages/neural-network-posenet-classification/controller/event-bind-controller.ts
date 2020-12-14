import $ from 'jquery';
import { addDataController } from './add-data-controller';
import { trainController } from './train-controller';
import store from '../store';

export const eventBindController = () => {
  $('#add-example').on('click', () => {
    addDataController();
  });
  $('#change').on('click', () => {
    const nextColor = store.type === 'red' ? 'blue' : 'red';
    store.type = nextColor;
    $('#add-example').text(`添加数据${nextColor}`);
  });
  $('#train').on('click', () => {
    trainController();
  });
  $('#save').on('click', () => {
    store.nn.saveData();
  })
};
