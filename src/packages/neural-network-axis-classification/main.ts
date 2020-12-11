import P5 from 'p5';
import $ from 'jquery';

import store from './store';

import { eventsBindController } from './controllers/events-bind-controller';
import { sketchController } from './controllers/sketch-controller';

$(() => {
  eventsBindController();
  new P5(sketchController, store.$app[0]);
});
