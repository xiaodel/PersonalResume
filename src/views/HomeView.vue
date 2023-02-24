<script setup>
import templates from "@/components/template/index";
import data from "@/data/data.json";
import {reactive} from "vue";

const width = 500;
const styleObject = reactive({width: width + 'px', height: (297 / 210 * width) + 'px'});
</script>

<template>
  <nav class="nav">
    <div class="item" v-for="(value,key) in templates" :key="key">
      <RouterLink :to="`/details/${key}`" :style="styleObject">
        <component :is="value" :data="data"></component>
      </RouterLink>
    </div>
  </nav>
</template>

<style>

.nav .item {
  width: 300px;
}

/*@media (min-width: 1024px) {*/
/*  .about {*/
/*    min-height: 100vh;*/
/*    display: flex;*/
/*    align-items: center;*/
/*  }*/
/*}*/
</style>