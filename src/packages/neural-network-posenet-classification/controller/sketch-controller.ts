import P5 from 'p5';
import $ from 'jquery';
// @ts-ignore
import ml5 from 'ml5';

import store from '../store';
import { poseClassifyController } from './pose-classify-controller';
import { inferController } from './infer-controller';
import { throttle } from '../../../utils/throttle';

export const sketchController = (p: P5) => {
  let video: P5.Element;
  p.setup = () => {
    const width = store.$app.innerWidth() || 0;
    const height = store.$app.innerHeight() || 0;
    store.width = width;
    store.height = height;
    p.createCanvas(width, height);
    video = p.createCapture(p.VIDEO);
    video.hide();

    const poseNet = ml5.poseNet(video, () => {});
    poseNet.on('pose', throttle(200, poseClassifyController));
  };

  p.draw = async () => {
    p.translate(
      // @ts-ignore
      store.width / 2 - video.width / 2,
      // @ts-ignore
      store.height / 2 - video.height / 2
    );
    // @ts-ignore
    p.image(video, 0, 0, video.width || 0, video.height || 0);
    if (store.pose.length >= 1) {
      store.pose.forEach((point: any) => {
        p.fill('green');
        p.ellipse(point.position.x, point.position.y, 10, 10);
      });
    }
    if (store.isTrained) {
      const res: any = await inferController(store.pose);
      $('#show').text(res[0].label);
    }
  };
};
