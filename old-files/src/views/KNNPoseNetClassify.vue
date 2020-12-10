<template>
  <div class="wrapper">
    <h2>KNN + PoseNet 姿势识别</h2>
    <div class="main center">
      <div class="pose pose-1">
        <h3>姿势一</h3>
        <canvas ref="poseOneCanvasRef" width="200" height="150" />
        <a-button type="primary" @click="handlePhotograph('poseLeft')">
          记录
        </a-button>
      </div>
      <Video ref="videoRef" />
      <div class="pose pose-2">
        <h3>姿势二</h3>
        <canvas ref="poseTwoCanvasRef" width="200" height="150" />
        <a-button type="primary" @click="handlePhotograph('poseRight')">
          记录
        </a-button>
      </div>
    </div>
    <a-button @click="startToRecognize">识别模式</a-button>
    <h2>{{ pose }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import KNNPoseNetClassifyService from '../services/KNNPoseNetClassifyService';

import Video from '../ui-kits/Video.vue';

import takePhoto from '../utils/takePhoto';

export default defineComponent({
  name: 'KNNPoseNetClassify',
  components: { Video },
  setup() {
    const knnPoseNetClassifyService = new KNNPoseNetClassifyService();
    const {
      videoRef,
      poseTwoCanvasRef,
      poseOneCanvasRef,
      pose,
    } = knnPoseNetClassifyService;

    const handlePhotograph = (type: string) => {
      if (
        videoRef.value.videoRef &&
        poseOneCanvasRef.value &&
        poseTwoCanvasRef.value
      ) {
        takePhoto(
          videoRef.value.videoRef,
          type === 'poseLeft' ? poseOneCanvasRef.value : poseTwoCanvasRef.value,
          200,
          150
        );
        knnPoseNetClassifyService.add(type);
      }
    };

    const startToRecognize = () => {
      knnPoseNetClassifyService.recognize();
    };

    return {
      pose,
      videoRef,
      poseOneCanvasRef,
      poseTwoCanvasRef,
      handlePhotograph,
      startToRecognize,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper > .main {
  > .pose {
    margin: 0 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > canvas {
      margin: 12px;
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
