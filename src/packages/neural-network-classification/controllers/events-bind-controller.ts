import store from '../store';

export const eventsBindController = () => {
  store.$toggleButton.on('click', () => {
    store.buttonType = store.buttonType === 'red' ? 'blue' : 'red';
  });
};
