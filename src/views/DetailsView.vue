<script setup>
import {ref} from "vue";
import {useRoute} from 'vue-router';
import JsonEditorVue from 'json-editor-vue3'
import Vue3Html2pdf from 'vue3-html2pdf'
import data from "@/data/data.json";

const {params} = useRoute();

let componentData = ref(data);

function onJsonChange(json) {
  console.warn(json)
  componentData.value = {...json};
}

function doPrint($refs) {
  $refs.generatePdf()
}

function onProgress(event) {
  console.warn(event)
}

function hasStartedGeneration(event) {
  console.warn(event)
}

function hasGenerated(event) {
  console.warn(event)
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
          <el-button type="primary" @click="doPrint($refs.html2Pdf)">打印
          </el-button>
        </nav>
        <div class="templateBox">
          <div class="templateBor">
            <div class="template">
              <Vue3Html2pdf
                  :show-layout="true"
                  :float-layout="false"
                  :enable-download="false"
                  :preview-modal="true"
                  :html-to-pdf-options="{margin:16}"
                  pdf-content-width="820px"
                  :pdf-quality="2"
                  :manual-pagination="false"
                  pdf-format="a4"
                  pdf-orientation="portrait"
                  @progress="onProgress($event)"
                  @hasStartedGeneration="hasStartedGeneration"
                  @hasGenerated="hasGenerated($event)"
                  ref="html2Pdf"
              >
                <template v-slot:pdf-content>
                  <component :is="params.id" :data="componentData"></component>
                </template>
              </Vue3Html2pdf>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.details {
  flex: 1;
  height: 100vh;
  overflow: hidden;

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
    height: calc(100vh - 3rem);
    overflow-y: auto;
    width: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }

    .templateBor {
      border: 1px solid #2c3e50;
      padding: 5rem;
      position: relative;

      .template {
        width: 100%;
        overflow: hidden;
      }
    }


  }
}


@media (max-width: 900px) {
  .details {
    .editorBox {

      width: 100%;
      height: 50vh;

      .editor {
        width: 100%;
        height: 50vh;
      }
    }

    .templateBox {
      max-height: none;
      display: flex;
      align-items: center;
      justify-content: center;

      .template {
        overflow: hidden;
        height: auto;
        border: 1px solid #2c3e50;
        transform: scale(0.5);
        margin-bottom: 8rem;
      }
    }

  }
}
</style>
