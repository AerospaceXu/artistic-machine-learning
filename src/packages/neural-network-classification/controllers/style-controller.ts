import { $app } from '../store';

export const styleController = () => {
  $app.css({
    width: '80vw',
    height: 'calc(80vh - 88px)',
    margin: '0 auto',
  });
};
