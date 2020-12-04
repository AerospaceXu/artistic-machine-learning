<template>
  <div class="wrapper">
    <h2>KNN + PoseNet 姿势识别</h2>
    <Video />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Video from '../ui-kits/Video.vue';

export default defineComponent({
  name: 'KNNPoseNetClassify',
  components: { Video },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
