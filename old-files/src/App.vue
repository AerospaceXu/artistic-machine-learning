<template>
  <header class="center">Designed by ml5.js</header>
  <Nav />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Nav from './components/Nav.vue';

export default defineComponent({
  name: 'App',
  components: { Nav },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
header {
  height: 44px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
