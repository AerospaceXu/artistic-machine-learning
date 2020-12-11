import $ from 'jquery';

import store from '../store';

import { sketchInferController } from './sketch-infer-controller';
import { sketchTrainController } from './sketch-train-contoller';

const $toggleButton = $('#toggle-button');
const $trainButton = $('#train-button');
const $drawButton = $('#draw-button');

export const eventsBindController = () => {
  $toggleButton.on('click', () => {
    store.buttonType = store.buttonType === 'red' ? 'blue' : 'red';
  });

  $trainButton.on('click', sketchTrainController);

  $drawButton.on('click', sketchInferController);
};
