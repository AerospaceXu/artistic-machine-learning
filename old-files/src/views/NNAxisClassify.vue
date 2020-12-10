<template>
  <div class="wrapper">
    <h2>神经网络坐标分类</h2>
    <div class="p5-board" ref="p5Ref" />
    <div class="buttons center">
      <a-button @click="toggleButtonType('red')">红</a-button>
      <a-button @click="toggleButtonType('blue')">蓝</a-button>
      <a-button type="primary" @click="trainAndDraw" :loading="isTraining">
        训练并绘制
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import NNAxisClassifyService from '../services/NNAxisClassifyService';

import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'NNAxisClassify',
  setup() {
    const nnAxisClassifyService = NNAxisClassifyService.getInstance();
    const { p5Ref } = nnAxisClassifyService;

    const isTraining = ref<boolean>(false);

    onMounted(() => nnAxisClassifyService.initSketch());

    const toggleButtonType = (type: 'blue' | 'red') => {
      nnAxisClassifyService.toggleButtonType(type);
    };

    const trainAndDraw = async () => {
      isTraining.value = true;
      try {
        await nnAxisClassifyService.classify();
        await nnAxisClassifyService.infer();
        message.success('处理成功');
      } catch (e) {
        message.error(e.message);
      } finally {
        setTimeout(() => (isTraining.value = false), 300);
      }
    };

    return {
      p5Ref,
      toggleButtonType,
      trainAndDraw,
      isTraining,
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
