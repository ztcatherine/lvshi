<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { bus } from "./components/bus.js";?
// import house from "./components/house.vue";
export default {
  // components: { house },
  name: "App",
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
