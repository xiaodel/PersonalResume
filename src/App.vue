<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <div>
    <RouterView/>
  </div>
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

}
</style>