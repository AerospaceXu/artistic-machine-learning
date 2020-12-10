import store from '../store';

export const styleController = () => {
  store.$app.css({
    width: '80vw',
    height: 'calc(80vh - 88px)',
    margin: '0 auto',
  });
  store.$toggleButton.css({
    padding: '4px 8px',
  });
};
