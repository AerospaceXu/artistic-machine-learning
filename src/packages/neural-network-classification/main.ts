import P5 from 'p5';
import $ from 'jquery';

import { $app } from './store';

import { sketchController } from './controllers/sketch-controller';
import { styleController } from './controllers/style-controller';

$(() => {
  styleController();
  new P5(sketchController, $app[0]);
});
