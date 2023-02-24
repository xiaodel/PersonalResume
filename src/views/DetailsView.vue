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
  printJS({
    printable: 'printJS-form',
    type: 'html',
    targetStyles: ['*'],
  })
}
</script>

<template>
  <div class="details">
    <el-row :gutter="24">

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <nav class="navBox flex">
          <el-button type="primary" @click="doPrint">打印
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
    display: flex;
    align-items: center;
    justify-content: center;

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


@media (max-width: 768px) {
  .details {
    .editor {
      width: 100%;
      height: 50vh;
    }

    .templateBox {
      max-height: none;

      .template {
        overflow: hidden;
        min-width: 600px;
        border: 1px solid #2c3e50;
        transform: scale(0.6);
      }
    }

  }
}
</style>
