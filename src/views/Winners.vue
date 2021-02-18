<template>
  <div id="winnersPage">
    <div class="card-grid"><GetWinners :category="winners"></GetWinners></div>
  </div>
</template>

<script>
import GetWinners from "@/components/GetWinners.vue";

export default {
  name: "Winners",
  components: {
    GetWinners,
  },
  data() {
    return {
      winners: "Winners",
    };
  },
};
</script>

<style>
h1 {
  padding: 50px;
}
</style>
