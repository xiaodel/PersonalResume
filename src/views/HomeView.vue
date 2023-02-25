<script setup>
import templates from "@/components/template/index";
import data from "@/data/data.json";

</script>

<template>
  <div class="pages">
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="titleBox flex">
          <div><h2>请使用PC端体验</h2></div>
          <div><a href="https://github.com/xiaodel/PersonalResume" target="_blank">开源地址</a></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="nav">
          <div class="item" v-for="(value,key) in templates" :key="key">
            <RouterLink :to="`/details/${key}`" class="link">
              <div class="border">
                <component :is="value" :data="data"></component>
              </div>
            </RouterLink>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.pages {
  max-width: 1200px;
  margin: auto;

  .titleBox {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;


    .item {
      overflow-y: auto;
      border: 1px solid #2c3e50;
      transform: scale(0.5);
      padding: 2rem;
      width: 600px;
      height: 800px;


      &::-webkit-scrollbar {
        width: 8px;
        height: 10px;
      }

      .border {
        overflow: hidden;
      }

    }
  }

  @media (max-width: 600px) {
    .nav {
      .item {
        min-width: 600px;
        height: 800px;
        overflow-y: auto;
        border: 1px solid #2c3e50;
        transform: scale(0.5);
      }
    }
  }
}
</style>