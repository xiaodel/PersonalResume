<script setup>
import {ref} from "vue";
import {useRoute} from 'vue-router';
import JsonEditorVue from 'json-editor-vue3'
import printJS from 'print-js'
import 'print-js/dist/print.css';
import data from "@/data/data.json";

const {params} = useRoute();

let componentData = ref(data);

function onJsonChange(json) {
  console.warn(json)
  componentData.value = {...json};
}

function doPrint() {

}
</script>

<template>
  <div class="details">
    <el-row :gutter="24">

      <el-col :span="12">
        <div class="editorBox">
          <JsonEditorVue
              class="editor"
              v-model="componentData"
              :showBtns="false"
              :mode="'code'"
              @change="onJsonChange"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <nav class="navBox flex">
          <el-button type="primary" @click="()=>{
            printJS({
    printable: 'printJS-form',
    type: 'html',
    targetStyles: ['*'],
    style: $attrs
  });
          }">打印
          </el-button>
        </nav>
        <div class="templateBox">
          <!--startprint-->
          <div class="template" id="printJS-form">
            <component :is="params.id" :data="componentData"></component>
          </div>
          <!--endprint-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.details {
  flex: 1;
  height: 100vh;

  .editorBox {
    width: 100%;

    .editor {
      width: 100%;
      height: 100vh;
    }
  }

  .navBox {
    height: 3rem;
    align-items: center;
  }

  .templateBox {
    overflow-y: auto;
    width: 100%;
    max-height: calc(100vh - 3rem);

    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }


    .template {
      border: 1px solid #2c3e50;
      width: 100%;
    }

  }
}
</style>
