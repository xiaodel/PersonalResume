<script setup>
import templates from "@/components/template/index";
import data from "@/data/data.json";

</script>

<template>
  <nav class="nav">
    <div class="item" v-for="(value,key) in templates" :key="key">
      <RouterLink :to="`/details/${key}`" class="link">
        <component :is="value" :data="data"></component>
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="scss">

.nav {
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    width: 600px;
    height: 800px;
    overflow-y: auto;
    border: 1px solid #2c3e50;
    transform: scale(0.5);

    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }

  }
}

@media (max-width: 800px) {
  .nav {
    .item {
      width: 900px;
      height: 800px;
      overflow-y: auto;
      border: 1px solid #2c3e50;
    }
  }
}
</style>