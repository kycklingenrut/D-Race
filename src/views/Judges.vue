<template>
  <div>
    <div class="card-grid"><get-judges :category="judges"></get-judges></div>
  </div>
</template>

<script>
import GetJudges from "@/components/GetJudges.vue";

export default {
  components: { GetJudges },
  data() {
    return {
      judges: "Judges",
    };
  },
};
</script>

<style scoped>
h1 {
  padding: 50px;
}
</style>
