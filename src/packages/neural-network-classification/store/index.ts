import $ from 'jquery';

import { ClickData } from '../interfaces/click-data';

const store: {
  $app: JQuery<HTMLElement>;
  $toggleButton: JQuery<HTMLElement>;
  clickData: ClickData[];
  buttonType: string;
} = {
  $app: $('#app'),
  $toggleButton: $('#toggle-button'),
  clickData: [],
  buttonType: 'red',
};

export default store;
