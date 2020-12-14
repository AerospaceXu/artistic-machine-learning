import store from '../store';

export const trainController = async () => {
  store.$mask.css({
    display: 'flex',
  });
  try {
    await store.nn.normalizeData();
  } catch (e) {
  }
  const trainingOptions = {
    epochs: 88,
    batchSize: 10,
  };
  store.nn.train(trainingOptions, (err: any) => {
    console.log(err);
    alert('训练完成！');
    store.isTrained = true;
    store.$mask.css({
      display: 'none',
    });
  });
};
