import { Ref, ref, onMounted } from 'vue';
// @ts-ignore
import ml5 from 'ml5';

export default class KNNPoseNetClassifyService {
  videoRef: Ref<HTMLVideoElement | null>;
  poseOneCanvasRef: Ref<HTMLCanvasElement | null>;
  poseTwoCanvasRef: Ref<HTMLCanvasElement | null>;

  knn: any;
  poseNet: any;
  poses: any = [];
  pose: Ref<string>;

  constructor() {
    this.pose = ref('');
    this.knn = ml5.KNNClassifier();
    this.videoRef = ref(null);
    this.poseOneCanvasRef = ref(null);
    this.poseTwoCanvasRef = ref(null);
    onMounted(() => {
      // @ts-ignore
      this.poseNet = ml5.poseNet(this.videoRef.value.videoRef, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('模型加载完毕');
        this.poseNet.on('pose', (res: any) => {
          this.poses = res;
        });
      });
    });
  }

  async add(label: string) {
    const poseArray = this.poses[0].pose.keypoints.map((p: any) => [
      p.score,
      p.position.x,
      p.position.y,
    ]);
    const l = ml5.tf.tensor2d(poseArray);
    this.knn.addExample(l, label);
  }

  recognize() {
    const numLabels = this.knn.getNumLabels();
    if (numLabels <= 0) {
      console.error('There is no examples in any label');
      return;
    }
    const poseArray = this.poses[0].pose.keypoints.map((p: any) => [
      p.score,
      p.position.x,
      p.position.y,
    ]);
    const l = ml5.tf.tensor2d(poseArray);
    this.knn.classify(l, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      this.pose.value = res.label;
      this.recognize();
    });
  }
}
