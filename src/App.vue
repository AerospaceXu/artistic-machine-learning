<template>
  <header class="center">Designed by ml5.js</header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
header {
  height: 44px;
}
</style>
