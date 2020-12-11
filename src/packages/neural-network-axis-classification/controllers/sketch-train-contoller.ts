import store from '../store';
import { getSpecial } from '../utils/getSpecial';

export const sketchTrainController = () => {
  store.$mask.css({
    display: 'flex',
  });
  const { clickData, nn } = store;
  if (clickData.length < 2) {
    alert('请添加至少两个数据');
    return;
  }
  clickData.forEach((item) => {
    const { x, y, type } = item;
    const output = {
      type,
    };
    nn.addData(getSpecial(x, y), output);
  });
  try {
    nn.normalizeData();
  } catch (e) {
    alert('至少拥有两种数据，请点击「切换」按钮');
    return;
  }
  const trainingOptions = {
    epochs: store.$options['epochs'].val() || 35,
    batchSize: 10,
  };
  nn.train(trainingOptions, () => {
    alert('训练完成！');
    store.$mask.css({
      display: 'none',
    });
  });
};
