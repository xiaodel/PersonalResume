<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <RouterView/>
</template>

<style lang="scss">
html {
  font-size: 12px;

  .flex {
    display: flex;
  }

  .align-center {
    align-items: center;
  }

  .body {
    flex: 1;
  }
}
</style>