<script setup>

const {data} = defineProps({data: Object})


</script>

<template>
  <div class="box">
    <div class="titleBox">
      <div class="flex align-center">
        <div class="title">{{ data.title }}</div>
        <div class="desc">{{ data.desc }}</div>
      </div>
    </div>
    <div class="module" v-for="(value,key) in data">
      <template v-if="value instanceof  Object || value instanceof  Array">
        <section class="pdf-item">
          <div class="iconBox flex">
            <div class="text">
              <div v-html="key"></div>
            </div>
            <div class="titleDecorateBox">
              <div class="decorate"></div>
            </div>
            <div class="titleDecorateBox wide">
              <div class="decorate"></div>
            </div>
          </div>
        </section>
        <div class="content">
          <template v-if="Object.prototype.toString.call(value) === '[object Array]'">
            <div class="arrayBox">
              <ol>
                <template v-for="(item) in value">

                  <template v-if="Object.prototype.toString.call(item) === '[object Array]'" class="flex">
                    <div class="listItem">
                      <template v-for="(item1) in item">

                        <template v-if="Object.prototype.toString.call(item1) === '[object Array]'" class="flex">
                          <template v-for="(item2) in item1">
                            <section class="pdf-item">
                              <li>
                                <div v-html="item2"></div>
                              </li>
                            </section>
                          </template>
                        </template>

                        <template v-if="Object.prototype.toString.call(item1) === '[object String]'">
                          <section class="pdf-item">
                            <div v-html="item1"></div>
                          </section>
                        </template>

                      </template>
                    </div>
                  </template>

                  <template v-if="Object.prototype.toString.call(item) === '[object String]'">
                    <section class="pdf-item">
                      <li>
                        <div v-html="item"></div>
                      </li>
                    </section>
                  </template>

                </template>

              </ol>
            </div>
          </template>
          <template v-if="Object.prototype.toString.call(value) === '[object Object]'">
            <section class="pdf-item">
              <div class="objectBox">
                <div class="flex">
                  <el-row :gutter="22">
                    <el-col :span="11" v-for="(item,key1) in value">
                      <div class="flex">
                        <div class="label" v-html="key1"></div>
                        <div v-html="item"></div>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="portraitBox" v-if="data.portrait">
                    <img class="portrait" :src="data.portrait"/>
                  </div>
                </div>
              </div>
            </section>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>


<style lang="scss">
.box {
  position: relative;
  width: 100%;
  height: 100%;

  .titleBox {
    position: relative;
    padding-bottom: 2rem;
    color: black;

    &:after {
      content: ' ';
      height: 0;
      position: absolute;
      bottom: 0;
      width: 60%;
      left: -1rem;
      right: 40%;
      border-width: 1.2rem 1rem;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }

    &:before {
      content: ' ';
      height: 0;
      width: 50%;
      position: absolute;
      bottom: -1rem;
      right: -1rem;
      left: calc(60% - 0.5rem);
      border-width: 1rem 0.9rem;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }

    .title {
      font-size: 2rem;
      font-weight: 600;
    }

    .desc {
      margin-left: 2rem;
      font-weight: 600;
      font-size: 1.3rem;
    }

  }

  .module {
    padding: 0 1rem;
    margin: 1rem 0;

    .iconBox {
      position: relative;

      .text {
        position: relative;
        font-size: 1.2rem;
        display: inline-block;
        min-width: 10rem;
        background-color: black;
        color: white;
        padding-left: 2rem;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          height: 0;
          right: -2rem;
          border-width: 1.98rem 2rem;
          border-style: solid;
          border-color: transparent transparent black transparent;
          z-index: 0;
        }

        &:before {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          height: 0;
          left: -1rem;
          border-width: 0.5rem 1rem;
          border-style: solid;
          border-color: transparent black transparent transparent;
          z-index: 0;
        }
      }

      .titleDecorateBox {
        transform: skewX(45deg);
        height: 2rem;
        width: .5rem;
        right: -1.2rem;
        background-color: black;

        &.wide {
          right: -1.4rem;
          width: 1.2rem;
        }

        .decorate {
          transform: skewX(-45deg);
        }
      }

    }

    .content {
      font-size: 1rem;

      .arrayBox {
        padding: 1.5rem 0;

        .listItem:not(:last-child) {
          margin-bottom: 1rem;
        }
      }

      .objectBox {
        padding: 1.5rem 2rem;

        .portraitBox {
          flex-shrink: 0;

          .portrait {
            height: 9rem;
            width: 8rem;
            object-fit: cover;
          }
        }
      }

      .label {
        flex-shrink: 0;
      }

      ol {
        list-style-type: disc;
      }
    }
  }
}
</style>