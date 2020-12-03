<template>
  <div class="wrapper">
    <div class="p5-board" ref="p5Ref" />
    <div class="buttons center">
      <a-button @click="toggleButtonType('red')">红</a-button>
      <a-button @click="toggleButtonType('blue')">蓝</a-button>
      <a-button type="primary">训练并绘制</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import NNAxisClassifyService from '../services/NNAxisClassifyService';

export default defineComponent({
  name: 'NNAxisClassify',
  setup() {
    const nnAxisClassifyService = NNAxisClassifyService.getInstance();
    const { p5Ref } = nnAxisClassifyService;

    onMounted(() => nnAxisClassifyService.initSketch());

    const toggleButtonType = (type: 'blue' | 'red') => {
      nnAxisClassifyService.toggleButtonType(type);
    };
    return {
      p5Ref,
      toggleButtonType,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;

  > .p5-board {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .buttons {
    margin-top: 32px;

    > button {
      margin: 0 8px;

      &:last-child {
        margin: 0 16px;
      }
    }
  }
}
</style>
