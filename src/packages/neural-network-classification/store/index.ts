import $ from 'jquery';

import { neuralNetworkCreator } from '../../../utils/neural-network-creator';

import { ClickData } from '../interfaces/click-data';

const store: {
  $app: JQuery;
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
  width: 0,
  perWidth: 0,
  height: 0,
  map: null,
  clickData: [],
  inferData: [],
  buttonType: 'red',
  nn: neuralNetworkCreator({
    task: 'classification',
    debug: false,
    layers: [
      {
        type: 'dense',
        units: 16,
        activation: 'relu',
      },
      {
        type: 'dense',
        units: 16,
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
