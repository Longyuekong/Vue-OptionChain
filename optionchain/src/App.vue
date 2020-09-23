<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 v-if="useOptionChain(arr)['0?.obj?.a?.b']">数组对象</h1>
    <h1 v-if="useOptionChain(obj)['arr?.0?.a']">对象数组</h1>
  </div>
</template>

<script>
import useOptionChain from "@/utils";

export default {
  name: "App",
  components: {},
  data() {
    return {
      arr: [
        {
          obj: {
            a: {
              b: "数组对象",
            },
          },
        },
      ],
      obj: {
        arr: [
          {
            a: "对象数组",
          },
        ],
      },
    };
  },
  methods: {
    useOptionChain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
