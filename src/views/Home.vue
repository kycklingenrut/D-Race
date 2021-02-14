<template>
  <div class="home">
    <img class="logo" alt="Logo" src="../assets/Icon.svg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.logo {
  padding-top: 30px;
  width: 500px;
  box-shadow: none;
}
</style>
