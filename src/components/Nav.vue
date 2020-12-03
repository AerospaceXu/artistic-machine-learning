<template>
  <nav class="center">
    <ul class="center">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="nn-axis-classify">NN坐标分类</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
nav {
  height: 56px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);

  > ul > li {
    margin: 0 12px;

    > a.router-link-exact-active {
      color: #546e7a;
      font-weight: 600;
    }
  }
}
</style>
