<template>
  <div class="wrapper">
    <h1>👆 点击上方菜单栏选择项目</h1>
    <a href="https://ml5js.org/" target="view_window">
      ml5 官网：https://ml5js.org/
    </a>
    <a href="https://p5js.org/" target="view_window">p5 官网://p5js.org/</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  > h1 {
    margin: 32px;
    font-size: 20px;
  }
  > a {
    font-size: 16px;
    text-decoration: underline;
    margin: 6px 0;
    &:hover {
      color: #546E7A;
    }
  }
}
</style>
