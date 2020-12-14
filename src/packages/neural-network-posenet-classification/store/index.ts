import $ from 'jquery';
// @ts-ignore
import ml5 from 'ml5';

const store: {
  $app: JQuery;
  $mask: JQuery;
  isTrained: boolean;
  nn: any;
  width: number;
  height: number;
  pose: any;
  type: string;
} = {
  $app: $('#app'),
  $mask: $('.mask'),
  isTrained: false,
  width: 0,
  height: 0,
  pose: [],
  nn: ml5.neuralNetwork({
    task: 'classification',
    debug: true,
    layers: [
      {
        type: 'dense',
        units: 16,
        activation: 'relu',
      },
      {
        type: 'dense',
        units: 12,
        activation: 'sigmoid',
      },
      {
        type: 'dense',
        activation: 'sigmoid',
      },
    ],
  }),
  type: 'blue',
};

export default store;
