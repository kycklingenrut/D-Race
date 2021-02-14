<template>
  <div class="home">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
    components: { HomePage },
 
}
</script>
<style>
.home{
  height: 70vh;
  width: 50%;
  margin: auto;

}
.logo {
  padding-top: 30px;
  width: 500px;
  box-shadow: none;
}

</style>
