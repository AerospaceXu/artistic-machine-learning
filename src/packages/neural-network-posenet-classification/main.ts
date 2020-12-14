import $ from 'jquery';
import P5 from 'p5';

import store from './store';

import { sketchController } from './controller/sketch-controller';
import { eventBindController } from './controller/event-bind-controller';

$(() => {
  eventBindController();
  new P5(sketchController, store.$app[0]);
});
