import $ from 'jquery';

import { neuralNetworkCreator } from '../../../utils/neural-network-creator';

import { ClickData } from '../interfaces/click-data';

const store: {
  $app: JQuery;
  $mask: JQuery;
  $options: {
    [key: string]: JQuery;
  };
  map: any;
  width: number;
  perWidth: number;
  height: number;
  clickData: ClickData[];
  inferData: ClickData[];
  buttonType: string;
  nn: any;
} = {
  $app: $('#app'),
  $mask: $('.mask'),
  $options: {
    x: $('#special-x'),
    y: $('#special-y'),
    x2: $('#special-x2'),
    y2: $('#special-y2'),
    xy: $('#special-xy'),
    sx: $('#special-sx'),
    cx: $('#special-cx'),
    sy: $('#special-sy'),
    cy: $('#special-cy'),
    epochs: $('#epochs'),
  },
  width: 0,
  perWidth: 0,
  height: 0,
  map: null,
  clickData: [],
  inferData: [],
  buttonType: 'red',
  nn: neuralNetworkCreator({
    task: 'classification',
    debug: true,
    layers: [
      {
        type: 'dense',
        units: 24,
        activation: 'relu',
      },
      {
        type: 'dense',
        units: 20,
        activation: 'sigmoid',
      },
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
        units: 8,
        activation: 'sigmoid',
      },
      {
        type: 'dense',
        activation: 'sigmoid',
      },
    ],
  }),
};

export default store;
