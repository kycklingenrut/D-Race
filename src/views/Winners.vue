<template>
  <div id="winnersPage">
    <h1>Winners</h1>
    <div class="card-grid"><GetWinners></GetWinners></div>
  </div>
</template>

<script>
import GetWinners from "@/components/GetWinners.vue";

export default {
  name: "Winners",
  components: {
    GetWinners,
  },
};
</script>

<style>
h1 {
  padding: 50px;
}
</style>