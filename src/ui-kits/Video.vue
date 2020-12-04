<template>
  <video src="" ref="videoRef" :width="width" :height="height" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Video',
  props: {
    height: {
      type: Number,
      default: 600,
    },
    width: {
      type: Number,
      default: 800,
    },
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement | null>(null);

    onMounted(() => {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            width: { ideal: props.width },
            height: { ideal: props.height },
          },
          audio: false,
        })
        .then(
          (stream) => {
            stream.getVideoTracks();
            if (videoRef.value) {
              videoRef.value.srcObject = stream;
              videoRef.value.onloadedmetadata = () => {
                videoRef.value?.play();
              };
            }
          },
          (err) => {
            throw new Error(err);
          }
        );
    });

    return {
      videoRef,
    };
  },
});
</script>

<style scoped lang="scss"></style>
