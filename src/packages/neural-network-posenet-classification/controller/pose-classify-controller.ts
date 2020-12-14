import store from '../store';

export const poseClassifyController = (poses: any[]) => {
  if (poses.length > 0) {
    const { pose } = poses[0];
    store.pose = pose.keypoints;
  }
};
